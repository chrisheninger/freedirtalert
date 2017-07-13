"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","40556601358206becbf1dc974179d4ef"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.ce88725e.chunk.js","4052a42cd21807652fbb47031247064f"],["/static/js/1.09af025d.chunk.js","81c2d08b33c2ba71c7acb24964d3ea09"],["/static/js/10.cb96aed6.chunk.js","d2f4d1ca719aedbf132dcc753a8b86d4"],["/static/js/11.d94403cb.chunk.js","d520262906bf8ad103ee2cce498f1066"],["/static/js/12.12e1935c.chunk.js","1012d9dc94c2ea9fb3e23b1ea81674e2"],["/static/js/13.bf464790.chunk.js","3e43c255509013e611a9eb8283d22f36"],["/static/js/14.ffcbfadf.chunk.js","6ba5961c847869b149829b92ed657fee"],["/static/js/15.1cd4efeb.chunk.js","b47718654dc9b37f445112d21f7492ae"],["/static/js/16.803de1d4.chunk.js","123d3d37e3606374b1d130e6be85ae6b"],["/static/js/17.f773ed0d.chunk.js","11ea03252e3fa84e7c92d04f749d0916"],["/static/js/18.8c43254b.chunk.js","8d1eddeb79dbf708427342100886c090"],["/static/js/19.e5974791.chunk.js","8684f8fd45e3c712250ba50d86938252"],["/static/js/2.91697b6e.chunk.js","61a1f90bbc5d647dd9d1fbf922942290"],["/static/js/20.4b1d7a57.chunk.js","c562b2d0207d924b5007fdc770e573ac"],["/static/js/21.70e7c518.chunk.js","ba7f4485b9980b77f11455d9d251844d"],["/static/js/22.dd4c5711.chunk.js","081c8694aa87dc5653abfa5aa6272135"],["/static/js/3.311c7a6f.chunk.js","c61a005ea0eadaf5b0b9f4004a7113ee"],["/static/js/4.80f14344.chunk.js","37a06d4a96cb2524daed37f2cf4d63e7"],["/static/js/5.0da3fff3.chunk.js","e5b6a4aaa2c9a19128634685d0d5453e"],["/static/js/6.849fa638.chunk.js","e90fba023cfd4cf7fe58b48717350ddd"],["/static/js/7.6d9153f2.chunk.js","c9e0baf9522dd92920baa606e190aaa8"],["/static/js/8.2b03f375.chunk.js","cabd6dcff9271f4a90e5a4c9a458155a"],["/static/js/9.625ace13.chunk.js","a797f216a750416f1252cfdcbe357267"],["/static/js/main.ca7401de.js","f3c9ca13de222392c185667dafd42057"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});