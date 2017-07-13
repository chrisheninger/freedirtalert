"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dfd6633053919b4091ea6ef2484c96df"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.b60dd91d.chunk.js","95053583264ec507e6bd8ea93e9e1b97"],["/static/js/1.2ad0b02a.chunk.js","70dcab8ecbdfcc39905a5a1381b17a8f"],["/static/js/10.1646df4c.chunk.js","ca49194619c2299a20a2167110b3113f"],["/static/js/11.8063ce34.chunk.js","3538425d88fcb7a5aab19a2a57912acd"],["/static/js/12.16b69857.chunk.js","687878725e21555b8f89a8f38a3d604f"],["/static/js/13.1068f6ac.chunk.js","394c4678d75458ab791ba68150b25f29"],["/static/js/14.ad0719eb.chunk.js","722b824a6c47a69eee1a24e778410d39"],["/static/js/15.db416f2c.chunk.js","9ba3cb89cbec76bdd29a7723e7a5bc9e"],["/static/js/16.f1df6f46.chunk.js","547a0c0d39879bb2abae47548ad02dfa"],["/static/js/17.5674c3b7.chunk.js","ebe0eb26de890169776b78427dae2dab"],["/static/js/18.a8dd935f.chunk.js","d3ef688aed82684e19caf52938fe849a"],["/static/js/19.c8beaac2.chunk.js","ca22907b2f66da16d125a355f86209c3"],["/static/js/2.4ffbfd75.chunk.js","3ad6643554d8002903c2201d0f17008a"],["/static/js/20.f0164860.chunk.js","4c382ac49ac6542e993aeec79e4bc268"],["/static/js/21.037f051d.chunk.js","fcec4124ce7421601d0bca7cabd0e1fd"],["/static/js/22.efbd9195.chunk.js","649df42500201ea270067f96bc98c9f6"],["/static/js/3.e58e8294.chunk.js","73b1df8c1930a6c6e3b673da362219cd"],["/static/js/4.328d820e.chunk.js","75a67c1e0fd9f3d74b8dc7722ceba09e"],["/static/js/5.df766754.chunk.js","7230af57a179b2b5d14452cfbbc96baa"],["/static/js/6.89ec75f9.chunk.js","d0dbdc7393a9cb22f7596b6f8e9cc8b5"],["/static/js/7.c3236251.chunk.js","ff6692c3a495f5555877a9722b41807d"],["/static/js/8.d2a572af.chunk.js","d8306094e2de98f22c335ab052892c52"],["/static/js/9.ae3e8452.chunk.js","f5e7556396dbefa82c8cc68972bf2770"],["/static/js/main.7ebe7898.js","9dd567a57aaad2a6754525f859b97152"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});