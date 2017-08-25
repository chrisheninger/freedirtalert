"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","72e32882afe860e1fd718a343e21cd3c"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.c77773d4.chunk.js","ecf784b0e209ff4bf4645097682e285e"],["/static/js/1.d7314d88.chunk.js","49b3b4dc1f3d05d7c7edd11140ada91d"],["/static/js/10.47099175.chunk.js","0348d3e75d645e31a086bbe632537a08"],["/static/js/11.0554f56c.chunk.js","c503e23284a70785ce3e8ba594613483"],["/static/js/12.e64a2356.chunk.js","d8410ee2590f73a46e2ff034b035e89a"],["/static/js/13.a4606a69.chunk.js","d02813df016e6fc7661fb3514a8f711e"],["/static/js/14.583209ed.chunk.js","cd8957be205e43f0ae397af98b60f52a"],["/static/js/15.b86879ee.chunk.js","3fe06955af2ea67a4b0bbfede3bc00f4"],["/static/js/16.90a16e31.chunk.js","6da51c17aff66de127a3a62d2378b6c7"],["/static/js/17.4414d11c.chunk.js","981b48d4337a52fb0bf228b59856307c"],["/static/js/18.91201bb2.chunk.js","581bd197adbe866d83571964b231e414"],["/static/js/19.72db7a85.chunk.js","1b1446d26486d8bb9648d86ef8febb74"],["/static/js/2.a3f27e56.chunk.js","383dc26b33aeff06b9f469c48d49b7b5"],["/static/js/20.1969115f.chunk.js","f324d0867b1880ea8957905441306c08"],["/static/js/21.521128a8.chunk.js","0a960b46a981cc6d395302c9ff264916"],["/static/js/22.834b48d5.chunk.js","e49a024dc7ef4ba17a755db07693a822"],["/static/js/3.d3a999c1.chunk.js","fd7c4f954d97a65072745efdc50b17c3"],["/static/js/4.964ed9ea.chunk.js","e374a4e044de51afd3dfe06054511b2c"],["/static/js/5.7233e3df.chunk.js","6628f9bfd2256cb8534f2cb956a0e133"],["/static/js/6.a6247d8a.chunk.js","8f9c0b2d0ee8dc5f6e64e3a2af5d9985"],["/static/js/7.91dcef9c.chunk.js","4d12df890bd01431352bcf5ff2bd2eae"],["/static/js/8.b4349546.chunk.js","5e8788b5fbc51a4d2ca9f72243131f5f"],["/static/js/9.d9b7c2d2.chunk.js","6519336503df05ab569d8d64161c6736"],["/static/js/main.c375b1ef.js","3b2df7bf5c428a28729eb55fb88f236d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});