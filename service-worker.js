"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3635a4b9ae18834bb60bc725fb27808c"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.cd103f33.chunk.js","56d5c826ec18c82a1104fc79ca8c1395"],["/static/js/1.da1a33a3.chunk.js","a4a4628a9ce4b8c3b7a43fd08b059fb3"],["/static/js/10.afb89ebf.chunk.js","62e46b22d6db8aff04bc77c158b6f683"],["/static/js/11.b2791dc5.chunk.js","3c61864f3213a25e6185e090e57a61f7"],["/static/js/12.02a3672c.chunk.js","a4219017471f81af4b7808180faa26e6"],["/static/js/13.9b4aa983.chunk.js","366f4235004da506c6cf77aa856ae99c"],["/static/js/14.ecc11be1.chunk.js","7053dd563e37322f2bfeba3b9b7215fa"],["/static/js/15.c45d85b5.chunk.js","7d1e638489b9319535e9954c74e33b32"],["/static/js/16.dd96d21d.chunk.js","77bcb2c145de1b1375167867b5e685d5"],["/static/js/17.c02dd466.chunk.js","ab5acb4a6a06ca25d39c76108ddd9ce4"],["/static/js/18.4dbb8e83.chunk.js","bdc8ebecf12192aa0fd27c0ddc528801"],["/static/js/19.15495486.chunk.js","e26b3e392818dc44b8c38cb6dcb873a9"],["/static/js/2.77c486af.chunk.js","a4c4fc02279b64535c2d91fdbeb8bb52"],["/static/js/20.3b41e68a.chunk.js","c7694d077b5a83628b08e0839238cf90"],["/static/js/21.6ee2e109.chunk.js","e0b427dc3650055cd3568f4e63c97a40"],["/static/js/22.ba9c5336.chunk.js","853656c5642c95a53368dccce8d3fe93"],["/static/js/3.e833099a.chunk.js","12203790f0560fa19e8a5c31bb5ba187"],["/static/js/4.04440b38.chunk.js","ffdf8f91c1ea4cf8f6ad00a5b404d100"],["/static/js/5.c3b8ca1b.chunk.js","31cfef1532bb3b5f6ca9fe6f5d8a38eb"],["/static/js/6.dcbf9b34.chunk.js","50c2ab671780721b1cdd8d1870b7d8f6"],["/static/js/7.14b05d47.chunk.js","6252c086eb1d24d09641dbde35b9303e"],["/static/js/8.934e0ed7.chunk.js","eebc802bf2e2f511c9c4ea263a6b0f2e"],["/static/js/9.d2647700.chunk.js","4f8ac8e91f8392157b86d82cbe01b9d0"],["/static/js/main.e64c2445.js","28ed5b520b5569211f27fabc51914d12"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});