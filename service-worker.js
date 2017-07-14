"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","130d02dc013370c6a12a62dfdf5187e4"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.30e0b908.chunk.js","a9cfe7a9cb80d200367d83a5eb76b0e9"],["/static/js/1.bb77d184.chunk.js","ff66f1dece4e351b5394bd8348da056d"],["/static/js/10.5d89e467.chunk.js","3fa941e79ae821a13cf0fffa9d8dc7c1"],["/static/js/11.06b6b4f8.chunk.js","005c71a356efb0b2fd69ef329acdb413"],["/static/js/12.8376a53f.chunk.js","118e5ae7a1fb2d89d0c5975ea4acf180"],["/static/js/13.88b7b293.chunk.js","85cd01c6f8daa69c8cdf288b0455f9d9"],["/static/js/14.7537d8a6.chunk.js","2bb3c9222e8fa2cb1933d306efec05c7"],["/static/js/15.3b004bc2.chunk.js","2ebb3688ba078c0b9c4d0c8b58d39bd9"],["/static/js/16.f5311a23.chunk.js","134c4d92c28ada6c5113a5e176e3476f"],["/static/js/17.58ef5c7a.chunk.js","7d9ebaffd6a73a179bb907c6945d1832"],["/static/js/18.ee627ef7.chunk.js","52f7ea44ec31982018c312f0df25a610"],["/static/js/19.c803cb63.chunk.js","6c2bed65a1f48f63e2248d4e0a6699ff"],["/static/js/2.b640aaad.chunk.js","f1a10761617ad8cdd8f8e6e7d0307db0"],["/static/js/20.1e332029.chunk.js","d2642f4849df0d8d2493d4c4bfd785f2"],["/static/js/21.7fdd8f25.chunk.js","2ac2962d1a79746961c0595bc7a78f52"],["/static/js/22.613298ca.chunk.js","ed6b71f519d4c915b9a32865557a335f"],["/static/js/3.b6180e0e.chunk.js","3f2d0ae9bb9624377fd3d5fd26b0082e"],["/static/js/4.c23ca9da.chunk.js","66f379cdf90c7b227002b0b7e3f8a91e"],["/static/js/5.93d615a0.chunk.js","50c1fbbe3f3f9474a8bfd1cd357564b6"],["/static/js/6.a5b064e1.chunk.js","3e6606fd9c178eccddcf0158428446f6"],["/static/js/7.e558e634.chunk.js","fc37ac2c0f1d78392fadac1816040321"],["/static/js/8.5e68ebe1.chunk.js","dd77fa2a81d50c5cc4cb4f8e21beb111"],["/static/js/9.4118737d.chunk.js","8a26dec6eee511a4903065def866daeb"],["/static/js/main.db720aff.js","18442328262e75a4740a21121a28a6cd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});