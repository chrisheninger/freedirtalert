"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d9a5100e8a05e65e94ed23ac2b049e0c"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.8d1569ea.chunk.js","5938f65226a13194b8213fe21ddc15ae"],["/static/js/1.575411fa.chunk.js","2b5dc04bda312c7d304edeb0f0c8ef34"],["/static/js/10.35749266.chunk.js","d0ca8cfcd97aef2435b2cc76f8c745bf"],["/static/js/11.a877936b.chunk.js","b710fcd9a892a099aaf2362d5f89be5f"],["/static/js/12.c2fd9953.chunk.js","0a3c6b1d8a6bcd2340be1470d87c2eb4"],["/static/js/13.113d5bcf.chunk.js","cad45d9984957b04a400de68bf42ba00"],["/static/js/14.efea0a8d.chunk.js","f503fbbd84f69c5eea17c1d7f90d2161"],["/static/js/15.0699699c.chunk.js","7e6e40ed749d18ac8b23622b10384b7e"],["/static/js/16.9b20ed90.chunk.js","2651c10ffe7c69c49513455334ed249c"],["/static/js/17.b6581045.chunk.js","497840de603676ced8915c1a82c95fbc"],["/static/js/18.a9205efa.chunk.js","1b3800fd76a23e97f15a9d258e870a2d"],["/static/js/19.a15e5271.chunk.js","99e05038747b071d70b8285137332e15"],["/static/js/2.c234a2b1.chunk.js","6785076ee20337d2ca9475539e7966bc"],["/static/js/20.830dc63b.chunk.js","2617f3a63d8289a9e84f0a45cbd359f1"],["/static/js/21.55bb44bb.chunk.js","145bf5f0f81bc2d3261b9f7f58a4cfcd"],["/static/js/22.0b6e03d6.chunk.js","fa7fc91dd3d2600e59f7dc0094b30c4c"],["/static/js/3.ec1d7524.chunk.js","fa632228daaa93020cb3715bac52ae27"],["/static/js/4.241d8a70.chunk.js","ed1638768a08c4c040dc1a0a588dd071"],["/static/js/5.81656224.chunk.js","74f762b51b1feaf17952b076634174b7"],["/static/js/6.bf34e77d.chunk.js","df0caa95760841c4504af1741e680155"],["/static/js/7.4e058d67.chunk.js","1d6acc6463f1c6059ab54e0411f34af5"],["/static/js/8.0a9440ec.chunk.js","aa38629d7e056c156da9d5738a39bdd5"],["/static/js/9.a266c909.chunk.js","2cd727af3ac035d70613759854bd9037"],["/static/js/main.c0a543c4.js","61b9d6194d5a168d244ee8bbb128710e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});