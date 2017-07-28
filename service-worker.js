"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","0654c7be28b96d6b5d2026a518bb4496"],["/static/css/main.9458d4e4.css","8fb46db933dcca8abe8c7b83169fb1f4"],["/static/js/0.57142084.chunk.js","bc41997ce3431e7cc015ce2bc08cda87"],["/static/js/1.863a0f5c.chunk.js","d8a4282c59b7d72f25742e1bab5c8579"],["/static/js/10.3addbf36.chunk.js","bd24ac3a7f2632878a0e54bed7db2b45"],["/static/js/11.96ac3179.chunk.js","30f12c0005c7433af38a3dfcd2175f06"],["/static/js/12.612b852c.chunk.js","38658e1f5e8a51f8557dffb210b31a04"],["/static/js/13.f3e22efa.chunk.js","c469b65679dff32d396b9e6f5f86351f"],["/static/js/14.946f4baa.chunk.js","1836ea20bb16a8b04fc573963f0606b3"],["/static/js/15.fc5e7608.chunk.js","0dccede4ad4dea1a8a71a493005c5468"],["/static/js/16.095055c5.chunk.js","4788a48ccae40bf984758f4273a193fd"],["/static/js/17.9f43375e.chunk.js","11572352571dce10822036fcec812129"],["/static/js/18.0633e750.chunk.js","b741f3ff9f1de97d71c34311cfa65095"],["/static/js/19.139e2731.chunk.js","c4a80f115f13624b6f63ce62a6ff3a3c"],["/static/js/2.4ba99fcc.chunk.js","2abac26488e0647224f033efe2408eb2"],["/static/js/20.35d7f9c2.chunk.js","814d12de43d94650c1ed73c73b6ea657"],["/static/js/21.4a1e0d84.chunk.js","7719aa52042bbf914ad4ad89137fa435"],["/static/js/22.093ca708.chunk.js","463171c9cf4f16bcea1b367dc4f8ae4c"],["/static/js/3.71180e10.chunk.js","e657cb1255ac5b2c33cafffb1e7cb058"],["/static/js/4.4f72ea21.chunk.js","f1f74453afddfdc971619daa84541e4e"],["/static/js/5.d91eb86a.chunk.js","9a92a0bdb8a717ef20051f1225898ff6"],["/static/js/6.4b26c164.chunk.js","157671354488b41ba763464f3b6a0c7d"],["/static/js/7.46ee414f.chunk.js","98ffd431b613fa2a593020112ba9fb9c"],["/static/js/8.8ee4da94.chunk.js","de7c1240084b92776601f230c6095990"],["/static/js/9.afc3cfb8.chunk.js","1f5bffe537538614ad1334c77ba969e8"],["/static/js/main.70441da3.js","6182a52ac82198ec6eb26096ad769790"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});