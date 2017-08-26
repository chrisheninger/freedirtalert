"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3fbf9570b4522455b251c62a29a584ca"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.2d2b1767.chunk.js","49e382cd97d5c98731e144e0a6939350"],["/static/js/1.9a2263b4.chunk.js","34c5cdb0e8db508192aa52bb19e4d100"],["/static/js/10.d64ccfee.chunk.js","e4e592239e5ef5b5469889b15a35c8e7"],["/static/js/11.d869c9ac.chunk.js","6953cd3e9ee4f78c44f3daf44c33a9d8"],["/static/js/12.f469bf29.chunk.js","d066649fa77b69989c84750018faeb08"],["/static/js/13.6bac00c5.chunk.js","b9e9cc5f09eb30f44a508fbb507a1f8f"],["/static/js/14.b6c4272e.chunk.js","9412b2978fcbd1184e8ebd0941217987"],["/static/js/15.60e09a4a.chunk.js","482860cdb458f259a8cdf0836b4294ec"],["/static/js/16.248872e3.chunk.js","d3d21e990fc20ca62f4e1f626358b6e7"],["/static/js/17.13aa67ad.chunk.js","2de3c95ae612ba508c50203a9971160a"],["/static/js/18.69e9277d.chunk.js","61f5cd655912c922f251f828647171f3"],["/static/js/19.ee2680c8.chunk.js","b3de0535ff1238e7e0e52e4207086750"],["/static/js/2.316cda7a.chunk.js","2792e4bb50b2e841e38e782689873ef0"],["/static/js/20.2bfe598b.chunk.js","7017ebef728b701823aa51f30481f1e0"],["/static/js/21.6e6d9974.chunk.js","f806d73cef90abb4014525984ab5dc42"],["/static/js/22.f574f2d6.chunk.js","bed3a834801bbcc77dff6a5544ddc8a6"],["/static/js/3.e734a908.chunk.js","7256e1ab97ea349cf02998a6df84a6e5"],["/static/js/4.ce4577c9.chunk.js","a01b7f303ba44cae3f757e706cc3744d"],["/static/js/5.196128c5.chunk.js","ee0b04d15f07a32c5d474bf0db2467f8"],["/static/js/6.ddd29ea2.chunk.js","ff1ce6acce1a65ca1216dba63aeef6b8"],["/static/js/7.29ab9476.chunk.js","27323233596716b9b4d80022948e7ad5"],["/static/js/8.4506a873.chunk.js","2457fc3c09ad4a2d642c119de6b2fad6"],["/static/js/9.a467e88c.chunk.js","ad1cb8e3192daab151ab338721b99ef1"],["/static/js/main.78bfd852.js","fc3b1495d526c26b1b3e3ce398fff11d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});