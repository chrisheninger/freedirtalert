"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7030aae3e5161d6dd9ab6189641ed902"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.656aa363.chunk.js","d24cbbe9e7128de8082af7ff8371c8ae"],["/static/js/1.cbc939e6.chunk.js","26d949728ffe3198dfc9cdea54a7f27b"],["/static/js/10.372ba2bd.chunk.js","22ab75904782f916cc90ce9686ef4d94"],["/static/js/11.b9e35d28.chunk.js","e4f35e5f081b3d356b34c9357fb68bd7"],["/static/js/12.e762f7b3.chunk.js","0ddeb3cf894f34a29df0248c7fbd2941"],["/static/js/13.b10c74c5.chunk.js","4a83f187c00674e4f5791e11660b0f01"],["/static/js/14.29bcb011.chunk.js","e9b56fa0672a27e13403dbeb538801b5"],["/static/js/15.69773f50.chunk.js","e7789effaafcf0d91659b22aaa14c1d9"],["/static/js/16.9cd10fcf.chunk.js","de13dfe3a6046547ba23bae43a28d3ab"],["/static/js/17.3a36a3b8.chunk.js","7ab37380eeb8d68a79b89226a6fc7903"],["/static/js/18.38cbb89e.chunk.js","81fbf58abbfd5bbb76a91cb3a6150c21"],["/static/js/19.a373de79.chunk.js","70ef2b3db8e58726cdd259d59b703413"],["/static/js/2.7fbe90ec.chunk.js","1eaed9c660c74ce816be65623a66c32e"],["/static/js/20.8f1d5ceb.chunk.js","82a57a1bf25af94f2676e55a1eb89ed7"],["/static/js/21.11ec38e7.chunk.js","dcd5a8ded296992cba0b40961788943c"],["/static/js/22.077da7b1.chunk.js","f1d8335ead7c8c1b876ef153c4aa946f"],["/static/js/3.db1d55d1.chunk.js","a4b8018e2c503d2cacf0ebd81ebc5d4c"],["/static/js/4.c7699feb.chunk.js","ef9e5c03b7499764244d481e67fa86b9"],["/static/js/5.5a577ed9.chunk.js","94858794c01cdd8fc4f616fd38ae7e2b"],["/static/js/6.e73a906d.chunk.js","e21ffc0f7c16a47b17d06cafd2a03971"],["/static/js/7.7c125bd0.chunk.js","c608bfac3a78125a7c0c2f36ee70a2e6"],["/static/js/8.0aacc70d.chunk.js","08598d8c864cad4e73fe6b33a2a0b31a"],["/static/js/9.364c812a.chunk.js","c55297104d14c3dc8b752fdcd3a337c8"],["/static/js/main.5427821c.js","1584b5574dc0948a88f03870ad780108"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});