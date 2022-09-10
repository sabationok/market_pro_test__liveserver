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
})({"egK90":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d78332b2e2d9b24d";
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

},{}],"bfR5u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _autorsList = require("./js-data/autorsList");
var _postsList = require("./js-data/postsList");
var _spriteMarketSvg = require("./images/sprite_market.svg");
var _spriteMarketSvgDefault = parcelHelpers.interopDefault(_spriteMarketSvg);
// console.log('Список авторів', autorsListData);
// console.log(postsListData);
// todo Обєкт яккий потрібно вставити у функцію для створення сторінки
let Obj = {
    sectionClass: ".js-postList",
    autorsArr: (0, _autorsList.autorsListData),
    postCardsDataArr: (0, _postsList.postsListData)
};
// ? Запуск фунції
createautorsZone(Obj);
// * ===== створюємо сторінку публікацій
function createautorsZone(pageObject) {
    let { sectionClass ="" , autorsArr =[] , postCardsDataArr =[] , ...others } = pageObject;
    // * Куди саме вставляти
    let pageContainerEl = document.querySelector(sectionClass);
    // * Готова для вставки початкова сторінка, далі тільки доповнювати
    let allInText = autorsArr.map((el)=>createAutorEl(el, postCardsDataArr)).join("");
    // * ===== Вставляю все що створене на сторінку
    pageContainerEl.insertAdjacentHTML("afterbegin", allInText);
}
// * ===== створюю одного публікатора
function createAutorEl(autorDataObject, postCardsDataArr) {
    let { autorId ="autorId" , autorName ="autorName" , autorlogoLink ="LOGO" , autorType ="autorType" , autorPostCardsIdList =[] , ...others } = autorDataObject;
    // * Змінна у якій зберігаються пости автора відфільтровані із загальної бази
    const filteredPostCardsDataArr = [];
    // * Фільтруємо загальний масив на основі списку постів автора
    filterArrByArr(autorPostCardsIdList, postCardsDataArr);
    function filterArrByArr(postsArray, arrayForFinding) {
        // * Проміжний результат зберігається тут
        let foundedPost = {};
        for(let i = 0; i < postsArray.length; i += 1){
            foundedPost = arrayForFinding.find((post)=>post.postId === postsArray[i]);
            // todo Перевірка
            if (foundedPost !== undefined) filteredPostCardsDataArr.push(foundedPost);
        }
    }
    // todo ===== Тут зберігається шаблон усього списку постів готовий для вставки
    let cardListArrayInText = filteredPostCardsDataArr.map((el)=>createPostCardComp(el));
    return `
  <div class="section__autorTop">
    <div class="slick__container">
      <div class="autorZone__header">
        <a class="autorZone__logoBox" href=""> 
          <img class="autorZone__logoImg" src="${autorlogoLink}" alt="${autorName} logo" >
        </a>
        <div class="autorZone__autorInfo">
          <span  class="autorZone__autorName">
            ${autorName}
          </span>
          <ul class="autorZone__autorInfo-list">
            <li>Повна назва: ${autorName}</li>
            <li>Тип: ${autorType}</li>
            <li>ID: ${autorId}</li>
          </ul>
        </div>
        
        <button class="button --open-autorCardList" data-show-all-cards="${autorId}">
          <svg class="btn-svg">
            <use href="${0, _spriteMarketSvgDefault.default}#icon-menu-3"></use>
          </svg>
        </button>
      </div>
      <div class="slick__brands-slider" data-autor-id="${autorId}" data-autor-type="${autorType}">
        ${cardListArrayInText}
      </div>
    </div>
  </div>
  `;
}
// ? Функція для створення картки
function createPostCardComp(cardInfoObject) {
    let { postId ="000-000000" , postType ="posttype" , postName ="postName" , postAutorId ="postAutorId" , articul ="000000" , price =0 , cashbackLvl ="00" , currency ="UAH" , mainImgLink ="./" , socialsLinkList =[] , ...others } = cardInfoObject;
    // let lookItemsListComp = createLookItemsListComp(lookItemsList);
    // let ImagesListComp = createSmallImgListComp(imagesList);
    // let lookDetailsTableComp = createDetailsTableComp(cardInfoObject);
    // let cardSocialsComp = createCardSocialsComp(socialsLinkList);
    return `
  <div class="card --3 js-post-card" data-post-id="${postId}">
    <div class="card --main">
      <!-- //* main image -->
      <div class="card-img__container" style="width: 100%; min-height: 320px">
        <img
          class="card__img"
          src="${mainImgLink}"
          width="480"
          alt=""
        />
      </div>

      <!-- //? img overlay -->
      <div class="card --main--overlay">
        <!-- //* деталі карти -->
        <button class="button --pull-img-overlay" type="button" data-show-details="${postId}">Деталі
          <svg class="btn-svg">
            <use href="${0, _spriteMarketSvgDefault.default}#icon-list"></use>
          </svg>
        </button>
        <div class="card__img --overlay --left">
          ${"lookDetailsTableComp"}
          
          <ul class="card__social-list">
            ${"cardSocialsComp"}
          </ul>
        </div>

        <!-- //* фотографії  -->
        <button class="button --pull-img-overlay" type="button"  data-show-fotos="${postId}">Фото
          <svg class="btn-svg">
            <use href="${0, _spriteMarketSvgDefault.default}#icon-images"></use>
          </svg>
        </button>
        <div class="card__img --overlay --top">
          <ul class="card__imgslist">
            ${"ImagesListComp"}
          </ul>
        </div>

        <!-- //* розмірна сітка -->
        <button class="button --pull-img-overlay" type="button" data-show-sizes="${postId}">Розміри
          <svg class="btn-svg">
            <use href="${0, _spriteMarketSvgDefault.default}#icon-table"></use>
          </svg>
        </button>
        <div class="card__img --overlay --right">
          Розміри
        </div>

        <!-- //* look -->
        <div class="card__img --overlay --center" data-markers-list="${postId}">
          <ul class="look__list  js-look-list" data-markers-list="${postId}">
          <!-- //*  -->
          </ul>
        </div>
        
      </div>
    </div>

    <div class="card__info">

      <div class="card__info-top">
        <div class="card__info-name-box">
          <p class="card__info-name">${postName}</p>
          <p class="card__info-sku">art${articul}</p>
        </div>

        <div class="card__actions-box">
          <button class="button --card-action" data-action-like="${postId}">
            <svg class="btn-svg">
              <use href="${0, _spriteMarketSvgDefault.default}#icon-heart-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action-save="${postId}">
            <svg class="btn-svg">
              <use href="${0, _spriteMarketSvgDefault.default}#icon-bookmark-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action-share="${postId}">
            <svg class="btn-svg">
              <use href="${0, _spriteMarketSvgDefault.default}#icon-share"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="card__timeToBuy">
        <!-- //* ціна і рівень кешбеку -->
        <div class="card__price-box">
          <p>
            <span class="card__price">${price}</span>
            <span class="card__currency">${currency}</span>
            <span class="card__cashback">v${cashbackLvl}</span>
          </p>
        </div>

        <!-- //* кнопки "Купити" і "Кошик" -->
        <div class="card__forBuyBtns-box">
          <button class="button --addToCart js-clickToBuy" type="button" data-buy-later="${postId}">
            <svg class="btn-svg">
              <use href="${0, _spriteMarketSvgDefault.default}#icon-shopping-cart"></use>
            </svg>
          </button>
          <button class="button --buyNow js-clickToBuy" type="button" data-buy-now="${postId}">
            Купити
          </button>
        </div>
      </div>

    </div>
  </div>
  `;
}
// ? Функція для створення соціальних лінків
function createCardSocialsComp(socialsLinkList) {
    let { instagramLink ="" , pinterestLink ="" , youTubeLink ="" , tikTokLink ="" , ...otherLinks } = socialsLinkList;
    return `
  <li class="card__social-item">
    <a class="card__social-link" href="${instagramLink}">
      <svg class="link-svg">
        <use href="${0, _spriteMarketSvgDefault.default}#icon-instagram-1"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${pinterestLink}">
      <svg class="link-svg">
        <use href="${0, _spriteMarketSvgDefault.default}#icon-pinterest2"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${tikTokLink}">
      <svg class="link-svg">
        <use href="${0, _spriteMarketSvgDefault.default}#icon-tiktok"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${youTubeLink}">
      <svg class="link-svg">
        <use href="${0, _spriteMarketSvgDefault.default}#icon-youtube-play"></use>
      </svg>
    </a>
  </li>
  `;
}

},{"./js-data/autorsList":"aMVTQ","./js-data/postsList":"1eGfh","./images/sprite_market.svg":"ajscF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMVTQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "autorsListData", ()=>autorsListData);
var _logoSocialPng = require("../images/logo-social.png");
var _logoSocialPngDefault = parcelHelpers.interopDefault(_logoSocialPng);
let autorsListData = [
    {
        autorId: 101,
        autorName: "Галя Черепиця Fasion",
        autorlogoLink: (0, _logoSocialPngDefault.default),
        autorType: "lookMaker",
        autorPostCardsIdList: [
            "101-2222",
            "101-5555",
            "101-8888"
        ],
        autorEMPTY: ""
    },
    {
        autorId: 102,
        autorName: "Іван Cолярка Style",
        autorlogoLink: (0, _logoSocialPngDefault.default),
        autorType: "brand",
        autorPostCardsIdList: [
            "102-2222",
            "102-5555",
            "102-8888"
        ],
        autorEMPTY: ""
    },
    {
        autorId: 103,
        autorName: 'by "Леся Козопицька"',
        autorlogoLink: (0, _logoSocialPngDefault.default),
        autorType: "brand",
        autorPostCardsIdList: [
            "103-2222",
            "103-5555",
            "103-8888"
        ],
        autorEMPTY: ""
    }
];

},{"../images/logo-social.png":"9XZit","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XZit":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ivapy") + "logo-social.e0d1e453.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1eGfh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "postsListData", ()=>postsListData);
var _spriteMarketSvg = require("../images/sprite_market.svg");
var _spriteMarketSvgDefault = parcelHelpers.interopDefault(_spriteMarketSvg);
let postsListData = [
    {
        postId: "101-2222",
        postType: "look",
        postAutorId: "101",
        postName: "Сукня, шовкова, синя",
        articul: "00001",
        section: "",
        category: "",
        subCategory: "",
        price: 2256,
        carrency: "UAH",
        cashbackLvl: "02",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "101-5555",
        postType: "look",
        postAutorId: "101",
        postName: "Сукня, шовкова, рожева",
        articul: "000002",
        section: "",
        category: "",
        subCategory: "",
        price: 2552,
        carrency: "UAH",
        cashbackLvl: "01",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "101-8888",
        posttype: "look",
        postAutorId: "101",
        postName: "Сукня, шовкова, зелена",
        articul: "00003",
        section: "",
        category: "",
        subCategory: "",
        price: 1556,
        carrency: "UAH",
        cashbackLvl: "02",
        mainAtribute_1: {
            atributeName: "Колір",
            atributeValue: "Зелений"
        },
        mainAtribute_2: {
            atributeName: "Розмір",
            atributeValue: "xl"
        },
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            }, 
        ],
        post: 1
    },
    {
        postId: "102-2222",
        posttype: "look",
        postAutorId: "102",
        postName: "Добротна така сукенька",
        articul: "454545",
        section: "",
        category: "",
        subCategory: "",
        price: 568,
        carrency: "UAH",
        cashbackLvl: "03",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/brand_cards/suknia_3/br-3_f-1.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "102-5555",
        posttype: "look",
        postAutorId: "102",
        postName: "Арабський мангуст",
        articul: "453265",
        section: "",
        category: "",
        subCategory: "",
        price: 542,
        carrency: "UAH",
        cashbackLvl: "01",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/brand_cards/suknia_3/br-3_f-5.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "102-8888",
        posttype: "look",
        postAutorId: "102",
        postName: "Плаття на забаву",
        articul: "121212",
        section: "",
        category: "",
        subCategory: "",
        price: 865,
        carrency: "UAH",
        cashbackLvl: "01",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/brand_cards/suknia_3/br-3_f-9.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "103-2222",
        posttype: "look",
        postAutorId: "103",
        postName: "Гаманець",
        articul: "282828",
        section: "",
        category: "",
        subCategory: "",
        price: 456,
        carrency: "UAH",
        cashbackLvl: "02",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/gamanets/AW22-PFD08E_99X_F1.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-5555",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "102-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "103-5555",
        posttype: "look",
        postAutorId: "103",
        postName: "Ще один гаманець",
        articul: "949494",
        section: "",
        category: "",
        subCategory: "",
        price: 325,
        carrency: "UAH",
        cashbackLvl: "01",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/gamanets/AW22-AKD0FM_80X_F1.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "104-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "103-8888",
        posttype: "look",
        postAutorId: "103",
        postName: "Знову гаманець",
        articul: "353535",
        section: "",
        category: "",
        subCategory: "",
        price: 259,
        carrency: "UAH",
        cashbackLvl: "03",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "https://raw.githubusercontent.com/goodcat46/images/main/gamanets/AW22-PFD08E_88X_F1.webp",
        imagesList: [],
        postItemList: [
            {
                itemId: "102-2222",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "103-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "104-2222",
        posttype: "look",
        postAutorId: "104",
        postName: "",
        articul: "494949",
        section: "",
        category: "",
        subCategory: "",
        price: 478,
        carrency: "UAH",
        cashbackLvl: "02",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "",
        imagesList: [],
        postItemList: [
            {
                itemId: "102-2222",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "103-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "104-5555",
        posttype: "look",
        postAutorId: "104",
        postName: "Сорочка",
        articul: "646869",
        section: "",
        category: "",
        subCategory: "",
        price: 352,
        carrency: "UAH",
        cashbackLvl: "03",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "102-5555",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    },
    {
        postId: "104-8888",
        posttype: "look",
        postAutorId: "104",
        postName: "Сорочка",
        articul: "159564",
        section: "",
        category: "",
        subCategory: "",
        price: 356,
        carrency: "UAH",
        cashbackLvl: "03",
        mainAtribute_1: "",
        mainAtribute_2: "",
        style: "",
        content: "",
        availability: "",
        stock: "",
        manufacturingTime: "",
        mainImgLink: "",
        imagesList: [],
        postItemList: [
            {
                itemId: "101-8888",
                itemPosTop: "50%",
                itemPostLeft: "28%"
            },
            {
                itemId: "102-8888",
                itemPosTop: "60%",
                itemPostLeft: "20%"
            }, 
        ],
        post: 1
    }, 
];

},{"../images/sprite_market.svg":"ajscF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajscF":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ivapy") + "sprite_market.a76161c9.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["egK90","bfR5u"], "bfR5u", "parcelRequired7c6")

//# sourceMappingURL=index.e2d9b24d.js.map
