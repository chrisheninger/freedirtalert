"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ccd2c2db6870ce8773c285abe1b39eab"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.8153a592.chunk.js","97a2bc8fcd4c2007ce15ee1ec1b5bdb5"],["/static/js/1.bea1e5af.chunk.js","55701a1fce68eb2a611c19e126a3d892"],["/static/js/10.69a06f1c.chunk.js","195919f55ecf9ea6bac19e0c77b0f6ee"],["/static/js/11.cb729361.chunk.js","bfb4363f1f58a0076f9e577783e1448c"],["/static/js/12.369ed590.chunk.js","40922317db6176d1155c55f8d769f191"],["/static/js/13.04e6b2b7.chunk.js","d21134a1a018874f5423feda87ce7b55"],["/static/js/14.76924b3b.chunk.js","c618e43d2fbff8aa94da6e4c294cf187"],["/static/js/15.d9d5a590.chunk.js","ffd6b4500c60849f067d7749cbd67e03"],["/static/js/16.dcc01ad4.chunk.js","758e9eea130ad5d269a6d4e4e6353d8f"],["/static/js/17.59221b5b.chunk.js","a99bb11aaa1fa25f0d1712bc8b5cb520"],["/static/js/18.19ca9f0a.chunk.js","d78e2d40fc1cab583ad0d61c91f95223"],["/static/js/19.f7894b6b.chunk.js","34e6e1ce4bf0899a483c35fb7da6841c"],["/static/js/2.95f5fdac.chunk.js","2169b7a3c619df38402a2cfa014f13ec"],["/static/js/20.dbc29c63.chunk.js","1d1b4062c7af6114b62b5cf641e0d1ff"],["/static/js/21.67b352d7.chunk.js","a760db70a29791f77fab4fc01793b93c"],["/static/js/22.017ca66b.chunk.js","e97dd8161d1c57cab2914db6a6a329d1"],["/static/js/3.3c9e96b9.chunk.js","d9afdb752cc6902a418bd87640a2c7eb"],["/static/js/4.86d35096.chunk.js","b15d2e8eddb31f7cc8314c1bde78d466"],["/static/js/5.3c6f5d16.chunk.js","70df3d4af3cbda87a1f94c5f336ea902"],["/static/js/6.a8e09ae8.chunk.js","27626a51656d24e87c9af2b57bceb1c6"],["/static/js/7.bcf7f9b6.chunk.js","53bcb3b65c07f8aad6d56ded24b7fa9c"],["/static/js/8.701e3531.chunk.js","7c4dd5248fe5e7810cacdd8e2ec6772a"],["/static/js/9.3691805b.chunk.js","8ca116380ed777f50f05fcf665911a53"],["/static/js/main.4fc56b99.js","0fdf51758ce1e94b04c164a85a79bb6d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});