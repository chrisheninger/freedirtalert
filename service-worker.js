"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","1ac5bc0edd5aa5f72bb7887d86095331"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.570cecd1.chunk.js","8092e05364ffed675584e4dc7fa69857"],["/static/js/1.35a3d53a.chunk.js","bd0bfa5a489d092a70a9258daba63bbe"],["/static/js/10.089e626a.chunk.js","61294e7cd1ee6885739ec538c976ad66"],["/static/js/11.bc21eaaa.chunk.js","3e82bd76ef8e17c19d7280b05f0cd2cf"],["/static/js/12.701b0ff7.chunk.js","0814ebf20bc0692eda27327e5d7c585e"],["/static/js/13.42d5db85.chunk.js","d57615603704e21064fd137dd817cd26"],["/static/js/14.3eac1f41.chunk.js","39bcd80a8ba0dc29008e827adc37254d"],["/static/js/15.805f7a1b.chunk.js","887d9c7768c995a98dbd5e91fc6e9447"],["/static/js/16.7529b794.chunk.js","cb0ee596a2bafea327762d512808891c"],["/static/js/17.b0df335f.chunk.js","a14780154b005e24718158f2294416c1"],["/static/js/18.5554400d.chunk.js","46548a6b196cca7cff1ef9316514e8f2"],["/static/js/19.183cb699.chunk.js","2851ac5627f076855b8d8745d835927e"],["/static/js/2.ffc2ba4f.chunk.js","9092816820e75e06aa101d7737507cdf"],["/static/js/20.d6cd5ecd.chunk.js","c2bb6bcdac2aac27cf1a74401d6faf89"],["/static/js/21.90240846.chunk.js","51cc5f300c3cd6d51d69904be5bef21f"],["/static/js/22.4874885b.chunk.js","8c0a2854fe4e8d6103344e243e038f11"],["/static/js/3.f5a5070f.chunk.js","65a0f978a7cb67a6aad475004ec891e2"],["/static/js/4.4f31d031.chunk.js","bae7b873717330d8d43956c574cac8fc"],["/static/js/5.9f7fc061.chunk.js","6bb553c49416d77a9f30802276cc794e"],["/static/js/6.38ca2216.chunk.js","e984f3cf2b89251121565564eb2e3db8"],["/static/js/7.68829808.chunk.js","3b30de2974e5ef091c652524243f1ada"],["/static/js/8.9e2fada0.chunk.js","e9374d631a3a9cf50ee6895ee59cbbf3"],["/static/js/9.9b0f53c1.chunk.js","9ddbddd57ea4321dbcd3df88391c4646"],["/static/js/main.958820ba.js","7025517d824d969e9b64732aceeeedf7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});