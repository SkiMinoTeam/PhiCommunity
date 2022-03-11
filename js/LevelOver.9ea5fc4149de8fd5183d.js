(()=>{"use strict";var e={724:(e,t,o)=>{e.exports=o.p+"assets/LevelOver.mp3"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{var e=o(724);const t={ez:0,hd:1,in:2,at:3};window.addEventListener("DOMContentLoaded",(()=>{document.querySelector("div#avatarBar").addEventListener("click",(e=>{var t=e.target;null==t.classList.toString().match("avatarBar")&&(t=e.target.parentElement),t.classList.toString().match("expand")?t.classList.remove("expand"):t.classList.add("expand")})),null!=window.localStorage.getItem("playerName")&&(console.log("Setting player name: ",window.localStorage.getItem("playerName")),document.querySelector("div#avatarBar").setAttribute("data-name",window.localStorage.getItem("playerName")));const o=new URL(location.href).search,n=new URLSearchParams(o),r=n.get("play"),a=t[n.get("l")],l=n.get("l"),c=parseInt(n.get("score")),s=n.get("mc"),i=n.get("p"),d=n.get("g"),u=n.get("b"),g=n.get("m"),p=n.get("e"),m=n.get("mode");switch(m){case"normal":default:break;case"auto":document.querySelector("#scrollFrame").classList.add("auto");break;case"hyper":document.querySelector("#scrollFrame").classList.add("hyper")}const y=Math.round((parseInt(i)+.65*parseInt(d))/(parseInt(i)+parseInt(d)+parseInt(u)+parseInt(g)+0)*1e4)/100,w=d-p;var h;document.getElementById("retryBtn").addEventListener("click",(()=>{location.href="../whilePlaying/index.html?play="+r+"&l="+l})),document.getElementById("backInResultBtn").addEventListener("click",(()=>{location.href="../songSelect/index.html"})),0==c&&(console.log("No grade"),h=""),c<699999&&0!=c&&(console.log("Grade: False"),h="F15F"),7e5<=c&&c<=819999&&(console.log("Grade:C"),h="C15C"),82e4<=c&&c<=879999&&(console.log("Grade:B"),h="B15B"),88e4<=c&&c<=919999&&(console.log("Grade:A"),h="A15A"),92e4<=c&&c<=959999&&(console.log("Grade:S"),h="S15S"),96e4<=c&&c<=999999&&(console.log("Grade:V"),h="V15V"),0==u&&0==g&&(console.log("Grade: V wih Full Combo"),h="V15FC"),1e6<=c&&(console.log("Grade:Phi"),h="phi15phi"),fetch("https://charts.phicommunity.com.cn/"+r+"/meta.json").then((e=>e.json())).then((t=>{var o,n;window.window.playResult={score:c,grade:h,play:r,playLevel:a,songInfo:t,maxCombo:s,accuracy:y,perFect:i,good:d,bad:u,miss:g,early:p,late:w,playLevelString:l,mode:m},console.log(window.playResult),fetch(e).then((e=>e.arrayBuffer())).then((e=>{const t=new(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.msAudioContext);t.decodeAudioData(e,(function(e){var o=t.createBufferSource();o.buffer=e,o.loop=!0,o.connect(t.destination),o.start(0)}))})),document.body.setAttribute("style",`--background:url(${encodeURI("https://charts.phicommunity.com.cn/"+window.playResult.play+"/"+window.playResult.songInfo.illustration)});`),document.querySelector("#songImg").setAttribute("src",encodeURI("https://charts.phicommunity.com.cn/"+r+"/"+window.playResult.songInfo.illustration)),document.querySelector("#score").innerText=c.toString().padStart(7,"0"),document.querySelector("#gradeImage").src="../assets/images/"+h+".svg",document.querySelector("#maxCombo").innerText=s,document.querySelector("#accuracy").innerText=y+"%",document.querySelector("#perfect").innerText=i,document.querySelector("#good").innerText=d,document.querySelector("#bad").innerText=u,document.querySelector("#miss").innerText=g,document.querySelector("#early").innerText=p,document.querySelector("#late").innerText=w,document.querySelector("div.songName#songName").innerText=window.playResult.songInfo.name,document.querySelector("div.levelString#levelString").innerText=window.playResult.playLevelString.toUpperCase()+" Lv."+Math.floor(window.playResult.songInfo[window.playResult.playLevelString.toLowerCase()+"Ranking"]||0),o=window.playResult.accuracy>=70?(Math.pow((window.playResult.accuracy-55)/45,2)*(window.playResult.songInfo[window.playResult.playLevelString.toLowerCase()+"Ranking"]||0)).toFixed(2):0,window.playResult.score<88e4&&(n=0),document.querySelector("#rks").innerText=o,console.log("ΔRKS:",o),console.log("ΔData(KB):",n)})).catch((()=>{alert("歌曲信息获取失败！")}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T2lFLFdBQVdDLFNBQVNzQixLQUM1QnBGLFNBQVNlLGNBQWMsK0JBQStCbUUsVUFDckR0RixPQUFPaUUsV0FBV3ZCLGdCQUFnQitDLGNBQ2xDLE9BQ0FwQyxLQUFLcUMsTUFDSjFGLE9BQU9pRSxXQUFXQyxTQUNqQmxFLE9BQU9pRSxXQUFXdkIsZ0JBQWdCaUQsY0FDakMsWUFDRyxHQUtONUIsRUFERy9ELE9BQU9pRSxXQUFXYixVQUFZLElBRWhDQyxLQUFLdUMsS0FBSzVGLE9BQU9pRSxXQUFXYixTQUFXLElBQU0sR0FBSSxJQUNoRHBELE9BQU9pRSxXQUFXQyxTQUNsQmxFLE9BQU9pRSxXQUFXdkIsZ0JBQWdCaUQsY0FDakMsWUFDRyxJQUNKRSxRQUFRLEdBRUMsRUFFUjdGLE9BQU9pRSxXQUFXdEIsTUFBUSxPQUM3QnFCLEVBQVksR0FFYjVELFNBQVNlLGNBQWMsUUFBUW1FLFVBQVl2QixFQUMzQ2pDLFFBQVFDLElBQUksUUFBU2dDLEdBQ3JCakMsUUFBUUMsSUFBSSxhQUFjaUMsTUFFMUI4QixPQUFNLEtBQ05DLE1BQU0sb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGktY29tbXVuaXR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9waGktY29tbXVuaXR5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvLi9zcmMvTGV2ZWxPdmVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsImV4cG9ydCBjb25zdCBnYW1lTGV2ZWxzID0ge1xuXHRlejogMCxcblx0aGQ6IDEsXG5cdGluOiAyLFxuXHRhdDogMyxcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMZXZlbE92ZXJfbXAzIGZyb20gJy4vTGV2ZWxPdmVyLm1wMyc7XG5pbXBvcnQgeyBnYW1lTGV2ZWxzIH0gZnJvbSAnLi4vY29uc3RhbnRzLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNhdmF0YXJCYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0dmFyIF9lbGVtZW50ID0gZS50YXJnZXQ7XG5cdFx0aWYgKF9lbGVtZW50LmNsYXNzTGlzdC50b1N0cmluZygpLm1hdGNoKCdhdmF0YXJCYXInKSA9PSBudWxsKSB7XG5cdFx0XHRfZWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cdFx0fVxuXHRcdGlmIChfZWxlbWVudC5jbGFzc0xpc3QudG9TdHJpbmcoKS5tYXRjaCgnZXhwYW5kJykpIHtcblx0XHRcdF9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcblx0XHR9XG5cdH0pO1xuXHRpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwbGF5ZXJOYW1lJykgIT0gbnVsbCkge1xuXHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0J1NldHRpbmcgcGxheWVyIG5hbWU6ICcsXG5cdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllck5hbWUnKVxuXHRcdCk7XG5cdFx0ZG9jdW1lbnRcblx0XHRcdC5xdWVyeVNlbGVjdG9yKCdkaXYjYXZhdGFyQmFyJylcblx0XHRcdC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdkYXRhLW5hbWUnLFxuXHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BsYXllck5hbWUnKVxuXHRcdFx0KTtcblx0fVxuXHQvLyByZXNpemUoJ2Rpdi5tYWluQ29udGVudCcpO1xuXHQvLyByZXNpemUoJ2JvZHkgPiBkaXYuZXh0cmFJbmZvJywgJ3NrZXcoLTE1ZGVnKScpO1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLnNlYXJjaDtcblx0Y29uc3QgcGFyc2VkVVJMUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxQYXJhbXMpO1xuXHQvL1x06I635Y+W5ZCE56eN5pWw5o2uXG5cdGNvbnN0IHBsYXkgPSBwYXJzZWRVUkxQYXJhbXMuZ2V0KCdwbGF5Jyk7XG5cdGNvbnN0IHBsYXlMZXZlbCA9IGdhbWVMZXZlbHNbcGFyc2VkVVJMUGFyYW1zLmdldCgnbCcpXTtcblx0Y29uc3QgcGxheUxldmVsU3RyaW5nID0gcGFyc2VkVVJMUGFyYW1zLmdldCgnbCcpO1xuXHRjb25zdCBzY29yZSA9IHBhcnNlSW50KHBhcnNlZFVSTFBhcmFtcy5nZXQoJ3Njb3JlJykpO1xuXHQvLyBjb25zdCBzY29yZT1cblx0Y29uc3QgbWF4Q29tYm8gPSBwYXJzZWRVUkxQYXJhbXMuZ2V0KCdtYycpO1xuXHRjb25zdCBwZXJGZWN0ID0gcGFyc2VkVVJMUGFyYW1zLmdldCgncCcpO1xuXHRjb25zdCBnb29kID0gcGFyc2VkVVJMUGFyYW1zLmdldCgnZycpO1xuXHRjb25zdCBiYWQgPSBwYXJzZWRVUkxQYXJhbXMuZ2V0KCdiJyk7XG5cdGNvbnN0IG1pc3MgPSBwYXJzZWRVUkxQYXJhbXMuZ2V0KCdtJyk7XG5cdGNvbnN0IGVhcmx5ID0gcGFyc2VkVVJMUGFyYW1zLmdldCgnZScpO1xuXHRjb25zdCBtb2RlID0gcGFyc2VkVVJMUGFyYW1zLmdldCgnbW9kZScpO1xuXHRzd2l0Y2ggKG1vZGUpIHtcblx0Y2FzZSAnbm9ybWFsJzpcblx0XHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsRnJhbWUnKS5jbGFzc0xpc3QuYWRkKCdub3JtYWwnKTtcblx0XHRicmVhaztcblxuXHRjYXNlICdhdXRvJzpcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsRnJhbWUnKS5jbGFzc0xpc3QuYWRkKCdhdXRvJyk7XG5cdFx0YnJlYWs7XG5cblx0Y2FzZSAnaHlwZXInOlxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxGcmFtZScpLmNsYXNzTGlzdC5hZGQoJ2h5cGVyJyk7XG5cdFx0YnJlYWs7XG5cblx0ZGVmYXVsdDpcblx0XHRicmVhaztcblx0fVxuXHRjb25zdCBhY2N1cmFjeSA9XG5cdFx0TWF0aC5yb3VuZChcblx0XHRcdCgocGFyc2VJbnQocGVyRmVjdCkgKyBwYXJzZUludChnb29kKSAqIDAuNjUpIC9cblx0XHRcdFx0KHBhcnNlSW50KHBlckZlY3QpICtcblx0XHRcdFx0XHRwYXJzZUludChnb29kKSArXG5cdFx0XHRcdFx0cGFyc2VJbnQoYmFkKSArXG5cdFx0XHRcdFx0cGFyc2VJbnQobWlzcykgK1xuXHRcdFx0XHRcdDApKSAqXG5cdFx0XHRcdDEwMDAwXG5cdFx0KSAvIDEwMDtcblx0Y29uc3QgbGF0ZSA9IGdvb2QgLSBlYXJseTtcblx0dmFyIGdyYWRlO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmV0cnlCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRsb2NhdGlvbi5ocmVmID1cblx0XHRcdCcuLi93aGlsZVBsYXlpbmcvaW5kZXguaHRtbD9wbGF5PScgK1xuXHRcdFx0cGxheSArXG5cdFx0XHQnJmw9JyArXG5cdFx0XHRwbGF5TGV2ZWxTdHJpbmc7XG5cdH0pO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0luUmVzdWx0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0bG9jYXRpb24uaHJlZiA9XG5cdFx0XHQnLi4vc29uZ1NlbGVjdC9pbmRleC5odG1sJztcblx0fSk7XG5cdC8vXHTliKTmlq3nrYnnuqfvvIjojIPlm7TmnaXoh6rokIzlqJjnmb7np5HvvIlcblx0aWYgKHNjb3JlID09IDApIHtcblx0XHRjb25zb2xlLmxvZygnTm8gZ3JhZGUnKTtcblx0XHRncmFkZSA9ICcnO1xuXHR9XG5cdGlmIChzY29yZSA8IDY5OTk5OSAmJiBzY29yZSAhPSAwKSB7XG5cdFx0Y29uc29sZS5sb2coJ0dyYWRlOiBGYWxzZScpO1xuXHRcdGdyYWRlID0gJ0YxNUYnO1xuXHR9XG5cdGlmICg3MDAwMDAgPD0gc2NvcmUgJiYgc2NvcmUgPD0gODE5OTk5KSB7XG5cdFx0Y29uc29sZS5sb2coJ0dyYWRlOkMnKTtcblx0XHRncmFkZSA9ICdDMTVDJztcblx0fVxuXHRpZiAoODIwMDAwIDw9IHNjb3JlICYmIHNjb3JlIDw9IDg3OTk5OSkge1xuXHRcdGNvbnNvbGUubG9nKCdHcmFkZTpCJyk7XG5cdFx0Z3JhZGUgPSAnQjE1Qic7XG5cdH1cblx0aWYgKDg4MDAwMCA8PSBzY29yZSAmJiBzY29yZSA8PSA5MTk5OTkpIHtcblx0XHRjb25zb2xlLmxvZygnR3JhZGU6QScpO1xuXHRcdGdyYWRlID0gJ0ExNUEnO1xuXHR9XG5cdGlmICg5MjAwMDAgPD0gc2NvcmUgJiYgc2NvcmUgPD0gOTU5OTk5KSB7XG5cdFx0Y29uc29sZS5sb2coJ0dyYWRlOlMnKTtcblx0XHRncmFkZSA9ICdTMTVTJztcblx0fVxuXHRpZiAoOTYwMDAwIDw9IHNjb3JlICYmIHNjb3JlIDw9IDk5OTk5OSkge1xuXHRcdGNvbnNvbGUubG9nKCdHcmFkZTpWJyk7XG5cdFx0Z3JhZGUgPSAnVjE1Vic7XG5cdH1cblx0aWYgKGJhZCA9PSAwICYmIG1pc3MgPT0gMCkge1xuXHRcdGNvbnNvbGUubG9nKCdHcmFkZTogViB3aWggRnVsbCBDb21ibycpO1xuXHRcdGdyYWRlID0gJ1YxNUZDJztcblx0fVxuXHRpZiAoMTAwMDAwMCA8PSBzY29yZSkge1xuXHRcdGNvbnNvbGUubG9nKCdHcmFkZTpQaGknKTtcblx0XHRncmFkZSA9ICdwaGkxNXBoaSc7XG5cdH1cblx0Ly8gc3dpdGNoIChzY29yZSkge1xuXHQvLyBcdGRlZmF1bHQ6XG5cdC8vIFx0XHRjb25zb2xlLmxvZygnRXJyb3IsIEZhbGxiYWNrIHRvIEZhbHNlJyk7XG5cdC8vIFx0XHRncmFkZT0nRjE1Ric7XG5cdC8vIFx0XHRicmVhaztcblx0Ly8gfVxuXHQvLyBncmFkZUltYWdlXG5cdC8vXHTojrflj5bmrYzmm7Lkv6Hmga9cblx0ZmV0Y2goJ2h0dHBzOi8vY2hhcnRzLnBoaWNvbW11bml0eS5jb20uY24vJyArIHBsYXkgKyAnL21ldGEuanNvbicpXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdHdpbmRvdy53aW5kb3cucGxheVJlc3VsdCA9IHtcblx0XHRcdFx0c2NvcmU6IHNjb3JlLFxuXHRcdFx0XHRncmFkZTogZ3JhZGUsXG5cdFx0XHRcdHBsYXk6IHBsYXksXG5cdFx0XHRcdHBsYXlMZXZlbDogcGxheUxldmVsLFxuXHRcdFx0XHRzb25nSW5mbzogZGF0YSxcblx0XHRcdFx0bWF4Q29tYm86IG1heENvbWJvLFxuXHRcdFx0XHRhY2N1cmFjeTogYWNjdXJhY3ksXG5cdFx0XHRcdHBlckZlY3Q6IHBlckZlY3QsXG5cdFx0XHRcdGdvb2Q6IGdvb2QsXG5cdFx0XHRcdGJhZDogYmFkLFxuXHRcdFx0XHRtaXNzOiBtaXNzLFxuXHRcdFx0XHRlYXJseTogZWFybHksXG5cdFx0XHRcdGxhdGU6IGxhdGUsXG5cdFx0XHRcdHBsYXlMZXZlbFN0cmluZzogcGxheUxldmVsU3RyaW5nLFxuXHRcdFx0XHRtb2RlOiBtb2RlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnNvbGUubG9nKHdpbmRvdy5wbGF5UmVzdWx0KTtcblx0XHRcdC8vXHTmk43kvZxET03kv67mlLnlj6/op4Hpg6jliIbmlbDmja5cblx0XHRcdGZldGNoKExldmVsT3Zlcl9tcDMpXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5hcnJheUJ1ZmZlcigpKVxuXHRcdFx0XHQudGhlbigoYXJyYXlCdWZmZXIpID0+IHtcblx0XHRcdFx0XHRjb25zdCBhY3R4ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8XG5cdFx0XHRcdFx0XHR3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8XG5cdFx0XHRcdFx0XHR3aW5kb3cubW96QXVkaW9Db250ZXh0IHx8XG5cdFx0XHRcdFx0XHR3aW5kb3cubXNBdWRpb0NvbnRleHQpKCk7XG5cdFx0XHRcdFx0YWN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIsIGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdFx0XHRcdHZhciBzb3VyY2UgPSBhY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuXHRcdFx0XHRcdFx0c291cmNlLmJ1ZmZlciA9IGJ1ZmZlcjtcblx0XHRcdFx0XHRcdHNvdXJjZS5sb29wID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNvdXJjZS5jb25uZWN0KGFjdHguZGVzdGluYXRpb24pO1xuXHRcdFx0XHRcdFx0c291cmNlLnN0YXJ0KDApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFxuXHRcdFx0XHQnc3R5bGUnLFxuXHRcdFx0XHRgLS1iYWNrZ3JvdW5kOnVybCgke2VuY29kZVVSSShcblx0XHRcdFx0XHQnaHR0cHM6Ly9jaGFydHMucGhpY29tbXVuaXR5LmNvbS5jbi8nICtcblx0XHRcdFx0XHRcdHdpbmRvdy5wbGF5UmVzdWx0LnBsYXkgK1xuXHRcdFx0XHRcdFx0Jy8nICtcblx0XHRcdFx0XHRcdHdpbmRvdy5wbGF5UmVzdWx0LnNvbmdJbmZvLmlsbHVzdHJhdGlvblxuXHRcdFx0XHQpfSk7YFxuXHRcdFx0KTtcblx0XHRcdGRvY3VtZW50XG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCcjc29uZ0ltZycpXG5cdFx0XHRcdC5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0ZW5jb2RlVVJJKFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vY2hhcnRzLnBoaWNvbW11bml0eS5jb20uY24vJyArXG5cdFx0XHRcdFx0XHRcdHBsYXkgK1xuXHRcdFx0XHRcdFx0XHQnLycgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cucGxheVJlc3VsdC5zb25nSW5mby5pbGx1c3RyYXRpb25cblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKS5pbm5lclRleHQgPSBzY29yZVxuXHRcdFx0XHQudG9TdHJpbmcoKVxuXHRcdFx0XHQucGFkU3RhcnQoNywgJzAnKTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmFkZUltYWdlJykuc3JjID1cblx0XHRcdFx0Jy4uL2Fzc2V0cy9pbWFnZXMvJyArIGdyYWRlICsgJy5zdmcnO1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heENvbWJvJykuaW5uZXJUZXh0ID0gbWF4Q29tYm87XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWNjdXJhY3knKS5pbm5lclRleHQgPSBhY2N1cmFjeSArICclJztcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmZWN0JykuaW5uZXJUZXh0ID0gcGVyRmVjdDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnb29kJykuaW5uZXJUZXh0ID0gZ29vZDtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWQnKS5pbm5lclRleHQgPSBiYWQ7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlzcycpLmlubmVyVGV4dCA9IG1pc3M7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWFybHknKS5pbm5lclRleHQgPSBlYXJseTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXRlJykuaW5uZXJUZXh0ID0gbGF0ZTtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zb25nTmFtZSNzb25nTmFtZScpLmlubmVyVGV4dCA9XG5cdFx0XHRcdHdpbmRvdy5wbGF5UmVzdWx0LnNvbmdJbmZvLm5hbWU7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubGV2ZWxTdHJpbmcjbGV2ZWxTdHJpbmcnKS5pbm5lclRleHQgPVxuXHRcdFx0XHR3aW5kb3cucGxheVJlc3VsdC5wbGF5TGV2ZWxTdHJpbmcudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgTHYuJyArXG5cdFx0XHRcdE1hdGguZmxvb3IoXG5cdFx0XHRcdFx0d2luZG93LnBsYXlSZXN1bHQuc29uZ0luZm9bXG5cdFx0XHRcdFx0XHR3aW5kb3cucGxheVJlc3VsdC5wbGF5TGV2ZWxTdHJpbmcudG9Mb3dlckNhc2UoKSArXG5cdFx0XHRcdFx0XHRcdCdSYW5raW5nJ1xuXHRcdFx0XHRcdF0gfHwgMFxuXHRcdFx0XHQpO1xuXHRcdFx0Ly8g5Yqg6L295q2M5puy5YWD5L+h5oGv77yI6K6h566XUktT562J77yJXG5cdFx0XHR2YXIgZGVsdGFSS1MsIGRlbHRhRGF0YTtcblx0XHRcdGlmICh3aW5kb3cucGxheVJlc3VsdC5hY2N1cmFjeSA+PSA3MCkge1xuXHRcdFx0XHRkZWx0YVJLUyA9IChcblx0XHRcdFx0XHRNYXRoLnBvdygod2luZG93LnBsYXlSZXN1bHQuYWNjdXJhY3kgLSA1NSkgLyA0NSwgMikgKlxuXHRcdFx0XHRcdCh3aW5kb3cucGxheVJlc3VsdC5zb25nSW5mb1tcblx0XHRcdFx0XHRcdHdpbmRvdy5wbGF5UmVzdWx0LnBsYXlMZXZlbFN0cmluZy50b0xvd2VyQ2FzZSgpICtcblx0XHRcdFx0XHRcdFx0J1JhbmtpbmcnXG5cdFx0XHRcdFx0XSB8fCAwKVxuXHRcdFx0XHQpLnRvRml4ZWQoMik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWx0YVJLUyA9IDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2luZG93LnBsYXlSZXN1bHQuc2NvcmUgPCA4ODAwMDApIHtcblx0XHRcdFx0ZGVsdGFEYXRhID0gMDtcblx0XHRcdH1cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNya3MnKS5pbm5lclRleHQgPSBkZWx0YVJLUztcblx0XHRcdGNvbnNvbGUubG9nKCfOlFJLUzonLCBkZWx0YVJLUyk7XG5cdFx0XHRjb25zb2xlLmxvZygnzpREYXRhKEtCKTonLCBkZWx0YURhdGEpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKCgpID0+IHtcblx0XHRcdGFsZXJ0KCfmrYzmm7Lkv6Hmga/ojrflj5blpLHotKXvvIEnKTtcblx0XHR9KTtcbn0pO1xuLy8gd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuLy8gXHQvL1x06Ieq5Yqo57yp5pS+XG4vLyBcdHJlc2l6ZSgnZGl2Lm1haW5Db250ZW50Jyk7XG4vLyBcdHJlc2l6ZSgnYm9keSA+IGRpdi5leHRyYUluZm8nLCAnc2tldygtMTVkZWcpJyk7XG4vLyB9O1xuLy8gZnVuY3Rpb24gcmVzaXplKCkge1xuLy8gXHQvLyBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnN0eWxlLnRyYW5zZm9ybT1cInNjYWxlKFwiK3dpbmRvdy5vdXRlckhlaWdodC82MDArdHJhbnNmb3JtRGVmYXVsdFN0cmluZytcIilcIjtcbi8vIFx0Ly8gY29uc29sZS5sb2coJ1Jlc2l6ZTonLGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcikuc3R5bGUudHJhbnNmb3JtKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImciLCJnbG9iYWxUaGlzIiwidGhpcyIsIkZ1bmN0aW9uIiwiZSIsIndpbmRvdyIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImRvY3VtZW50IiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxlbmd0aCIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJnYW1lTGV2ZWxzIiwiZXoiLCJoZCIsImluIiwiYXQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVlcnlTZWxlY3RvciIsIl9lbGVtZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9TdHJpbmciLCJtYXRjaCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJhZGQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSIsInVybFBhcmFtcyIsIlVSTCIsImhyZWYiLCJzZWFyY2giLCJwYXJzZWRVUkxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJwbGF5IiwiZ2V0IiwicGxheUxldmVsIiwicGxheUxldmVsU3RyaW5nIiwic2NvcmUiLCJwYXJzZUludCIsIm1heENvbWJvIiwicGVyRmVjdCIsImdvb2QiLCJiYWQiLCJtaXNzIiwiZWFybHkiLCJtb2RlIiwiYWNjdXJhY3kiLCJNYXRoIiwicm91bmQiLCJsYXRlIiwiZ3JhZGUiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkZWx0YVJLUyIsImRlbHRhRGF0YSIsInBsYXlSZXN1bHQiLCJzb25nSW5mbyIsIkxldmVsT3ZlciIsInJlcyIsImFycmF5QnVmZmVyIiwiYWN0eCIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsIm1vekF1ZGlvQ29udGV4dCIsIm1zQXVkaW9Db250ZXh0IiwiZGVjb2RlQXVkaW9EYXRhIiwiYnVmZmVyIiwic291cmNlIiwiY3JlYXRlQnVmZmVyU291cmNlIiwibG9vcCIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsInN0YXJ0IiwiYm9keSIsImVuY29kZVVSSSIsImlsbHVzdHJhdGlvbiIsImlubmVyVGV4dCIsInBhZFN0YXJ0IiwibmFtZSIsInRvVXBwZXJDYXNlIiwiZmxvb3IiLCJ0b0xvd2VyQ2FzZSIsInBvdyIsInRvRml4ZWQiLCJjYXRjaCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==