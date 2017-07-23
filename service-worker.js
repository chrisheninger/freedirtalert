"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","bc07103ca21ceb8299715e33bef19871"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.0315b667.chunk.js","3a0430f83dc024c7a61664cdd187c594"],["/static/js/1.22addac6.chunk.js","a384763f7dff8adbc0fdf5294e6a75ff"],["/static/js/10.e00d2ab2.chunk.js","2aae3fe624f2a817114797765560fe91"],["/static/js/11.a16c9023.chunk.js","1fc881f6b30e6be70f1da74b789b6e52"],["/static/js/12.b081ed14.chunk.js","4f2baa0cf5dbf4ee8400baf75047ecf9"],["/static/js/13.3e8e512b.chunk.js","fa327552e85b8c61b780ba85527eaf31"],["/static/js/14.56f9646a.chunk.js","e3bed5483505703637723f735cd3d53d"],["/static/js/15.24b8ec10.chunk.js","e64deaf4bf89b91992a843dc517f10e0"],["/static/js/16.6e6bc335.chunk.js","eacf5c515d4dae021890a8811793c144"],["/static/js/17.1f699439.chunk.js","656da667cd1118d5a16eed0b456ac41a"],["/static/js/18.5236dbab.chunk.js","7f032766773671a465ca34852b4aafed"],["/static/js/19.02c2bfa8.chunk.js","716765ccb8b701840c10e96c0aa384e6"],["/static/js/2.ee5d95ea.chunk.js","15330a2c56aedf184c948c8f17c0f218"],["/static/js/20.734e8947.chunk.js","2f37894ff6e90f4b916761731bebe773"],["/static/js/21.397590c6.chunk.js","2199a20456b93921c78e114b4ae80a83"],["/static/js/22.f92082ac.chunk.js","1116c2a61dc4dbbcea58e91c383c1428"],["/static/js/3.b88c0c74.chunk.js","1f9b825d80bef64ceca6a98a555e85ad"],["/static/js/4.9e86fc31.chunk.js","13cdaea42f76069299edb83035686c15"],["/static/js/5.c741630f.chunk.js","f445b437809c413e8de8daa2d67295b5"],["/static/js/6.5fc4fc91.chunk.js","07b662a1e7151e9fcc6bb5335bc8f122"],["/static/js/7.e3ebb27c.chunk.js","765a3cb32b7ed4b3ab6ed7c301ece7a0"],["/static/js/8.7fafdc9e.chunk.js","de7bbf48ec104cf316f31d0a1597a498"],["/static/js/9.894a3a93.chunk.js","8f6d38f776878168bf5fe8a00f9a69d4"],["/static/js/main.92596164.js","7ea9207a283b40740880f614cf20e2f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});