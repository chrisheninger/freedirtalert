"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","c028168507110109df212da2cdaae9ce"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.68ba0277.chunk.js","fce13928dac12b3b65896a3f3fd60fda"],["/static/js/1.ecdba803.chunk.js","57e3f66799e3c0c46dd6874bb3f4e5d9"],["/static/js/10.e0ef1b92.chunk.js","7939372f960b0c5f0bfc17767c833c01"],["/static/js/11.e1d40c68.chunk.js","841c9ba5f8a5e414f8b1edc233535deb"],["/static/js/12.ef21f2bb.chunk.js","63847180719bd2bb4e590fa7eb32beb3"],["/static/js/13.fd6f2067.chunk.js","da50d1b5daae727ba899e00b70beaf41"],["/static/js/14.6a478e58.chunk.js","86e48d4381371d399db4a0145ccbb82a"],["/static/js/15.11f2178d.chunk.js","16bf67d83832e18b1222c33262b30bc9"],["/static/js/16.9e0ad5c8.chunk.js","44c9162ecb1cfeede4c85137f5b43d69"],["/static/js/17.6f87280d.chunk.js","a0b207e7f9e9a50646bb1898e9f93b49"],["/static/js/18.a9ac55a5.chunk.js","7cb02b6c1b5f98344ef1beab2b95a4cd"],["/static/js/19.9dd1bf04.chunk.js","e606b9522804d53dbcf11e4a08a18337"],["/static/js/2.7ba812e4.chunk.js","7e877b05e3967c318cafd83268ed7fa7"],["/static/js/20.c624c9be.chunk.js","8731cac5660e24c25403ac519a4af9dc"],["/static/js/21.acbc92dc.chunk.js","cd5a0f299662dd1bd5e034f189c1d500"],["/static/js/22.23491099.chunk.js","88e8d9dc3f4f43a6bddfc17ae595f4ce"],["/static/js/3.6bcf15a4.chunk.js","587af6ad0a65f7c11c7b75ae76c53b9f"],["/static/js/4.64fe4ee9.chunk.js","eaa8a86790743665f90bc282a50470b2"],["/static/js/5.37ff3d7c.chunk.js","2f97c69159002afaeeb8bbb95d519e14"],["/static/js/6.c55ecd6d.chunk.js","36f8eecfe8de470657a15aaa941ade10"],["/static/js/7.b94d627b.chunk.js","69135d70a1f776586e96472e573ab9fb"],["/static/js/8.c06cd339.chunk.js","bf923e1dc031d7ff149b1876a5b401c0"],["/static/js/9.184882ec.chunk.js","df0e3d74de5d5dad28d77fab4dc03556"],["/static/js/main.9adbee29.js","fe79520c83309a9f0421f5be1654c4fe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});