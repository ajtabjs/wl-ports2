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

  function resolve(urlStr) {
    return new URL(urlStr, location.href).pathname;
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
      });
    });

    return Promise.all(tasks).then(function () {
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

 
  var originalFetch = nativeFetch;
  window.fetch = function (input, init) {
    var target = null;
    var blobInfo = null;
    try {
      var u = (input instanceof Request) ? input.url : String(input);
      var p = new URL(u, location.href).pathname;

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
      });
    }
  };
})();
