"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","38b103215b12a39d937e28965b38a2be"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f4c4887f.chunk.js","0358367d786d92e5a23faa34e2385903"],["/static/js/1.30a0c8d5.chunk.js","3d84276284bae80bc2071cd38baa0db5"],["/static/js/10.24faa2b2.chunk.js","18d449300cd2ec844a2dbec4e5da28ad"],["/static/js/11.6bbf8078.chunk.js","0fef62a635ad4ca4a2975de923da0e45"],["/static/js/12.5f29e83b.chunk.js","77ebb0684ff872ad8814d2711e3a8023"],["/static/js/13.ca432391.chunk.js","c0e369274cf88a7d0b40786d6563f55b"],["/static/js/14.510f78e0.chunk.js","b07c0d0586334ec297b1ae7c94f5140f"],["/static/js/15.81bf8312.chunk.js","f158434b6927ce10533c48b7efe7e704"],["/static/js/16.3533fd77.chunk.js","d3b1abf84e5a39a184d99f93882d5745"],["/static/js/17.a1555837.chunk.js","9c7f5b6f81050dbfec19ed59bf68d49c"],["/static/js/18.4c6023f7.chunk.js","fff6a3f129a8e5979bfe7d6995d6a38c"],["/static/js/19.95e017a1.chunk.js","5460bcc8806a5deda7869cf40d36af69"],["/static/js/2.6db68111.chunk.js","56c08f98e33e3d7c6683e35adb04a007"],["/static/js/20.ef36afcf.chunk.js","9ee322d9f13a702f6b9aaf33bf573fad"],["/static/js/21.ef42ecd0.chunk.js","103bad2d77d928f0cb0ce5f4fd599cc2"],["/static/js/22.7b5bb406.chunk.js","20e120ebc66e817375d57e8a6954006a"],["/static/js/3.41ba061d.chunk.js","124f8d883a2a6eadee68365933417033"],["/static/js/4.9ee83ba3.chunk.js","1e7ccbb4697c04478da2c7bf99899737"],["/static/js/5.445b42eb.chunk.js","8a41f4c0461a90828960b948535c4e31"],["/static/js/6.7dee360c.chunk.js","10ffc0203d753d40bf3bd23672b946dc"],["/static/js/7.a4498469.chunk.js","23e083b002e00fc3c000f60ee06e2d2b"],["/static/js/8.259b2500.chunk.js","3a55b81e4d7810ed4b83f01dd4a01dee"],["/static/js/9.fbe0bc0d.chunk.js","ee853a2c1721b104aa9d73888b3023de"],["/static/js/main.f164ec52.js","1b9126946eafebb2e14246fe994eeb07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});