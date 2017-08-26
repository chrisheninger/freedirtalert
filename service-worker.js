"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2024d29f501cbfc2dc0dd4cb65b243c0"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.06602a25.chunk.js","a9115555167e966f7517ba02aee7eda5"],["/static/js/1.39f2f2a7.chunk.js","7c879979b8b9bdc8be0eaddf59f556df"],["/static/js/10.93edcd6e.chunk.js","4952a3ea86b7736e1c0ce40ab4aef4fb"],["/static/js/11.9f107f1c.chunk.js","98ac491b19640f5e856511a3c6c32736"],["/static/js/12.84e077b2.chunk.js","95d9d32c730e0a400455842a4dfef1ce"],["/static/js/13.8dea866b.chunk.js","176916a2283000c9a2b9ee96b639392a"],["/static/js/14.a6de2054.chunk.js","c917d3c41817ad8b108844f888a3c4df"],["/static/js/15.f19d8626.chunk.js","b215d11c1a4b78886c6df71181e32500"],["/static/js/16.9b73406d.chunk.js","8633974b5e76943893ae7f31ff48f1c8"],["/static/js/17.6ea3d914.chunk.js","21d2eb7c5a23f570ef3f37b9f9dc8f5d"],["/static/js/18.2d535552.chunk.js","0c4c7205450302d4977ac0b1902091d4"],["/static/js/19.63922b1f.chunk.js","3c2efcc6d55c10e059583220fa8e177f"],["/static/js/2.56812fde.chunk.js","f850d613304e6b57ca5448035398b1be"],["/static/js/20.c21dbc87.chunk.js","96503b24a8fea4f5090763e8afa1edc7"],["/static/js/21.d825f671.chunk.js","9432c1f0a140085d7dd3c9c499762a57"],["/static/js/22.fb34e1d3.chunk.js","8c6f638378639090c5f86c8ad24f9e49"],["/static/js/3.531b9464.chunk.js","4d3bc34b1cb5b3351f78cc773248b0d1"],["/static/js/4.e4bcb26c.chunk.js","465feda4683a5c093f882a8b0bde6149"],["/static/js/5.e5c855e1.chunk.js","157e0bb63597ff78767fcee11d42f768"],["/static/js/6.ec844bbf.chunk.js","a75c9681cbd6b114e9f44c53e967a47c"],["/static/js/7.581463fa.chunk.js","e6f4fc3be97cf8cc2ce878f868a20958"],["/static/js/8.7ce236b0.chunk.js","7d1915709113e612e48fcc365510e2d5"],["/static/js/9.88ce9941.chunk.js","ee178dca9e760ddcfd56e7635bb0508e"],["/static/js/main.1d0d5ebe.js","b6458ce6578b6ea8dfa57ff7a9e3809d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});