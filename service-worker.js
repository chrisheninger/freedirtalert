"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f49161739d8e3553ab91e5ee5bb6e9ca"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.57dc13e1.chunk.js","6cf6f3a55cbb82f1d57de88e75144a7f"],["/static/js/1.f2c37eb0.chunk.js","db9b0fe23762da171b86e08be00954d2"],["/static/js/10.f800b267.chunk.js","de1f848f6d9840d2a513a2d46bc56135"],["/static/js/11.6542824f.chunk.js","f91f46aa1e539eae1300647136157283"],["/static/js/12.8a58b233.chunk.js","caa8df6181f3ddc9c778526340e7aefd"],["/static/js/13.cc813a1b.chunk.js","4abeb76dc9cc6f4546bd949ce87af8aa"],["/static/js/14.cf46d90d.chunk.js","ef67cd13ebe06393cad4e722daa83fab"],["/static/js/15.f3363b0d.chunk.js","5aa7731d0e9da0c86a1fbb045a214927"],["/static/js/16.a6d5bd76.chunk.js","421c10bbf6111fffcb105a22a0c4632e"],["/static/js/17.7831d729.chunk.js","80068540a982c24d2b59cf76219e9ad5"],["/static/js/18.1325360a.chunk.js","9d405c2a1f0ba09f8e1a513eaeb27853"],["/static/js/19.52653ae7.chunk.js","ca88a8f28b66627c9ee610500b3b9d8a"],["/static/js/2.2c630d9d.chunk.js","b6d821dcba7b08d8a3a5ea641b12d9ca"],["/static/js/20.c22576d3.chunk.js","ab144a2b479ad3610c3eb6fd3a12e88e"],["/static/js/21.c92b704d.chunk.js","7c92b5d953f42786b9f71d03b1b22404"],["/static/js/22.2b61e5d4.chunk.js","c9e883cfc43f02aca82b681bd871cba8"],["/static/js/3.0b5d6f16.chunk.js","2ed4c8773899a05f47ea682b1dbaf852"],["/static/js/4.a63d3d63.chunk.js","8204adc3cee5feccf466381d36d23bc7"],["/static/js/5.c9e9f6d1.chunk.js","727c619e1763e41fccb76d32a4cc7040"],["/static/js/6.e29c8d77.chunk.js","970c87f6b3a13746a720fe9fd335eb3b"],["/static/js/7.138988b4.chunk.js","b9e6df46ecf6b10e5e4cb114a411f337"],["/static/js/8.b2bc651d.chunk.js","1752a8611ce172c0e9a9a29be013ea0c"],["/static/js/9.1600e390.chunk.js","2ea454ceb304e2b9bc3c1da0bd94bf10"],["/static/js/main.469bdfdd.js","6dcf9b2fbab95a233d0b537d0058e2f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});