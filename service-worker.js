"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","1bb9baf164ce43cdc47f635b4a504986"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.bba791d9.chunk.js","6bd68cb9f51e8795c2996398df3715b6"],["/static/js/1.0aaf261a.chunk.js","dddea09500ce663f1744760bab1d46a8"],["/static/js/10.2b46db73.chunk.js","fa467d80e35844b5e6b0f83aa740acb4"],["/static/js/11.3196a946.chunk.js","d2357f85c1f59999858b10a3b1f62ff8"],["/static/js/12.5eb86c3e.chunk.js","f17921dd4d08c57ee0eafef909a66066"],["/static/js/13.e28b81a9.chunk.js","cc7fc675ac6dd09257945c1cb9120c8c"],["/static/js/14.f92eb2a2.chunk.js","028a159d420472a0b7285547ad46bec5"],["/static/js/15.c52c6ea1.chunk.js","1eb1c0d449191c9f7662c2fcf4f832b5"],["/static/js/16.48a3583c.chunk.js","07e10c8d664fb85716ff336ad8fa7f34"],["/static/js/17.fad5cb1b.chunk.js","053b2238fd01a9ffdb46ad4e74abb05d"],["/static/js/18.af7bcd7b.chunk.js","8e3735cb3b69c20ee418ffe75fba1da3"],["/static/js/19.9c661d23.chunk.js","25db0d2af8662c07babe6f8bcd79cfda"],["/static/js/2.70f0608a.chunk.js","7a58da8e2aac4809b6b4ae8fd7427f67"],["/static/js/20.f5b72507.chunk.js","2111959b39c73dc6f9001c022f597646"],["/static/js/21.7cdf069f.chunk.js","e79f9a1dcdd47c66f9687c6bfdc0591e"],["/static/js/22.79229c7f.chunk.js","309c54bd5594dd2e6fbee27b5506c6a0"],["/static/js/3.8d1678e3.chunk.js","e7ae6d169d5b8373955f3d5215dbe1fc"],["/static/js/4.892c2194.chunk.js","3174fd0633f4d8f7e724b97d65de61f6"],["/static/js/5.b3ee7c9b.chunk.js","57860b562aacf314378baab42064ca4a"],["/static/js/6.2c321347.chunk.js","da93bbbbc3676fd09541fc2ecaba730a"],["/static/js/7.c4ea695c.chunk.js","57904950b144bcde9340f40c13c9e505"],["/static/js/8.c9510df6.chunk.js","c5eb015d18054a822a66677a1c122e59"],["/static/js/9.2bcd1cd9.chunk.js","e62443b4a48ff6331b090e078003881a"],["/static/js/main.bdfa6c56.js","709f8e0087043efc0d036e084892a043"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});