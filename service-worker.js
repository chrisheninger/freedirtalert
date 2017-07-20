"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7681ecf3380a2511f163df6820723d5f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.ad44a3e1.chunk.js","34de102f4178ad7c0825254780245863"],["/static/js/1.3c17d995.chunk.js","ba7949eb49f2ea020d63ca003ae87b8c"],["/static/js/10.eb9cb09c.chunk.js","c5e3ac1932862d6677a173d73d7ffb81"],["/static/js/11.113d05f0.chunk.js","d69ffcbb02070e44a58924e9aedb2be8"],["/static/js/12.1db3aaf0.chunk.js","bab29e61d9f4ec14d69a7515047e5943"],["/static/js/13.aad8a35d.chunk.js","bfc7c9f936a7a7d1cd14496fdc402733"],["/static/js/14.8886f35d.chunk.js","359268c7ae1a3af254a57eb3e58db3af"],["/static/js/15.6c700979.chunk.js","ea0a30d3501f98fecde0030d36167f2a"],["/static/js/16.803d3072.chunk.js","a2a8fad95bfc65137e85e3293e88aeda"],["/static/js/17.84747972.chunk.js","42ce3b7ae916873776801c32a5db9df9"],["/static/js/18.62032794.chunk.js","8e8bc15bc6e3a85e11be3e7d289d5190"],["/static/js/19.2bca253c.chunk.js","a5801f53ec24b5b6eec81b23a0c9fb32"],["/static/js/2.445e809f.chunk.js","d8053b62b62f38008251a8b57b41c192"],["/static/js/20.9739d0d6.chunk.js","ca367ca466918a05a3d82e6a92e86139"],["/static/js/21.636bba90.chunk.js","6ce66c430fa8b46ea465ef70e98ade25"],["/static/js/22.ee13b6a8.chunk.js","57a6bf6e8e4bb3fe75bc95b75707506e"],["/static/js/3.bf8a64e3.chunk.js","bb9e7ec3fb1fb817ffe1bd0c7197e34b"],["/static/js/4.bb0dbc98.chunk.js","7153f8a2ba0d0a9ec56f863e7ef0b340"],["/static/js/5.cdcd2399.chunk.js","44df7eec38e98af95b0c5ba8eaf5862d"],["/static/js/6.e30e310c.chunk.js","615a8dc1c908daebc3186ae363c5f782"],["/static/js/7.c7fa0f11.chunk.js","8c6135341b9b5d9d95aea3bb4eb8d757"],["/static/js/8.ada567cc.chunk.js","01ed7f050be0bd6e4038778838f23906"],["/static/js/9.85870bf4.chunk.js","5921dfc06d35042e61fc953e6de53581"],["/static/js/main.55a4a245.js","d29da927e39af6fb1a3802ec74cbf565"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});