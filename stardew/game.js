const loading = document.getElementById("loading");
const canvas = document.getElementById("canvas");
const musicChoice = document.getElementById("music-choice");

// --- OPFS helpers ---
const opfs = await navigator.storage.getDirectory();

async function opfsHas(name) {
	try { await opfs.getFileHandle(name); return true; } catch { return false; }
}
async function opfsRead(name) {
	return new Uint8Array(await (await (await opfs.getFileHandle(name)).getFile()).arrayBuffer());
}
async function opfsWrite(name, data) {
	const w = await (await opfs.getFileHandle(name, { create: true })).createWritable();
	await w.write(data); await w.close();
}

// --- Chunked tar download ---
async function downloadTar(base, label) {
	loading.textContent = `Downloading ${label}...`;
	const count = parseInt(await (await fetch(base + ".count")).text());
	const chunks = [];
	let total = 0;
	for (let i = 0; i < count; i++) {
		const res = await fetch(`${base}${String(i).padStart(2, "0")}`);
		if (!res.ok) throw new Error(`Failed: ${res.status}`);
		const reader = res.body.getReader();
		for (;;) {
			const { done, value } = await reader.read();
			if (done) break;
			chunks.push(value);
			total += value.length;
			loading.textContent = `Downloading ${label}... ${(total / 1048576) | 0} MB`;
		}
	}
	const tar = new Uint8Array(total);
	let off = 0;
	for (const c of chunks) { tar.set(c, off); off += c.length; }
	return tar;
}

async function getTar(base, label, key) {
	try {
		loading.textContent = `Loading cached ${label}...`;
		return await opfsRead(key);
	} catch {
		const tar = await downloadTar(base, label);
		try { loading.textContent = `Caching ${label}...`; await opfsWrite(key, tar); } catch {}
		return tar;
	}
}

// --- Music choice (skip if audio already cached) ---
const audioCached = await opfsHas("ContentAudio.tar");
const wantMusic = audioCached || await new Promise((resolve) => {
	musicChoice.style.display = "";
	document.getElementById("btn-no-music").onclick = () => { musicChoice.style.display = "none"; resolve(false); };
	document.getElementById("btn-with-music").onclick = () => { musicChoice.style.display = "none"; resolve(true); };
});
musicChoice.style.display = "none";

// --- Parallel: download tars + boot runtime ---
const contentP = getTar("Content.tar", "game content", "Content.tar");
const audioP = wantMusic ? getTar("ContentAudio.tar", "music", "ContentAudio.tar") : Promise.resolve(null);
const runtimeP = (async () => {
	const { dotnet } = await import("./_framework/dotnet.js");
	return dotnet
		.withModuleConfig({ canvas })
		.withEnvironmentVariable("MONO_SLEEP_ABORT_LIMIT", "99999")
		.withRuntimeOptions([
			`--jiterpreter-minimum-trace-hit-count=${500}`,
			`--jiterpreter-trace-monitoring-period=${100}`,
			`--jiterpreter-trace-monitoring-max-average-penalty=${150}`,
			`--jiterpreter-wasm-bytes-limit=${64 * 1024 * 1024}`,
			`--jiterpreter-table-size=${32 * 1024}`,
		])
		.withResourceLoader((type, _name, defaultUri, _integrity, behavior) => {
			if (type === "dotnetwasm" && behavior === "dotnetwasm") {
				return (async () => {
					const count = parseInt(await (await fetch(defaultUri + ".count")).text());
					let idx = 0;
					const fetchNext = async () => {
						if (idx >= count) return null;
						const res = await fetch(defaultUri + idx);
						idx++;
						return res.ok ? res.body.getReader() : null;
					};
					let current = await fetchNext();
					if (!current) throw new Error("failed to fetch first wasm chunk");
					return new Response(new ReadableStream({
						async pull(controller) {
							const { value, done } = await current.read();
							if (done || !value) {
								current = await fetchNext();
								if (current) await this.pull(controller);
								else controller.close();
							} else controller.enqueue(value);
						},
					}), { headers: { "Content-Type": "application/wasm" } });
				})();
			}
		})
		.create();
})();

const [contentTar, audioTar, runtime] = await Promise.all([contentP, audioP, runtimeP]);
const exports = await runtime.getAssemblyExports(runtime.getConfig().mainAssemblyName);

// --- Extract tar into WasmFS ---
function extractTar(tar, prefix) {
	let pos = 0, count = 0;
	const dec = new TextDecoder();
	const str = (buf, o, n) => { let e = o; while (e < o + n && buf[e]) e++; return dec.decode(buf.subarray(o, e)); };
	const oct = (buf, o, n) => { const s = str(buf, o, n).trim(); return s ? parseInt(s, 8) : 0; };
	while (pos + 512 <= tar.length) {
		const h = tar.subarray(pos, pos + 512);
		if (!h[0]) break;
		const name = str(h, 0, 100), size = oct(h, 124, 12), type = h[156];
		const pref = str(h, 345, 155);
		const full = pref ? pref + "/" + name : name;
		pos += 512;
		if (type === 53 || name.endsWith("/")) {
			exports.WasmBootstrap.CreateContentDirectory(prefix + full);
		} else if (type === 48 || type === 0) {
			exports.WasmBootstrap.WriteContentFile(prefix + full, tar.subarray(pos, pos + size));
			count++;
		}
		pos += Math.ceil(size / 512) * 512;
	}
	return count;
}

await runtime.runMain();
await exports.WasmBootstrap.PreInit();

// Restore saves from OPFS
try {
	const savesTar = await opfsRead("Saves.tar");
	exports.WasmBootstrap.CreateContentDirectory("/libsdl/saves/Saves");
	extractTar(savesTar, "/libsdl/saves/Saves/");
} catch {}

loading.textContent = "Loading game files...";
extractTar(contentTar, "/libsdl/");
if (audioTar) { loading.textContent = "Loading music..."; extractTar(audioTar, "/libsdl/"); }

loading.classList.add("hidden");

const dpr = window.devicePixelRatio || 1;
const w = Math.round(canvas.clientWidth * dpr) || 1280;
const h = Math.round(canvas.clientHeight * dpr) || 720;
await exports.WasmBootstrap.Init(w, h);

new ResizeObserver(() => {
	const dpr = window.devicePixelRatio || 1;
	const nw = Math.round(canvas.clientWidth * dpr);
	const nh = Math.round(canvas.clientHeight * dpr);
	if (nw > 0 && nh > 0) try { exports.WasmBootstrap.Resize(nw, nh); } catch {}
}).observe(canvas);

try { navigator.keyboard?.lock(); } catch {}
document.addEventListener("keydown", (e) => {
	if (["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(e.code))
		e.preventDefault();
});

await exports.WasmBootstrap.MainLoop();
