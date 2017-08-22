"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fe21bc02347676df1c05587780f4caf4"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.822d6b95.chunk.js","f70f14f89030ef4f36dde95dab3b0f6d"],["/static/js/1.b82e3b42.chunk.js","d66665b789bca2b7047721b744fbb88d"],["/static/js/10.da22aa27.chunk.js","7c88f088cae9cea08af270a556d30c78"],["/static/js/11.c1ab428b.chunk.js","50a9f5acae0cce72edcd329d7cb0510d"],["/static/js/12.991bd7fa.chunk.js","740210db96dddb0701e8864fe22cc921"],["/static/js/13.15c744d1.chunk.js","7a40d78b91ccfd8bc022b0a7b0214495"],["/static/js/14.c777b35b.chunk.js","c99a034ce8ba725d95080f6696043487"],["/static/js/15.c5ac9783.chunk.js","38da2bfb0fdac1fb0bcc0c88f344fb7a"],["/static/js/16.d4d8b18b.chunk.js","2caa0c8b2f8fe17d18344be30b9fc69d"],["/static/js/17.dab59688.chunk.js","ba1658a23cce98e839d03c8bbfef4b3c"],["/static/js/18.29716511.chunk.js","d60af366a201445c5f374859983fbae1"],["/static/js/19.0a8e29a9.chunk.js","d567b24c2df2af39a9ed5ffd2201190f"],["/static/js/2.74988863.chunk.js","7f5d98f967e3b0d3dbcdaeeb3764a4ac"],["/static/js/20.3992a7b3.chunk.js","5fe13bc4cc564176d25727e1a15d9544"],["/static/js/21.d0d4e352.chunk.js","641f2188ee0dae647532cb4063d5c0e9"],["/static/js/22.d19f4592.chunk.js","cf74e8c5947feb4631247a1237c51cc5"],["/static/js/3.e10af499.chunk.js","d4d581a7dc07bef5e93b7202968beaf7"],["/static/js/4.dcc2e2f4.chunk.js","8a30c54780b9f1c027624b028befcc8b"],["/static/js/5.837f6aec.chunk.js","87623e974c3a7ca88e5a0e16d22b3848"],["/static/js/6.a5cd3785.chunk.js","da3d7f10bbb7348d955a94442fa8ae9f"],["/static/js/7.0a88262b.chunk.js","95ae944545e0a8b5708c26cf952d7bee"],["/static/js/8.32ac905e.chunk.js","d649ae1ba1351675232a7f3103aa728c"],["/static/js/9.2bf72fb6.chunk.js","64b590ae239676ce4318f7e24fcf153e"],["/static/js/main.25bfec69.js","41eead19002e7667a8230fcdfd4fa1ca"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});