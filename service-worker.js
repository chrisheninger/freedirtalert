"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fc8a992ff5e75ae2926004c8ed22b06d"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.8192bd87.chunk.js","3ea720a577034e0702544e0a2c7caf12"],["/static/js/1.4f0d84b9.chunk.js","3de2390a611d98df1e829a47608ca4f2"],["/static/js/10.b24f9ca2.chunk.js","9bc0bb96c81332b1fa2b4dc1e1c3f64a"],["/static/js/11.3a74a7df.chunk.js","b36890fe9f9a69844115d92c298de658"],["/static/js/12.39869261.chunk.js","1c855c4ced0d289dac10ffb37bfa6138"],["/static/js/13.8378f3bb.chunk.js","b03d438996b4b8d57bf21a241992d5fe"],["/static/js/14.373b83b1.chunk.js","be63a04a090793e991fb8940bc5695d4"],["/static/js/15.dc1b9bdb.chunk.js","c660a6106bb6de7c1a12a3c53afb4932"],["/static/js/16.81682386.chunk.js","e124959ab978b0cba58ae20d7c8e0ae6"],["/static/js/17.ce63b0e3.chunk.js","032d7703b0a79a68c00cb9a64e21da18"],["/static/js/18.c7ec5f98.chunk.js","9826b79a6ba15b921c4c6b989530145c"],["/static/js/19.3cd76ed8.chunk.js","ae8d12d56b6fbd01f5611f3c6cd022d4"],["/static/js/2.69d8ce76.chunk.js","4e0ee3edd09668eaa9b4bea0ecf300d6"],["/static/js/20.494187d6.chunk.js","7ca22022546930bee012b4d9cecd260c"],["/static/js/21.6929671d.chunk.js","b8c962282e66599a9dc266e62abe3722"],["/static/js/22.d32c8549.chunk.js","adfbb9c337f4c2d756af112206831ac1"],["/static/js/3.e942d926.chunk.js","d43ecbaf3cd1932e8b0dca8c73a9a1f6"],["/static/js/4.5956ba7a.chunk.js","593a8e25a813f1c1fea90c94ea57d496"],["/static/js/5.06f0505d.chunk.js","e9693ab2dd993a2b1d2271543b964bd6"],["/static/js/6.2c539ad7.chunk.js","da6e81ff93764c3cafb61ba64f43272d"],["/static/js/7.cdcda209.chunk.js","052fbbd86876275c9e8b2a641c6eb347"],["/static/js/8.5ad1ffed.chunk.js","e350717dce6e06cfbcf8dc0072df82ac"],["/static/js/9.882f974a.chunk.js","9bd1676e2e92d959173619eef636f5df"],["/static/js/main.80963d1f.js","6d186b3651b1ab370c94ed5ac6084fbd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});