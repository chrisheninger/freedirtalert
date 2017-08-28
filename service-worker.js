"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","92f5fbf5d7805bfff14bb0ca08e9915e"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.cc0a19a8.chunk.js","ef6c037b27c248ec74019355f52af427"],["/static/js/1.6c9232ca.chunk.js","6384b165379224efda0b63433834daae"],["/static/js/10.db2d8336.chunk.js","67618ec32061b8cf1b76b3c27f4eca27"],["/static/js/11.bb873bf1.chunk.js","8bdb5ff5574151d990549dc78791d13d"],["/static/js/12.2e2134d3.chunk.js","700de21017773ef1404aa58c047ae1c1"],["/static/js/13.b2c162c5.chunk.js","20bcd679ec2c8a52e923d76cac62c9d7"],["/static/js/14.69e1d6e1.chunk.js","76ac6c24f64f26541a7e0a73f39d7f6b"],["/static/js/15.7473ea3e.chunk.js","fe03cdbd65b0149c84016fb51d840926"],["/static/js/16.21d0021e.chunk.js","922bc1d015d784031b65e6ab46217720"],["/static/js/17.3ba2599d.chunk.js","b2b7640170a4f68231101358ac90f715"],["/static/js/18.2302f311.chunk.js","db32222c7208ef238a62ad75ed467ba3"],["/static/js/19.34518c69.chunk.js","0ed517038e17aba26299cff7a473773d"],["/static/js/2.8b4d9e2f.chunk.js","bbf45aebf9c3f99a3f197cb9d3725c19"],["/static/js/20.6ec339af.chunk.js","203c5537c9c6a71a9757e0faad623b4f"],["/static/js/21.69e8b978.chunk.js","f5d95c964510f331d4c26eb2053581e5"],["/static/js/22.4e035ea6.chunk.js","abfd1db8aa141cdb98a26c1922289f4f"],["/static/js/3.d5d80600.chunk.js","a4eff21929b59ed824301ca508d46645"],["/static/js/4.c8e33846.chunk.js","bdfa05b4d2765fd3afe878da89aa2075"],["/static/js/5.fe3b1b65.chunk.js","ef84ee2e0df8bcbcdb894328a7a047ea"],["/static/js/6.f3bbb82d.chunk.js","8c823044768903cb5466817f9a5d8c9f"],["/static/js/7.032bd3bb.chunk.js","04ab0cbc75f04b9b8e7cd814e7a06bcf"],["/static/js/8.c49f65f6.chunk.js","6f21c1b094ec5154ed5d8aaff1ef7680"],["/static/js/9.ad2cf341.chunk.js","ac499ec9fae5bca4e1eef2e6afee1ce9"],["/static/js/main.744279be.js","648a401324953015c415ee1235f56fb9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});