"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","395c768ae99b70f07f6fc02da5adbf55"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.1ff8d60b.chunk.js","ff26f9612073bba409efbef60b2adfb7"],["/static/js/1.9b57490c.chunk.js","3d8ce51e64ef05440a40393e4c84ab21"],["/static/js/10.e605023c.chunk.js","f2ea121e56641431c099bc16c75bf2b5"],["/static/js/11.a2a517da.chunk.js","d03e5fcce8a0611f222e9b8e5f5095a1"],["/static/js/12.eea1734c.chunk.js","39b1102751460b9a291070d5df02a36d"],["/static/js/13.c203e5c6.chunk.js","8b6e938467f005fe6eaa3853953b2a58"],["/static/js/14.9412cb38.chunk.js","11fda77d5c85948d183674a24d0ca5f3"],["/static/js/15.aacc6c53.chunk.js","4b2a2159d91c0aa6b5ebd6b25ae9a810"],["/static/js/16.98ecb8b1.chunk.js","3abb7f7dbab464dd0d6cb42e5188a0a0"],["/static/js/17.dd3238e1.chunk.js","ad52c0a3c71999f3fa8b4cc72feae5db"],["/static/js/18.5778f24c.chunk.js","a105423f6e759abad36c2c52bad86046"],["/static/js/19.d1e92bee.chunk.js","e985044a81c4f739cd0a5613a46e3cee"],["/static/js/2.d804df52.chunk.js","9362a5eb4dc10478d638f9b11eab7994"],["/static/js/20.e09a02a5.chunk.js","2b1841cbb91f5bd5dde4753170d31403"],["/static/js/21.fd429a8d.chunk.js","28c62c175ddd217ba15946b988332636"],["/static/js/22.4e183d4e.chunk.js","8687580a673a33b6e536c07a0a3770bf"],["/static/js/3.68e0ac5e.chunk.js","a90a4fd25b7342de2d2f41670b3c574e"],["/static/js/4.6aa5955c.chunk.js","49e0bcc8550ae8c112a329bc3e66bf72"],["/static/js/5.ef68bb06.chunk.js","fc8c3b9bdc7e29c4db724d208b6973fe"],["/static/js/6.8389584f.chunk.js","c418656e0ca2ea093881162365bb55f5"],["/static/js/7.cc709937.chunk.js","0b73b213e8fb0b1efa87d1a46a6aeee6"],["/static/js/8.69165a13.chunk.js","d76b754a18d5f8c0d8c62458a6407a8a"],["/static/js/9.b30168dd.chunk.js","8edf9c165763b9c6bd0243e7fc1ce3bf"],["/static/js/main.bcd11050.js","42620b8b447aa66a429deee55f17fdc0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});