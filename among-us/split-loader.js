(function () {
  "use strict";
  var base = window.splitRoot || "";

  function log() {
    if (window.splitDebug) {
      console.log.apply(console, ["[split-loader]"].concat(Array.prototype.slice.call(arguments)));
    }
  }

  function dirname(p) {
    var i = p.lastIndexOf("/");
    return i >= 0 ? p.substring(0, i) : "";
  }

  function safePathname(urlStr) {
    try {
      return new URL(urlStr, location.href).pathname;
    } catch (e) {
      if (/^https?:\/\//i.test(urlStr)) {
        try { return new URL(urlStr).pathname; } catch (e2) {}
      }
      return urlStr.startsWith("/") ? urlStr : "/" + urlStr;
    }
  }

  function resolve(urlStr) {
    return safePathname(urlStr);
  }

  function mimeFor(original) {
    if (/\.wasm$/i.test(original)) return "application/wasm";
    if (/\.data$/i.test(original)) return "application/octet-stream";
    if (/\.bundle$/i.test(original)) return "application/octet-stream";
    return "application/octet-stream";
  }

  var manifest = [];            
  var blobByPath = Object.create(null); 
  var originalByPath = Object.create(null); 
  var nativeFetch = window.fetch ? window.fetch.bind(window) : null;

 
  function index(entries) {
    (entries || []).forEach(function (entry) {
      var originalPath = resolve(base + entry.original);
      blobByPath[originalPath] = { blob: null, size: entry.size };
      originalByPath[originalPath] = entry;
    });
  }


  function preloadAll(onProgress) {
    var files = [];
    manifest.forEach(function (entry) {
      var d = dirname(entry.original);
      entry.parts.forEach(function (part) {
        files.push({ url: base + (d ? d + "/" : "") + part, part: part, entry: entry });
      });
    });

    var total = files.length;
    var loaded = 0;
    var failures = [];
    var buffers = Object.create(null); 
    var keys = Object.create(null);    

    manifest.forEach(function (entry) {
      var originalPath = resolve(base + entry.original);
      buffers[originalPath] = new Array(entry.parts.length);
      keys[originalPath] = entry;
    });

    var tasks = files.map(function (f) {
      return nativeFetch(f.url).then(function (resp) {
        if (!resp.ok) throw new Error("Failed to fetch part: " + f.url + " (" + resp.status + ")");
        return resp.arrayBuffer();
      }).then(function (buf) {
        var originalPath = resolve(base + f.entry.original);
        var idx = f.entry.parts.indexOf(f.part);
        buffers[originalPath][idx] = buf;
        loaded++;
        if (onProgress) onProgress(loaded, total);
      }).catch(function (err) {
        failures.push((err && err.message) ? err.message : String(err));
      });
    });

    return Promise.all(tasks).then(function () {
      if (failures.length > 0) {
        throw new Error("Failed to load " + failures.length + " of " + total +
          " game data part(s):\n" + failures.join("\n"));
      }
      Object.keys(buffers).forEach(function (originalPath) {
        var entry = keys[originalPath];
        var blob = new Blob(buffers[originalPath], { type: mimeFor(entry.original) });
        if (blob.size !== entry.size) {
          log("Size mismatch for " + originalPath + " expected " + entry.size + " got " + blob.size);
        }
        blobByPath[originalPath].blob = blob;
      });
    });
  }

 
  function legacyCopy(text, btn) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.cssText = "position:fixed;opacity:0;";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
      if (btn) btn.textContent = ok ? "Copied!" : "Copy failed";
    } catch (e) {
      if (btn) btn.textContent = "Copy failed";
    }
  }

  function showErrorDialog(lines) {
    if (typeof document === "undefined") return;
    var message = (lines || []).join("\n");

    var overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.75);" +
      "color:#fff;font-family:Consolas,Menlo,monospace;font-size:14px;z-index:999999;" +
      "display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;";

    var box = document.createElement("div");
    box.style.cssText = "background:#1e1e1e;border:1px solid #e5484d;border-radius:8px;padding:20px;" +
      "max-width:720px;width:100%;max-height:80vh;overflow:auto;box-sizing:border-box;";

    var title = document.createElement("div");
    title.style.cssText = "color:#e5484d;font-weight:bold;font-size:16px;margin-bottom:8px;";
    title.textContent = "Failed to load game data parts";

    var pre = document.createElement("pre");
    pre.style.cssText = "white-space:pre-wrap;word-break:break-word;background:#111;padding:12px;" +
      "border-radius:4px;margin:8px 0;";
    pre.textContent = message;

    var copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy Error";
    copyBtn.style.cssText = "background:#e5484d;color:#fff;border:none;border-radius:4px;padding:8px 14px;" +
      "cursor:pointer;font-size:14px;";
    copyBtn.onclick = function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(message).then(function () {
          copyBtn.textContent = "Copied!";
          setTimeout(function () { copyBtn.textContent = "Copy Error"; }, 2000);
        }, function () { legacyCopy(message, copyBtn); });
      } else {
        legacyCopy(message, copyBtn);
      }
    };

    var retryBtn = document.createElement("button");
    retryBtn.textContent = "Retry";
    retryBtn.style.cssText = "background:#333;color:#fff;border:1px solid #555;border-radius:4px;" +
      "padding:8px 14px;cursor:pointer;font-size:14px;";
    retryBtn.onclick = function () {
      document.body.removeChild(overlay);
      window.location.reload();
    };

    var btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:8px;";
    btnRow.appendChild(copyBtn);
    btnRow.appendChild(retryBtn);

    box.appendChild(title);
    box.appendChild(pre);
    box.appendChild(btnRow);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }

  var originalFetch = nativeFetch;
  window.fetch = function (input, init) {
    var target = null;
    var blobInfo = null;
    try {
      var u = (input instanceof Request) ? input.url : String(input);
      var p = safePathname(u);

      for (var key in blobByPath) {
        if (p === key || p.endsWith("/" + key.replace(/^\//, ""))) {
          target = key;
          blobInfo = blobByPath[key];
          break;
        }
      }
    } catch (e) {
      target = null;
    }
    if (target && blobInfo) {
      if (!blobInfo.blob) {
        return Promise.reject(new Error("[split-loader] Split file not preloaded yet: " + target));
      }
      var headers = new Headers((init && init.headers) || {});
      if (!headers.has("Content-Type")) headers.set("Content-Type", blobInfo.blob.type);
      return Promise.resolve(new Response(blobInfo.blob, { status: 200, statusText: "OK", headers: headers }));
    }
    return originalFetch.apply(window, arguments);
  };

  window.splitLoader = {

    preload: function (onProgress) {
      return originalFetch(base + "split_manifest.json").then(function (resp) {
        if (!resp.ok) throw new Error("Failed to load " + base + "split_manifest.json (" + resp.status + ")");
        return resp.json();
      }).then(function (data) {
        manifest = data || [];
        index(manifest);
        return preloadAll(onProgress);
      }).then(function () {
        log("All split parts preloaded and reassembled.");
      }).catch(function (err) {
        log("Preload failed:", err);
        showErrorDialog([err && err.message ? err.message : String(err)]);
        throw err;
      });
    },

    debugError: function () {
      showErrorDialog([
        "Failed to load 1 of 3 game data part(s):",
        "Failed to fetch part: Build/data.part.2 (404)",
        "(this is an example error shown by splitLoader.debugError)"
      ]);
    }
  };

  if (typeof document !== "undefined") {
    document.addEventListener("keydown", function (e) {
      var tag = (e.target && e.target.tagName) || "";
      if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag)) return;
      if (e.key !== "`" && e.keyCode !== 192) return;
      e.preventDefault();
      window.splitLoader.debugError();
    });
  }

  if (window.splitDebug && typeof location !== "undefined" &&
      /splitError/i.test(location.search)) {
    window.splitLoader.debugError();
  }
})();
