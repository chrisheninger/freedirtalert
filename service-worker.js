"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c4556f700546a17b826de90604be0203"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e544f910.chunk.js","0e05341eb44d4c1484727b2959704352"],["/static/js/1.ecbd3b37.chunk.js","2d1a954c76e9d53086d2c7858de089c9"],["/static/js/10.7f9f9971.chunk.js","151129aeedc1fc2487ed0f227ab72e8d"],["/static/js/11.d0a86ff1.chunk.js","595fd83b2f1ec70f0de335a5194ccc9d"],["/static/js/12.f171f46a.chunk.js","6c6505d9430a38affa7bdab4ae8bfa00"],["/static/js/13.907d4fc0.chunk.js","ecd1a9098bbb75d6717a57c055292781"],["/static/js/14.d0e11d46.chunk.js","be88af7c279166eb101439286e755dec"],["/static/js/15.fe5a3c8d.chunk.js","626e029fa06c44b04edac128b2bbd739"],["/static/js/16.1e65f3c2.chunk.js","a3d7810a92a777f4b10e16d3e56c1953"],["/static/js/17.99781270.chunk.js","6be097dc91ffdf09d4cd1312ad45a307"],["/static/js/18.3b77f835.chunk.js","0b1bb1ac430f83b7909ab64b0cb4531c"],["/static/js/19.15e63fc3.chunk.js","da7def339330153dd707cd5fd374784c"],["/static/js/2.972dd8a1.chunk.js","3666c1b2ac26b37208c4fcfaf593f55e"],["/static/js/20.440eaeb2.chunk.js","338a9533cf1d7ab8934d74d98b465237"],["/static/js/21.3b038957.chunk.js","7b7fe88a10a9d97253a34ef8fcc680cf"],["/static/js/22.3c088dac.chunk.js","3110e0399ac43beb428517c4dc8c0c9f"],["/static/js/3.ff9a52c0.chunk.js","37405d5c6a0cd3a97dce557a63eca5cd"],["/static/js/4.160e9108.chunk.js","a53d60ce400e666c60b0f8eb7bca9275"],["/static/js/5.4cf23e5d.chunk.js","d7c0cc2756e70f38d6ab0ef4fdce0696"],["/static/js/6.68bbd8ba.chunk.js","1186d662931ccb0766026210293dd99f"],["/static/js/7.025d4fa4.chunk.js","fd77ecd07d53c9efc4a204e85f1e3b01"],["/static/js/8.c57307a7.chunk.js","27e9447fe7a58861016be15410cfe76a"],["/static/js/9.e06a69d5.chunk.js","ea990a0636340f01d39821a0dd268417"],["/static/js/main.f22c658e.js","0d4253ddd6befbef2a9afc4eb88a094e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});