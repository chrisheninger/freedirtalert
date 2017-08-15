"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","9c01190ca3b79b2d4f9d7b9e61477949"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.f6034d03.chunk.js","0128d25a91e811e340f660db5a55bb4f"],["/static/js/1.75e92c7d.chunk.js","6e005d72d27fc2efdb08944bda19cf6e"],["/static/js/10.ad277714.chunk.js","e22bf4ca5b4021770a7c8e4ee9384cd9"],["/static/js/11.f773192f.chunk.js","7a8b64a746d8009682df416c733d9865"],["/static/js/12.e6129d93.chunk.js","72572b7a8548b703f8fce6f0e27342e0"],["/static/js/13.53f89fca.chunk.js","5e1e36e49bd3175a6a53251f87ddf7c5"],["/static/js/14.9f6a8aa8.chunk.js","c05967c70efb79bd718221907b160728"],["/static/js/15.d9d59655.chunk.js","04e1937043ef20d7f336bfb3af232403"],["/static/js/16.66cb7151.chunk.js","d17f00814c9300ef9f46b7e4d2ad768f"],["/static/js/17.dda23f4a.chunk.js","9aab81f97fe1f3c43a8d20e5c250721a"],["/static/js/18.695659d1.chunk.js","8e330a646a79e5c8bac28da06747dfac"],["/static/js/19.04f9b7fa.chunk.js","a7e47a6ef4f9043a82bf0a886165d827"],["/static/js/2.55906fa6.chunk.js","5df45ca606f3a7c4eaa396076514caef"],["/static/js/20.7db6e792.chunk.js","e30f32b8bde436a79c0cad1396761f01"],["/static/js/21.2162d23f.chunk.js","6e35a8adfe161d7bc8405304b8a53aef"],["/static/js/22.6dfcb3ff.chunk.js","e248f7c7203916061708ae1bd9ba3137"],["/static/js/3.ebe88c58.chunk.js","bb3d73f78fecec3612629054c9fb8cc5"],["/static/js/4.1d32f1b2.chunk.js","7c43b009d2c0230425bc28962846c063"],["/static/js/5.56f7ab15.chunk.js","8b659e0aeae83861ef682b64b6cdfa78"],["/static/js/6.4823dbb1.chunk.js","10b868ca94930d8fb4cf2d53efbddeff"],["/static/js/7.4d2c0abc.chunk.js","de6718acaef744556d629e53c4c385a9"],["/static/js/8.3d5bf0cb.chunk.js","4e299626993d3054f3baf6e19acbba25"],["/static/js/9.11878e2a.chunk.js","3cd03948d8443d6c6107790ff24c1613"],["/static/js/main.daae3051.js","cf9fe4e5b8358af4019d23dad090ffe3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});