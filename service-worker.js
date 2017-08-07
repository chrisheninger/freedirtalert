"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","a249bcfdce95da52dad4e779d35bed2f"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.beeecf7d.chunk.js","357c11e18350b8b42b3514a63e42ad88"],["/static/js/1.13d9782a.chunk.js","24dc727954a02b64cc5714418aef8a72"],["/static/js/10.9cdacfdb.chunk.js","5bc192f49e606ae2b53d84d28e9b9863"],["/static/js/11.d8ef1732.chunk.js","707dacfefc71c4b994dbe831b1c9f455"],["/static/js/12.a3593344.chunk.js","79129430fd0593bbe33a405d15c591b4"],["/static/js/13.f93a6445.chunk.js","ac4181a85c57f473b19417cc721e6ae9"],["/static/js/14.33c8df7e.chunk.js","bd26ee0c99bcacc62918305b18e0cff9"],["/static/js/15.1581cb8a.chunk.js","5f8c18b00f0562d38e7e5760a08d9618"],["/static/js/16.08d0607d.chunk.js","5d3d768bc14df492fc9907c2d84d11be"],["/static/js/17.057b7b0c.chunk.js","9a6aaed070a76085ea9d23c061a78767"],["/static/js/18.b6b1721e.chunk.js","56b2fde7324fb0385d9f8b7fe45454d0"],["/static/js/19.ca2a9b0d.chunk.js","a7060e86b183de39c1b614ca8f023afd"],["/static/js/2.cf66c969.chunk.js","da8f398e645fea833c5ce020f0d30d73"],["/static/js/20.fc56c5d3.chunk.js","605080a4d0f19901c64c18580233d495"],["/static/js/21.662fc7ab.chunk.js","0234e5b7da0f55656b7d0e70d546f5ec"],["/static/js/22.0651da1c.chunk.js","d26df3c211b78941606581e0bdeec940"],["/static/js/3.d892d9fc.chunk.js","5c0b988b91d080e7b78cf966be981a3c"],["/static/js/4.53cf5468.chunk.js","8badf89ce3b876079d3c8199d31202eb"],["/static/js/5.80f03528.chunk.js","3c028ccee4ab4f9370ae64111eda8040"],["/static/js/6.37c6e981.chunk.js","b5820886e19b2219f88f3b48aba46e8d"],["/static/js/7.5d63b9e4.chunk.js","49715ce513a6f2c77c4337d304f202a2"],["/static/js/8.2cca0643.chunk.js","76916bbed242be2df5110955a151fd03"],["/static/js/9.1b485cf7.chunk.js","49f1f127ad547c4b603e1f3821ebf380"],["/static/js/main.aeb5c9d1.js","e01e732b93f19b9761c6af11af3bdb1c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var n=new Request(c,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});