(()=>{"use strict";function t(t){const e=t.target,a=e.getAttribute("data-name"),n=e.getAttribute("data-artist"),i=e.getAttribute("data-levelDesigner"),r=e.style.getPropertyValue("--color"),d=e.style.getPropertyValue("--background"),o=e.getAttribute("data-codename"),s=document.querySelector("div#expandView.expandView");s.setAttribute("data-codename",o),s.style.setProperty("--expandViewBG",d),s.style.setProperty("--expandViewColor",r),s.querySelector("div#songName").innerText=a,s.querySelector("div#artist").innerText=n,s.querySelector("div#chartDesigner").innerText=i,s.querySelectorAll("div.levelItem").forEach((t=>{t.classList.remove("hidden")})),"null"!=e.getAttribute("data-ezRanking")?s.querySelector("div#ezRanking").setAttribute("data-level",e.getAttribute("data-ezRanking")):s.querySelector("div#ezRanking").classList.add("hidden"),"null"!=e.getAttribute("data-hdRanking")?s.querySelector("div#hdRanking").setAttribute("data-level",e.getAttribute("data-hdRanking")):s.querySelector("div#hdRanking").classList.add("hidden"),"null"!=e.getAttribute("data-inRanking")?s.querySelector("div#inRanking").setAttribute("data-level",e.getAttribute("data-inRanking")):s.querySelector("div#inRanking").classList.add("hidden"),"null"!=e.getAttribute("data-atRanking")?s.querySelector("div#atRanking").setAttribute("data-level",e.getAttribute("data-atRanking")):s.querySelector("div#atRanking").classList.add("hidden"),document.querySelector("button#addToChartListBtn.addToChartListBtn").innerText="添加到我的谱面仓库",s.classList.add("show")}window.addEventListener("DOMContentLoaded",(()=>{let e=document.createElement("iframe");e.src="../loadingScreen/index.html",e.classList.add("loadingEmbedFrame"),document.body.appendChild(e),document.querySelector("div#avatarBar").addEventListener("click",(t=>{var e=t.target;null==e.classList.toString().match("avatarBar")&&(e=t.target.parentElement),e.classList.toString().match("expand")?e.classList.remove("expand"):e.classList.add("expand")})),null!=window.localStorage.getItem("playerName")&&(console.log("Setting player name: ",window.localStorage.getItem("playerName")),document.querySelector("div#avatarBar").setAttribute("data-name",window.localStorage.getItem("playerName"))),null!=window.localStorage.getItem("playerAvatar")&&(console.log("Setting player avatar: ",window.localStorage.getItem("playerAvatar")),document.querySelector("div#avatarBar").children[0].setAttribute("style",'--avatar: url("'+window.localStorage.getItem("playerAvatar")+'");')),document.querySelector("div#expandView.expandView").addEventListener("click",(t=>{t.target.classList.toString().includes("expandView")&&(t.target.classList.add("slideOut"),setTimeout((()=>{t.target.classList.remove("show"),t.target.classList.remove("slideOut")}),500))})),document.querySelector("button#addToChartListBtn.addToChartListBtn").addEventListener("click",(t=>{const e=JSON.parse(localStorage.getItem("installedCharts"))||new Array,a=document.querySelector("div#expandView.expandView").getAttribute("data-codename");e.includes(a)?t.target.innerText="已经添加，请勿重复添加":(e.push(a),localStorage.setItem("installedCharts",JSON.stringify(e)),t.target.innerText="成功")})),fetch("https://api.github.com/repos/HanHan233/PhiCommunity-Charts-Repo/contents").then((t=>t.json())).then((a=>{window.songCodeNameList=new Array;for(let t=0;t<a.length;t++)null==a[t].name.match(/.github|README.md|CNAME|_headers/)&&window.songCodeNameList.push(a[t].name);window.songMetaList=new Array;for(let t=0;t<window.songCodeNameList.length;t++)fetch(encodeURI("https://charts-phicommunity.xmdisk.ga/"+window.songCodeNameList[t]+"/meta.json")).then((t=>t.json())).then((t=>{window.songMetaList.push(t)}));const n=setInterval((()=>{if(window.songMetaList.length==window.songCodeNameList.length){const a=document.querySelector("div#chartListContainer");window.songMetaList.forEach((e=>{const n=document.createElement("div");n.classList.add("item"),n.setAttribute("data-codename",e.codename),n.setAttribute("data-name",e.name),n.setAttribute("data-artist",e.artist),n.setAttribute("data-levelDesigner",e.chartDesigner||e.atChartDesigner||e.inChartDesigner||e.hdChartDesigner||e.ezChartDesigner||"Unknown"),n.addEventListener("click",t),n.setAttribute("data-ezRanking",(e.ezRanking||"null").toString()),n.setAttribute("data-hdRanking",(e.hdRanking||"null").toString()),n.setAttribute("data-inRanking",(e.inRanking||"null").toString()),n.setAttribute("data-atRanking",(e.atRanking||"null").toString()),fetch(encodeURI("https://charts-phicommunity.xmdisk.ga/"+e.codename+"/"+e.illustration)).then((t=>t.blob())).then((t=>{const e=window.URL.createObjectURL(t);n.style.setProperty("--background","url("+e+")"),createImageBitmap(t).then((t=>{var e;n.style.setProperty("--color",(e=function(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,e.width,e.height);var n=a.getImageData(0,0,t.width,t.height).data,i=0,r=0,d=0;for(let e=0;e<t.height;e++)for(let a=0;a<t.width;a++)0==e?(i+=n[t.width*e+a],r+=n[t.width*e+a+1],d+=n[t.width*e+a+2]):(i+=n[4*(t.width*e+a)],r+=n[4*(t.width*e+a)+1],d+=n[4*(t.width*e+a)+2]);return[i/=t.width*t.height,r/=t.width*t.height,d/=t.width*t.height]}(t))?Math.round((299*e[0]+587*e[1]+114*e[2])/1e3)>125?"black":"white":"black")}))})),a.appendChild(n)})),e.remove(),clearInterval(n)}}),100)})).catch((()=>{alert("曲目列表获取失败！")}))}))})();