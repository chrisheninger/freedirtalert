"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6018ae529ec00d164c90bce6e98ab078"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.c56bcf41.chunk.js","dab65ff791745b5e5bb7a169c4a7ad78"],["/static/js/1.6fa3314e.chunk.js","1b1b9a5b307f81ec4d118d1392cd1af7"],["/static/js/10.9f1837dd.chunk.js","37252a81f1c3a1a218d55342443c326f"],["/static/js/11.3c9af8ae.chunk.js","7785e44ddabedd8031a4a688360bd1a8"],["/static/js/12.dbe475b2.chunk.js","164d165d91e421db22d6f9978468cc51"],["/static/js/13.518d6aa2.chunk.js","e2447c52cd1e271c98e6a17e860760d8"],["/static/js/14.f4df1ea1.chunk.js","aada690e41d5a2f00c5825b2c4f49b39"],["/static/js/15.5ce73731.chunk.js","c1fa687445d33be6f6357330c1cca6ce"],["/static/js/16.b6378504.chunk.js","50287af202205ee76cf1228e4710530f"],["/static/js/17.61cf4362.chunk.js","be42b7cb6233bd58298d178b04d0110c"],["/static/js/18.ae06d328.chunk.js","1a0f399ce12638039dc6c7a575eceeba"],["/static/js/19.8e0ca9f2.chunk.js","531c868431eb4614212e819c78e5ad1a"],["/static/js/2.b44b0670.chunk.js","beacaa05b889ff64ec839adda26ad8cd"],["/static/js/20.d35f5123.chunk.js","acb6147309ea999cf5256230692b605a"],["/static/js/21.1c0a84b1.chunk.js","8569cc3a8fdbe7491c086916940531ff"],["/static/js/22.57251bd7.chunk.js","e95614fd15a05bdbaa14fbd84ad2e19c"],["/static/js/3.e2dd643e.chunk.js","e654b57dcf0e19dcbbd7f8ffc4437a18"],["/static/js/4.6035e05e.chunk.js","a86e810d07e2235ef34c9a18d1a27fa1"],["/static/js/5.b8d994c9.chunk.js","3fefe659f3749b14614891c40405519e"],["/static/js/6.c9b04789.chunk.js","3428c04692ea905346c0e528bd3d412d"],["/static/js/7.0d16d993.chunk.js","083cd7a048286ba35b38c98f072ef8f7"],["/static/js/8.702d38c6.chunk.js","e3cf0f9a67bc5104556bfb04b44038f8"],["/static/js/9.eea251a8.chunk.js","7f60fd82481f47ec03b04c0f2cabcb2a"],["/static/js/main.3c7ccd5d.js","62086280a7cd83965577052a1aa4e0ea"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});