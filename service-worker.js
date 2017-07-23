"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","627f80722cf827b1684e4a2ec72d8c75"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.a81ce2bd.chunk.js","0088f981f4c2ba467bbf496a6c1ee0f4"],["/static/js/1.2ebdf3d1.chunk.js","c3e467c728f0b0e9535a59ebb8a81f49"],["/static/js/10.3bb8f74d.chunk.js","2add98efdbe215648434f78dcdc45a03"],["/static/js/11.5b8edc99.chunk.js","3b48775cec131d4838cea76c80d4e916"],["/static/js/12.48dcaf27.chunk.js","aae2ee80cac7ab194456c92703f35e1c"],["/static/js/13.c951a9d9.chunk.js","38f128b8750d0dcf295cee12b8f2c89f"],["/static/js/14.9101e1b3.chunk.js","9d41e2a5ed24ab291e93b5aaf0aa1943"],["/static/js/15.1fe05da5.chunk.js","819b239ba3a7a76b42bea0131bad2e55"],["/static/js/16.9bc1dbb2.chunk.js","5948ef45d9efd873e1003de2a5a02ea9"],["/static/js/17.2ad561be.chunk.js","875b80c48f6e7e6f459fb832828a58d6"],["/static/js/18.41d13e9a.chunk.js","9680f302913dd12cd85a36749005e96a"],["/static/js/19.a583b98a.chunk.js","9ba8d568a939a9b73436bc63bd061d17"],["/static/js/2.53cf3a26.chunk.js","bda2fc92953d16a7940e3c65cbb4daae"],["/static/js/20.7576a019.chunk.js","dcee76983fe970b11d9f1d6db15d7be2"],["/static/js/21.e144280b.chunk.js","135186f7465f1d792d4373076dc0a5e4"],["/static/js/22.c989c094.chunk.js","c51a337d5e2250c998931deaae29573b"],["/static/js/3.0d4f22b5.chunk.js","10c14bb40f3e569be6a771a04082f39b"],["/static/js/4.e13c05b2.chunk.js","58bc6febb4be34c42b07c0cc106360c1"],["/static/js/5.3419da34.chunk.js","4ae9a0372460589c4ada0af081576f83"],["/static/js/6.f72e4232.chunk.js","867bdc213b665628e23d0b5c7a8ee458"],["/static/js/7.be31cac8.chunk.js","87379a03cd37108f17ab760720cccda6"],["/static/js/8.781feca6.chunk.js","1db0e5b7f5854f57cdbf5ecad076bd8e"],["/static/js/9.03953b70.chunk.js","d64bcef49a68498189472c66f4f51143"],["/static/js/main.66ad6933.js","c19503f357ac261a0543e789698bf11f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});