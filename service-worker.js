"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6b2f1370b584a4d36cc8f883f0954327"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.e44d7603.chunk.js","70b1fdcef2f40b266f96ef4ddd5f4837"],["/static/js/1.30aec00c.chunk.js","b9113148985561ffecd95ad2611e04e5"],["/static/js/10.81936641.chunk.js","fa5d99bdc723dc2d9c6e033d807c5b34"],["/static/js/11.669b3d4e.chunk.js","bc4fac8fd446f51c5e64ece85568c901"],["/static/js/12.85d565f9.chunk.js","18d2da837447936ab0eb8e4e5f4cd214"],["/static/js/13.cf21a4b8.chunk.js","d0d7bf3692da88c2d9d3f750ebeb6e39"],["/static/js/14.268e107b.chunk.js","0df96217e219a5c6e52c0baf2e3ae606"],["/static/js/15.985acb1b.chunk.js","15712d279b964d5b13cadf656a1f57a4"],["/static/js/16.a08e888b.chunk.js","539de47cd4e5ef52b6446d3495e171bc"],["/static/js/17.92a0a2f9.chunk.js","579f20cf3c0dc7f92fdf29f80e4a5da9"],["/static/js/18.9d38b4fd.chunk.js","2ff7d8ce3fa3e6939d325661063a32ea"],["/static/js/19.7354fb0c.chunk.js","17a8af28d49c335dea83bb28377344ba"],["/static/js/2.f31e95af.chunk.js","73643c6d8871b58376058436c158d948"],["/static/js/20.f9107f22.chunk.js","94d2fae43cb9bc59278b67a9677478f5"],["/static/js/21.4d39331f.chunk.js","3f92db8ad617747c91e10f09f003f523"],["/static/js/22.28a96e94.chunk.js","16c61ff5167e5802ad9228fe1d713b46"],["/static/js/3.55795adc.chunk.js","d0553eae777ea623ec43feb02dd63c13"],["/static/js/4.72b74e56.chunk.js","7bd2b4c5cf4de8bcb076b2c103a3a7da"],["/static/js/5.6975092b.chunk.js","50c5d39c138a165d27bf6999e6b186e4"],["/static/js/6.66bd0166.chunk.js","30cd23b2c1f528c49c03d4849a672ff9"],["/static/js/7.8cc4dcdf.chunk.js","21536573da983f6d0c73c52e36ca7780"],["/static/js/8.8757bfca.chunk.js","71f969e2b467cd22240a88ebbd26201c"],["/static/js/9.f7a14b44.chunk.js","99bca025c0506c866137596600dcff32"],["/static/js/main.e0fc5bb3.js","9988541a2945188993162214d34a99cf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});