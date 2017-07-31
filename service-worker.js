"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","857b309ce37dbe3177f5a026447959f3"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.1b829fc6.chunk.js","8ca9bfd075fa110575e5d08091875199"],["/static/js/1.7b187a37.chunk.js","a9cf8be9d611ac7a9d659554e63fa793"],["/static/js/10.4bd6050a.chunk.js","35a1dfb89c14589feea3c39ed43b5efb"],["/static/js/11.0a0f62d8.chunk.js","7a8002326c82fc853ec97dcdf5a0eb5f"],["/static/js/12.8e07e68d.chunk.js","0671e1faa7d1a9363516887589b886eb"],["/static/js/13.a680ad02.chunk.js","989716249fc4a34e011a43b561c850d3"],["/static/js/14.3ea39792.chunk.js","ece5b55b82455a4ba957247a2472c1ef"],["/static/js/15.3b948b82.chunk.js","4b1d5cb3f2c7b04c16750438bfb700bc"],["/static/js/16.d444d119.chunk.js","33bf4a29eb926f1a9bbc2a1c5581df7b"],["/static/js/17.036205bf.chunk.js","035e6feb2a86b9e791d31c833f226b60"],["/static/js/18.b7a39b6a.chunk.js","e739aaedf2c89096663be55e1bff74f3"],["/static/js/19.0cb60b20.chunk.js","32c15c870ce3bc2a3ff57878d1a3c39e"],["/static/js/2.43bf7e24.chunk.js","9fd765056d1e0e782cb2598b7ce135b9"],["/static/js/20.59c27055.chunk.js","3231edcfa9fe065c280612d3d5b6c704"],["/static/js/21.2674dfbb.chunk.js","c0ae8de3209da98f65a3b82a65dd88c9"],["/static/js/22.177d01a2.chunk.js","36ee5238456bcdebee26b84be6498555"],["/static/js/3.6bf6e89e.chunk.js","fbbd84c90653de65f64725a727c8aae5"],["/static/js/4.096242cc.chunk.js","0a9daa46645f28dd0c1005d575e07e6f"],["/static/js/5.a3324882.chunk.js","15d5472b777bbdd4ad5b73b0870005a2"],["/static/js/6.78d2cb0b.chunk.js","ea61d6b8415db5b6de3df9864d7e281c"],["/static/js/7.8c496c34.chunk.js","a680c16a566df50263c53907f01351de"],["/static/js/8.cff1db50.chunk.js","dfbeb37c8f0af633450edbc884ce7262"],["/static/js/9.22bee957.chunk.js","75a6c6f5377db93fb3451d5c724641e7"],["/static/js/main.5a62d265.js","6cbafb20e1ea0f4c0b499a0c498e7a99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});