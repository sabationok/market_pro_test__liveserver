// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4UaHd":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "41d92038f295a5f7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="./__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aZCxy":[function(require,module,exports) {
// ! Аля база даних із масивом обєктів у яких вся інформація про луки стилістів
const styleMakersArray = [
    {
        stylemenName: "Галя Черепиця Стайл",
        stylemenCode: "324",
        productList: [
            {
                id: 10000019,
                name: "Сукня, синя",
                articul: "945919",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Галя Черепиця Стайл",
                publicatorCode: "324",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemId: 1,
                        itemName: "Сукня вечірня, шовкова, рожева",
                        itemLink: "./",
                        itemPrice: "3282",
                        itemCurrency: "UAH",
                        itemPosTop: "50%",
                        itemPosLeft: "40%"
                    },
                    {
                        itemId: 2,
                        itemName: 'Туфлі жіночі, "Мон-бланк',
                        itemLink: "./",
                        itemPrice: "2382",
                        itemCurrency: "UAH",
                        itemPosTop: "88%",
                        itemPosLeft: "42%"
                    }, 
                ]
            },
            {
                id: 10000018,
                name: "Сукня, рожева",
                articul: "945918",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Галя Черепиця Стайл",
                publicatorCode: "324",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemsId: 1,
                        itemsName: "Сукня вечірня, шовкова, рожева",
                        itemsLink: "./",
                        itemsPrice: "3282",
                        itemsCurrency: "UAH",
                        itemsPosTop: "50%",
                        itemsPosLeft: "40%"
                    },
                    {
                        itemsId: 2,
                        itemsName: 'Туфлі жіночі, "Мон-бланк',
                        itemsLink: "./",
                        itemsPrice: "2382",
                        itemsCurrency: "UAH",
                        itemsPosTop: "88%",
                        itemsPosLeft: "42%"
                    }, 
                ]
            }, 
        ]
    },
    {
        stylemenName: "Елеонора шухля",
        stylemenCode: "415",
        productList: [
            {
                id: 10000015,
                name: "Сукня, пастель",
                articul: "945915",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Елеонора шухля",
                publicatorCode: "415",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemsId: 1,
                        itemsName: "Сукня вечірня, шовкова, рожева",
                        itemsLink: "./",
                        itemsPrice: "3282",
                        itemsCurrency: "UAH",
                        itemsPosTop: "50%",
                        itemsPosLeft: "40%"
                    },
                    {
                        itemsId: 2,
                        itemsName: 'Туфлі жіночі, "Мон-бланк',
                        itemsLink: "./",
                        itemsPrice: "2382",
                        itemsCurrency: "UAH",
                        itemsPosTop: "88%",
                        itemsPosLeft: "42%"
                    }, 
                ]
            },
            {
                id: 10000014,
                name: "Сукня, синя",
                articul: "945914",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Елеонора шухля",
                publicatorCode: "415",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemsId: 1,
                        itemsName: "Сукня вечірня, шовкова, рожева",
                        itemsLink: "./",
                        itemsPrice: "3282",
                        itemsCurrency: "UAH",
                        itemsPosTop: "50%",
                        itemsPosLeft: "40%"
                    },
                    {
                        itemsId: 2,
                        itemsName: 'Туфлі жіночі, "Мон-бланк',
                        itemsLink: "./",
                        itemsPrice: "2382",
                        itemsCurrency: "UAH",
                        itemsPosTop: "88%",
                        itemsPosLeft: "42%"
                    }, 
                ]
            }, 
        ]
    },
    {
        stylemenName: "Іван Солярка",
        stylemenCode: "014",
        productList: [
            {
                id: 10000010,
                name: "Сукня зелена",
                articul: "945916",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Іван Солярка",
                publicatorCode: "415",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemId: 1,
                        itemName: "Сукня вечірня, шовкова, рожева",
                        itemLink: "./",
                        itemPrice: "3282",
                        itemCurrency: "UAH",
                        itemPosTop: "50%",
                        itemPosLeft: "40%"
                    },
                    {
                        itemId: 2,
                        itemName: 'Туфлі жіночі, "Мон-бланк',
                        itemLink: "./",
                        itemPrice: "2382",
                        itemCurrency: "UAH",
                        itemPosTop: "88%",
                        itemPosLeft: "42%"
                    }, 
                ]
            },
            {
                id: 10000011,
                name: "Сукня голуба",
                articul: "945917",
                price: 2582,
                cashbackLvl: "03",
                currency: "UAH",
                publicatorType: "Стиліст",
                publicatorName: "Іван Солярка",
                publicatorCode: "415",
                section: "Одяг жіночий",
                mainCategory: "Сукні",
                category: "Вечірні сукні",
                availbility: "у наявності",
                stock: "15",
                manufacturingTime: "2",
                imagesList: {
                    imageUrl_main: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp",
                    imageUrl_main_2x: "",
                    imageUrl_1: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_2: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
                    imageUrl_3: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
                    imageUrl_4: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
                    imageUrl_5: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp",
                    imageUrl_6: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp"
                },
                lookItemsList: [
                    {
                        itemId: 1,
                        itemName: "Сукня вечірня, шовкова, рожева",
                        itemLink: "./",
                        itemPrice: "3282",
                        itemCurrency: "UAH",
                        itemPosTop: "50%",
                        itemPosLeft: "40%"
                    },
                    {
                        itemId: 2,
                        itemName: 'Туфлі жіночі, "Мон-бланк',
                        itemLink: "./",
                        itemPrice: "2382",
                        itemCurrency: "UAH",
                        itemPosTop: "88%",
                        itemPosLeft: "42%"
                    }, 
                ]
            }, 
        ]
    }, 
];
// ! рефакторинг
// ? Обєкт яккий потрібно вставити у функцію для створення сторінки
let refactoredLookPageObj = {
    classForMakeList: ".js-styleMaker",
    lookMakersData: styleMakersArray
};
createLooksPage(refactoredLookPageObj);
function createLooksPage({ classForMakeList , lookMakersData , ...others }) {
    let stlyleMakerListEl = document.querySelectorAll(classForMakeList);
    stlyleMakerListEl.forEach((styleMaker)=>{
        let publicatorCodeToCompare = styleMaker.dataset.stylemaker;
        let foundedLookList = founderOfLooksList(lookMakersData, publicatorCodeToCompare);
        styleMaker.insertAdjacentHTML("afterbegin", foundedLookList.map((el)=>{
            return createProductCard(el);
        }));
    });
}
// ? Функція для пошуку списку луків/товарів
function founderOfLooksList(array, paramToCompare) {
    for (const el of array){
        if (el.stylemenCode === paramToCompare) return el.productList;
    }
    return;
}
// ? Функція для створення картки товару
function createProductCard(cardInfoObject) {
    let { id ="---------" , name ="---------" , articul ="---------" , price ="------.--" , currency ="---" , cashbackLvl ="--" , publicatorType ="---" , publicatorName ="---" , publicatorCode ="----" , brandName ="-----" , brandCode ="----" , section ="---" , mainCategory ="---" , category ="---" , availbility ="---" , stock ="-----" , manufacturingTime ="---" , imagesList , socialLinksList ={} , imagesList: { imageUrl_main ="./" , ...othersImg } , lookItemsList , ...otherInfo } = cardInfoObject;
    // *
    let lookItemsListComp = createLookItemsListComp(lookItemsList);
    let ImagesListComp = createSmallImgListComp(imagesList);
    let lookDetailsTableComp = createDetailsTableComp(cardInfoObject);
    let cardSocialsComp = createCardSocialsComp(socialLinksList);
    return `
<div class="product-card --1" data-internalId="${id}">
  <div class="product-card__top">
    <div>
      <p class="product-card__name">${name}</p>
      <p class="product-card__sku">art${articul}</p>
    </div>
  </div>

  <div class="card --main">

    <!-- //* main image -->
    <div class="card-img__container" width="480" height="640">
      
      <img
        class="card__img"
        src="${imageUrl_main}"
        width="480"
        alt=""
      />
    </div>

    <!-- //? img overlay --> 
    <!-- //* деталі карти --> 
    <div class="card --main--overlay">
      <button class="button --pull-img-overlay" type="button">Деталі
      <svg class="svg">
        <use href="./sprite_market.a76161c9.svg#icon-list"></use>
      </svg>
      </button>
      <div class="product-card__img --overlay --left">
        ${lookDetailsTableComp}
      </div>

      <!-- //* фотографії  --> 
      <button class="button --pull-img-overlay" type="button">Фото
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-images"></use>
        </svg>
      </button>
      <div class="product-card__img --overlay --top">
        <ul class="card__imgslist">
          ${ImagesListComp}
        </ul>
      </div>

      <!-- //* розмірна сітка -->
      <button class="button --pull-img-overlay" type="button">Розміри
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-table"></use>
        </svg>
      </button>
      <div class="product-card__img --overlay --right">
        Розміри
      </div>
      
      <!-- //* look -->
      <div class="product-card__img --overlay --center">
        <ul class="look__list  js-look-list">
        ${lookItemsListComp}
        </ul>
      </div>

    </div>
  </div>

  <div class="product-card__bottom">

    <div class="product-card__wrapper">
      <div>
        <p class="product-card__price">${price}${currency}</p>
        <p class="product-card__cashback">v${cashbackLvl} * * *</p>
      </div>

      <!-- //* кнопки "Купити" і "Кошик" -->
      <div class="card__buttons-box">
        <button class="button --to-cart" type="button" data-cardId="${id}">
          <svg class="btn-svg">
            <use href="./sprite_market.a76161c9.svg#icon-shopping-cart"></use>
          </svg>
        </button>
        <button class="button --buy-now" type="button" data-cardId="${id}">
          Купити
        </button>
      </div>
    </div>

    <!-- //* Соціальні посилання та дії -->
    <ul class="card__social-list">
      ${cardSocialsComp}
    </ul>

  </div>
</div>
`;
}
// ? функція для створення списку маркерів.
function createLookItemsListComp(lookItemsList) {
    return lookItemsList.map((el)=>{
        return createLookItemComp(el);
    }).join("");
}
// ? Функція для створення  одного маркера із обєкта який містить інфу про нього
function createLookItemComp(marker) {
    let { itemId ="1" , itemLink ="./" , itemName ="name" , itemPrice ="0" , itemCurrency ="UAH" , itemPosTop ="25%" , itemPosLeft ="50%" , ...others } = marker;
    return `
<li class="look__marker" style="top:${itemPosTop}; left:${itemPosLeft}">
  <div class="look__link-box">
    <a class="look__link" href="${itemLink}"
      >${itemName}
      <span class="look__item-price">${itemPrice}${itemCurrency}</span>
    </a>
  </div>
</li>
`;
}
// ? Функція для створення вкладки "ФОТО". список додадкових зображень (список на 6 зображень)
// ! підлягає рефакторингу і вдосконаленню для розміщення зображень для різних типів екранів. По аналогії до створення списку маркерів луків
function createSmallImgListComp(imagesList) {
    let { imageUrl_1 ="./" , imageUrl_2 ="./" , imageUrl_3 ="./" , imageUrl_4 ="./" , imageUrl_5 ="./" , imageUrl_6 ="./" , ...othersImg } = imagesList;
    return `
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_1}"
      alt=""
    />
</li>
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_2}"
      alt=""
    />
</li>
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_3}"
      alt=""
    />
</li>
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_4}"
      alt=""
    />
</li>
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_5}"
      alt=""
    />
</li>
<li class="card__imgsList-Item">
  <img
      class="card__img-small"
      src="${imageUrl_6}"
      alt=""
    />
</li>
`;
}
// ? Функція для створення вкладки "ДЕТАЛІ"
function createDetailsTableComp(object) {
    let { id ="99999999" , name ="---------" , articul ="00000000" , price ="00000.00" , currency ="UAH" , cashbackLvl ="00" , publicatorType ="Стиліст" , publicatorName ="---" , publicatorCode ="0000" , publicatorLink ="./" , style ="---" , desription =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora animi sit voluptatem libero molestiae adipisci, explicabo est nostrum et vitae magni nobis voluptatibus iure eum ab repellat, praesentium cupiditate.` , lookItemsList , ...otherInfo } = object;
    return `
<table class="table --card-details">
  <tbody class="tbody">
    <tr class="row --1">
      <td class="col --1">Назва</td>
      <td class="col --2">${name}</td>
    </tr>
    <tr class="row --2">
      <td class="col --1">Артикул</td>
      <td class="col --2">art${articul}</td>
    </tr>
    <tr class="row --3">
      <td class="col --1">${publicatorType}</td>
      <td class="col --2"><a href="${publicatorLink}">${publicatorName}</a></td>
    </tr>
    <tr class="row --4">
      <td class="col --1">Код стиліста</td>
      <td class="col --2">${publicatorCode}</td>
    </tr>
    <tr class="row --5">
      <td class="col --1">Стиль</td>
      <td class="col --2">${style}</td>
    </tr>
    <tr class="row --6">
      <td class="col --1">Ціна</td>
      <td class="col --2">${price}</td>
    </tr>
    <tr class="row --7">
      <td class="col --1">Валюта</td>
      <td class="col --2">${currency}</td>
    </tr>
    <tr class="row --8">
      <td class="col --1">Рівень кешбеку</td>
      <td class="col --2">${cashbackLvl}</td>
    </tr>
    <tr class="row --9">
      <td class="col --1">Опис</td>
      <td class="col --2">${desription}</td>
    </tr>
  </tbody>
</table>
`;
}
function createCardSocialsComp(socialsLinkList) {
    let { instagramLink ="" , pinterestLink ="" , youTubeLink ="" , tikTokLink ="" , ...otherLinks } = socialsLinkList;
    return `
    <li class="card__social-item">
      <a class="card__social-link" href="${instagramLink}">
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-instagram-1"></use>
        </svg>
      </a>
    </li>
    <li class="card__social-item">
      <a class="card__social-link" href="${pinterestLink}">
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-pinterest2"></use>
        </svg>
      </a>
    </li>
    <li class="card__social-item">
      <a class="card__social-link" href="${tikTokLink}">
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-tiktok"></use>
        </svg>
      </a>
    </li>
    <li class="card__social-item">
      <a class="card__social-link" href="${youTubeLink}">
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-youtube-play"></use>
        </svg>
      </a>
    </li>
    <li class="card__social-item">
      <a class="card__social-link" href="">
        <svg class="svg">
          <use href="./sprite_market.a76161c9.svg#icon-share"></use>
        </svg>
      </a>
    </li>
      
  
  `;
}

},{}]},["4UaHd","aZCxy"], "aZCxy", "parcelRequired7c6")

//# sourceMappingURL=js-луки.f295a5f7.js.map
