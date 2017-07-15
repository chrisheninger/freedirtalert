"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6fc71c013f327803897102cb991a11f4"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.40694500.chunk.js","3e2b21e7890cf56f1052e26157a8defc"],["/static/js/1.55341068.chunk.js","a3868b1ee7d05d657c94b59ccc0b2d57"],["/static/js/10.4946b30e.chunk.js","f9108cbb4b6f1dda03b67c72adfc675c"],["/static/js/11.60b65402.chunk.js","7ad7071ed1f3b4bb9c1068ad37fdb124"],["/static/js/12.a4d3bad9.chunk.js","385bc91812f42be5d6ce2fc71421c84c"],["/static/js/13.c8bca940.chunk.js","0f78d477ed7edeb7e867c00bb2bb8028"],["/static/js/14.c718d5ec.chunk.js","cdeb4e202d86aa06ad25e4b47abc43ee"],["/static/js/15.125e4259.chunk.js","bad079b4590db98b99589c7bf1394486"],["/static/js/16.b5f248e5.chunk.js","b2d94dafe057308066ff1cfa5e112dfb"],["/static/js/17.6254f337.chunk.js","3891bee88440fa83f19225f63dc87bb9"],["/static/js/18.5227d1d1.chunk.js","62b564b6fb19a4bc2576730cb4a9d629"],["/static/js/19.90a6a6aa.chunk.js","0a18a6377bcc4b7f2fe1c025bbe0c0fc"],["/static/js/2.c698bdb1.chunk.js","ee4a59491ef0ae817549f640a36eff59"],["/static/js/20.398023af.chunk.js","b0fb3bbc38024d9c8303d6921826cf4c"],["/static/js/21.1dca1f68.chunk.js","3f6da148f3b9b81a9b9ffe7421dad435"],["/static/js/22.6429219c.chunk.js","372b05f61cc69e3df434018ca5b081be"],["/static/js/3.f9156b5e.chunk.js","f86bd9a850ad8b0f1ea18a2b82e5ee5f"],["/static/js/4.5f9b17dd.chunk.js","3be98613b86a155f20a3fd660972e105"],["/static/js/5.df4c94b0.chunk.js","3c1aacae66b2814efb3cdea8663c417e"],["/static/js/6.47a48396.chunk.js","a1e64b582868d3b25b8c359c72d22d1d"],["/static/js/7.eac6c847.chunk.js","ad335db49c450502d5c6a15c9b75f74e"],["/static/js/8.ccfb388e.chunk.js","0d7574d3895d076a31241b1d97915461"],["/static/js/9.367af124.chunk.js","ddd099594f897a7428fe446878bd8955"],["/static/js/main.ccdfee2e.js","3dd30a24bedee9bb6d7d1fb3f4348ee6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});