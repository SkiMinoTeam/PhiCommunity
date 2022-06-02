(()=>{"use strict";const e=[{type:"slide",title:"谱面延时(MS)",codename:"input-offset",range:[-500,500],defaultValue:0,offset:5},{type:"button",title:"根据声音调整偏移率",onClick(){location.href="./calibrate/index.html"}},{type:"slide",title:"按键缩放",codename:"select-scale-ratio",range:[1,5],defaultValue:3},{type:"slide",title:"背景亮度",codename:"select-global-alpha",range:[1,5],defaultValue:3},{type:"toggle",title:"开启多押辅助",codename:"highLight",defaultValue:!0},{type:"toggle",title:"开启打击音效",codename:"hitSong",defaultValue:!0},{type:"toggle",title:"游玩时自动全屏",codename:"autoFullscreen",defaultValue:!0},{type:"toggle",title:"开启FC/AP指示器",codename:"lineColor"},{type:"toggle",title:"开启低分辨率模式",codename:"enableLowRes"},{type:"slide",title:"界面宽高比",codename:"select-aspect-ratio",range:[1,8],defaultValue:8},{type:"button",title:"界面宽高比数值说明",onClick(){alert("1=>5:4     (1.25)\n2=>4:3     (1.333333)\n3=>10:7   (1.428571)\n4=>19:13 (1.461538)\n5=>8:5     (1.6)\n6=>5:3     (1.666667)\n7=>22:13 (1.692308)\n8=>16:9   (1.777778)")}},{type:"toggle",title:"开启HyperMode(严格判定)",codename:"hyperMode"},{type:"toggle",title:"启用旧版本打歌界面UI",codename:"useOldUI"},{type:"toggle",title:"背景模糊显示",codename:"imageBlur",defaultValue:!0},{type:"slide",title:"谱面倍速(10为1倍)",codename:"chart-speedchange",range:[7,15],defaultValue:10,offset:1},{type:"toggle",title:"启用AutoPlay",codename:"autoplay"},{type:"toggle",title:"游玩时使用背景动画作为背景",codename:"useBGABG"},{type:"toggle",title:"开启触摸反馈",codename:"feedback"},{type:"toggle",title:"显示定位点",codename:"showPoint"},{type:"button",title:"观看教学",onClick(){location.href="../whilePlaying/index.html?play=tutorial&l=ez"}},{type:"button",title:"修改玩家昵称",onClick(){const e=prompt("输入昵称",localStorage.getItem("playerName")||"GUEST");""!=e&&null!=e&&null!=e?localStorage.setItem("playerName",e):console.error("Failed to set player name : Empty input")}},{type:"button",title:"修改玩家头像",onClick(){document.getElementById("fileBtn").click()}},{type:"button",title:"关于我们",onClick(){location.href="../aboutUs/index.html"}},{type:"button",title:"清除全部数据",onClick(){window.localStorage.clear(),location.href="../index.html"}},{type:"button",title:"导出本地数据到剪贴板",onClick(){navigator.clipboard.writeText(JSON.stringify(localStorage)),this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const e=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(e)}),2e3)}},{type:"button",title:"从剪贴板导入数据",onClick(){navigator.clipboard.readText().then((e=>{try{const t=JSON.parse(e),n=Object.keys(t);for(const e in n)console.log(e,t[e]),localStorage.setItem(n[e],t[n[e]]);this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const l=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(l)}),2e3);location.reload()}catch(e){alert("导入失败，请检查剪贴板内容是否正确\n"+e)}}))}}];window.addEventListener("DOMContentLoaded",(()=>{0==window.localStorage.length?document.querySelector("#backBtn").addEventListener("click",(()=>{location.href="../whilePlaying/index.html?play=tutorial&l=ez"})):document.querySelector("#backBtn").addEventListener("click",(()=>{location.href="../chapterSelect/index.html"})),document.querySelector("#ver").innerText="637c4cf";try{document.querySelector("#device").innerText="Platform: "+navigator.userAgentData.platform+" ; isMobile:"+navigator.userAgentData.mobile}catch(e){document.querySelector("#device").innerText="User-Agent : "+navigator.userAgent.slice(navigator.userAgent.lastIndexOf(" "))}document.querySelector("#device").title=navigator.userAgent,e.forEach((e=>{let t;switch(e.type){case"slide":e.defaultValue=Number(window.localStorage.getItem(e.codename))||e.defaultValue,t=function({title:e,codename:t,range:n,defaultValue:l=n[0],offset:a=1}){let o=l;const i=document.createElement("div");i.className="item";const c=document.createElement("div");c.className="title",c.dataset.name=e,c.dataset.value=o;const d=function({range:e,defaultValue:t=e[0],offset:n=1,onValueChange:l}){let a;const o=e[1]-e[0],i=document.createElement("div");i.className="slider";const c=document.createElement("div");c.className="slideBlock",i.appendChild(c),i.addEventListener("click",(e=>{e.offsetX>i.offsetWidth-35&&m(n),e.offsetX<35&&m(0-n)}));let d=!1;const r=t=>{u(Math.round(e[0]+(t.pageX-i.clientLeft-70)/(i.clientWidth-100)*o))};c.addEventListener("mousedown",(()=>{d=!0,window.addEventListener("mousemove",r)})),window.addEventListener("mouseup",(()=>{d&&(d=!1,window.removeEventListener("mousemove",r))}));const s=t=>{u(Math.round(e[0]+(t.targetTouches[0].pageX-i.clientLeft-70)/(i.clientWidth-100)*o))};return c.addEventListener("touchstart",(()=>{d=!0,window.addEventListener("touchmove",s)})),window.addEventListener("touchend",(()=>{d&&(d=!1,window.removeEventListener("touchmove",s))})),u(t),{element:i,set:u,add:m};function u(t){return t<e[0]&&(t=e[0]),t>e[1]&&(t=e[1]),c.style.marginLeft=(t-(e[0]+e[1])/2)/o*2*80+"%",l(t),a=t,a}function m(e){return console.log(e),u(a+e)}}({range:n,defaultValue:l,offset:a,onValueChange:function(e){c.dataset.value=e,window.localStorage.setItem(t,e),o=e}});return i.appendChild(c),i.appendChild(d.element),{element:i,getValue:()=>o}}(e);break;case"toggle":null!==window.localStorage.getItem(e.codename)&&(e.defaultValue="true"==window.localStorage.getItem(e.codename)),t=function({title:e,codename:t,defaultValue:n=!1}){let l=n;const a=document.createElement("div");a.className="item";const o=document.createElement("div");o.className="title",o.dataset.name=e;const i=document.createElement("div");return i.classList.add("toggle"),l&&i.classList.add("checked"),a.appendChild(o),a.appendChild(i),a.addEventListener("click",(()=>{l?(i.classList.remove("checked"),window.localStorage.setItem(t,!1)):(i.classList.add("checked"),window.localStorage.setItem(t,!0)),l=!l})),{element:a}}(e);break;case"button":t=function({title:e,onClick:t}){const n=document.createElement("div");n.className="item";const l=document.createElement("button");if(l.innerText=e,l.className="button",n.appendChild(l),"修改玩家头像"==e){const e=document.createElement("input");e.type="file",e.accept=".png,.jpg,.jpeg,.webp",e.id="fileBtn",e.style="display:none",e.addEventListener("change",(function(e){let t=e.path[0].files[0];if(!/(.png|.jpg|.jpeg|.webp)$/.test(t.name))return void alert("不支持的文件格式，支持的格式为：png, jpg, jpeg, webp");if(t.size>4194304)return void alert("头像过大，大小限制为：4MB");let n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){const e=n.result;""!=e&&null!=e&&null!=e?localStorage.setItem("playerAvatar",e):console.error("Failed to set player avatar : Empty input")},e.stopPropagation(),e.preventDefault()}),!1),n.appendChild(e)}return l.onclick=t,{element:n}}(e);break;default:throw new Error("Unknown setting: "+e)}document.getElementById("settingItems").appendChild(t.element)}))}))})();