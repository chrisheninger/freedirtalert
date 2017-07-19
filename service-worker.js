"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","e6363270722b770c717762c3e360eafc"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.64118386.chunk.js","b9e1a4b031457909da14653d9098307f"],["/static/js/1.3bbca6be.chunk.js","6a725e88df40cef4aa3446fefe07206b"],["/static/js/10.9b4ba6db.chunk.js","cb1ac2d2e984f6f3f7c436b548abe3ed"],["/static/js/11.de544d7f.chunk.js","1da05d21d48b11bbccf6ce3f7cd93af6"],["/static/js/12.b2f43a35.chunk.js","1c9a05404e7b641ffd097a1d766195c5"],["/static/js/13.6d489a25.chunk.js","af4c0d52af8a7bd42153c79eb5927af7"],["/static/js/14.175d26fa.chunk.js","b1e08d192f9864f779ab8a8637b8f5b1"],["/static/js/15.de955bdb.chunk.js","7cff8a4e1c97716c70ec74e2af117212"],["/static/js/16.2ab1e934.chunk.js","36aa2fac9b6db27867e211363d452740"],["/static/js/17.cfea7732.chunk.js","5bb0ff27f5d0b4984e0b5982fce35309"],["/static/js/18.41c99b52.chunk.js","6d9ee131813e9640d8eaf00cacda3403"],["/static/js/19.7b4cb86f.chunk.js","86319a36bde77e6e76370c4d587b787b"],["/static/js/2.4748dc95.chunk.js","66ff3ba2c26247708688ffa842da1e09"],["/static/js/20.9da15068.chunk.js","603c2f264b6e725cc13a57323018742b"],["/static/js/21.13343945.chunk.js","82ac4ed2ac4ed6694460887b0f396bb1"],["/static/js/22.07d5f5a4.chunk.js","fd8e83d84a622b4d82194dad1372fdac"],["/static/js/3.e2cf8f30.chunk.js","d301f8d48a17b2da1bfac70310aaae4a"],["/static/js/4.3fbfa41b.chunk.js","0848409bb996026646ad90ee31585737"],["/static/js/5.88868ef7.chunk.js","b63dd37caf9c9a365cfba8d13776585b"],["/static/js/6.2afea4bd.chunk.js","3ffd19baeb278c43d934051d53c291b9"],["/static/js/7.da7d6600.chunk.js","e583c1e9625d8f679069ae2f4e1aca35"],["/static/js/8.a6e6daa8.chunk.js","a6e51f4cadc382d931807d24efb4a606"],["/static/js/9.81b976fa.chunk.js","ddacc3805163d26398541107c2b45fb8"],["/static/js/main.40bfbb60.js","257ec2053f17b2487343a521a738db48"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});