"use strict";var precacheConfig=[["/index.html","819fa63bf88bf33c09e28e9c4e3ea770"],["/static/css/main.a5b4190a.css","0e4c4b6264d3f7a59ac7d2c83aa8ea1c"],["/static/js/main.7211c4db.js","46ebab588e6c12838d444462bfc0af37"],["/static/media/Food.9aec53a0.jpg","9aec53a02be059b10f9c7f114625236a"],["/static/media/Gift.500fbdec.jpg","500fbdec02ac4d15c03ebac74feae47e"],["/static/media/NightRiverView.a653df26.jfif","a653df261987b2a2fe1ab82225414c92"],["/static/media/Time.78189b58.jpg","78189b5842489834cc923ca8385ae39a"],["/static/media/fontawesome-webfont.1dc35d25.ttf","1dc35d25e61d819a9c357074014867ab"],["/static/media/fontawesome-webfont.25a32416.eot","25a32416abee198dd821b0b17a198a8f"],["/static/media/fontawesome-webfont.c8ddf1e5.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/static/media/fontawesome-webfont.d7c63908.svg","d7c639084f684d66a1bc66855d193ed8"],["/static/media/fontawesome-webfont.e6cf7c6e.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/static/media/holdin-up.612253f7.jpg","612253f74a70143ab8f678de6fbf5bbc"],["/static/media/not_found.14122fb7.png","14122fb79910fcea75c7ac67eb356790"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});