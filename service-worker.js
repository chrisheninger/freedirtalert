"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","1bfaaaec7bd8a3f688499f83e2c6d9e3"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.cefdfcff.chunk.js","12fb8ffb38ddd8d02c28a5d50f50e6f6"],["/static/js/1.cf7ae0e2.chunk.js","91db642a6dc1abf1eecb8a8a956f628f"],["/static/js/10.399ce4c1.chunk.js","7d1e483ec391e399214e3a8c08cdedfd"],["/static/js/11.17350c6b.chunk.js","ef79ac5686b5a9bd4b37604cf29c29ff"],["/static/js/12.baef55f5.chunk.js","fa5825b31d1119cb9eb39ec41229dd3c"],["/static/js/13.f3485785.chunk.js","cacb30d69e161a07600c00ed0c69e6ab"],["/static/js/14.1fda10f5.chunk.js","d72250ab8637a95222756c35707577c5"],["/static/js/15.24322f1a.chunk.js","7e67c816cfd272b6abc8d7ca2e2852ed"],["/static/js/16.33ad7c42.chunk.js","13cdde872457a8fc9bc2eb11e5329c29"],["/static/js/17.cd8b4b35.chunk.js","27b4398da2eb6bd10708909094676332"],["/static/js/18.f54c1291.chunk.js","fcc2b7069b81517c20e642ffb4164f35"],["/static/js/19.a5c7017d.chunk.js","3af8a254b08fb08cc52391d1f931878d"],["/static/js/2.ba5c1cd1.chunk.js","0e40be6b5fd3c8733109f88f91cd6b99"],["/static/js/20.7c855add.chunk.js","b66b9e0a781c7c67b4ab268432ca1cd0"],["/static/js/21.4cf0bd08.chunk.js","b7470e8f78ab11dfe41af1f21334eff2"],["/static/js/22.3f23395b.chunk.js","463cadaea008cdfd81d0d581ce7fe375"],["/static/js/3.fa6246ed.chunk.js","754ad4df5298bdc81d3192549c04d099"],["/static/js/4.0b77d0b9.chunk.js","cbbaf0d4170f262b2b7d027f7cfe3bd2"],["/static/js/5.a45fd309.chunk.js","6022701a3a070f104ad9bc66add7f74d"],["/static/js/6.55b43439.chunk.js","c03eaa59cc3a44bbaee4cd95298ab6d7"],["/static/js/7.72eecda0.chunk.js","93aec86ab75d72d115fe53d3cdcabd31"],["/static/js/8.94f45471.chunk.js","cee73f482558320db6bd1ae28d712d2c"],["/static/js/9.29a34dad.chunk.js","3c68294b3c0931549b8f00f2f7cba573"],["/static/js/main.1cbfe93f.js","d906347170c79b2ea78262941ba9f48d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});