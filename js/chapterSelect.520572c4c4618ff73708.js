(()=>{"use strict";var t,e={6247:(t,e,n)=>{t.exports=n.p+"assets/ChapterSelect0.edd0.mp3"}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t+"../"})(),t=o(6247),window.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.github.com/repos/HanHan233/PhiCommunity/commits?per_page=1").then((t=>t.json())).then((t=>{document.querySelector("div#recentUpdContent").innerText=t[0].commit.message})),document.querySelector("div#startToPlayBtn").addEventListener("click",(()=>{window.actx.close(),location.href="../songSelect/index.html"})),document.querySelector("div#getChart").addEventListener("click",(()=>{window.actx.close(),location.href="../getChart/index.html"})),document.querySelector("div#cacheControl").addEventListener("click",(()=>{window.actx.close(),location.href="../cacheControl/index.html"})),document.querySelector("div#settingBtn").addEventListener("click",(()=>{window.actx.close(),location.href="../settings/index.html"})),document.querySelector("div#uploadChartsBtn").addEventListener("click",(()=>{window.actx.close(),location.href="https://github.com/HanHan233/PhiCommunity-Charts-Repo"})),fetch(t).then((t=>t.arrayBuffer())).then((t=>{window.actx=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext),window.actx.decodeAudioData(t,(function(t){var e=window.actx.createBufferSource();e.buffer=t,e.loop=!0,e.connect(window.actx.destination),e.start(0)}))}));const e=document.getElementById("body");window.DeviceOrientationEvent&&(console.log("DeviceOrientationEvent detected, attaching event listener."),window.addEventListener("deviceorientation",(t=>{const{gamma:n,beta:o}=t;e.style.setProperty("--gamma",n),e.style.setProperty("--beta",o)}),!0))}))})();