(()=>{"use strict";const e=[{type:"slide",title:"谱面延时(MS)",codename:"input-offset",range:[-500,500],defaultValue:0,offset:5},{type:"button",title:"根据声音调整偏移率",onClick(){location.href="./calibrate"}},{type:"slide",title:"按键缩放",codename:"select-scale-ratio",range:[1,5],defaultValue:3},{type:"slide",title:"背景亮度",codename:"select-global-alpha",range:[1,5],defaultValue:3},{type:"toggle",title:"开启多押辅助",codename:"highLight",defaultValue:!0},{type:"toggle",title:"开启打击音效",codename:"hitSong",defaultValue:!0},{type:"toggle",title:"游玩时自动全屏",codename:"autoFullscreen",defaultValue:!0},{type:"toggle",title:"开启FC/AP指示器",codename:"lineColor"},{type:"toggle",title:"使用游玩友好型Note",codename:"usePlayerFriendlyUI"},{type:"toggle",title:"开启低分辨率模式",codename:"enableLowRes"},{type:"slide",title:"界面宽高比",codename:"select-aspect-ratio",range:[1,8],defaultValue:8},{type:"button",title:"界面宽高比数值说明",onClick(){alert("1=>5:4     (1.25)\n2=>4:3     (1.333333)\n3=>10:7   (1.428571)\n4=>19:13 (1.461538)\n5=>8:5     (1.6)\n6=>5:3     (1.666667)\n7=>22:13 (1.692308)\n8=>16:9   (1.777778)")}},{type:"toggle",title:"开启HyperMode",codename:"hyperMode"},{type:"toggle",title:"启用旧版本打歌界面UI",codename:"useOldUI"},{type:"toggle",title:"背景模糊显示",codename:"imageBlur",defaultValue:!0},{type:"toggle",title:"启用AutoPlay",codename:"autoplay"},{type:"toggle",title:"开启触摸反馈",codename:"feedback"},{type:"toggle",title:"显示定位点",codename:"showPoint"},{type:"button",title:"修改玩家昵称",onClick(){const e=prompt("输入昵称","GUEST");localStorage.setItem("playerName",e)}},{type:"button",title:"关于我们",onClick(){location.href="../aboutUs/index.html"}},{type:"button",title:"清除全部数据",onClick(){window.localStorage.clear(),location.href="../index.html"}},{type:"button",title:"导出本地数据到剪贴板",onClick(){navigator.clipboard.writeText(JSON.stringify(localStorage)),this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const e=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(e)}),2e3)}},{type:"button",title:"从剪贴板导入数据",onClick(){navigator.clipboard.readText().then((e=>{try{const t=JSON.parse(e),n=Object.keys(t);for(const e in n)console.log(e,t[e]),localStorage.setItem(n[e],t[n[e]]);this.innerHTML='<img src="../assets/images/Tick.svg"> 成功';const a=setTimeout((()=>{this.innerHTML="导出本地数据到剪贴板",clearTimeout(a)}),2e3);location.reload()}catch(e){alert("导入失败，请检查剪贴板内容是否正确\n"+e)}}))}}];window.addEventListener("DOMContentLoaded",(()=>{window.localStorage.length,document.querySelector("#backBtn").addEventListener("click",(()=>{location.href="../chapterSelect/index.html"})),fetch("https://api.github.com/repos/HanHan233/PhiCommunity/commits?per_page=1").then((e=>e.json())).then((e=>{document.querySelector("#ver").innerText=e[0].sha.slice(0,7)}));try{document.querySelector("#device").innerText="Platform: "+navigator.userAgentData.platform+" ; isMobile:"+navigator.userAgentData.mobile}catch(e){document.querySelector("#device").innerText="User-Agent : "+navigator.userAgent.slice(navigator.userAgent.lastIndexOf(" "))}document.querySelector("#device").title=navigator.userAgent,e.forEach((e=>{let t;switch(e.type){case"slide":e.defaultValue=parseFloat(window.localStorage.getItem(e.codename))||e.defaultValue,t=function({title:e,codename:t,range:n,defaultValue:a=n[0],offset:o=1}){let l=a;const i=document.createElement("div");i.className="item";const c=document.createElement("div");c.className="title",c.dataset.name=e,c.dataset.value=l;const d=function({range:e,defaultValue:t=e[0],offset:n=1,onValueChange:a}){let o;const l=e[1]-e[0],i=document.createElement("div");i.className="slider";const c=document.createElement("div");c.className="slideBlock",i.appendChild(c),i.addEventListener("click",(e=>{e.offsetX>i.offsetWidth-35&&m(n),e.offsetX<35&&m(0-n)}));let d=!1;const s=t=>{u(Math.round(e[0]+(t.pageX-i.clientLeft-70)/(i.clientWidth-100)*l))};c.addEventListener("mousedown",(()=>{d=!0,window.addEventListener("mousemove",s)})),window.addEventListener("mouseup",(()=>{d&&(d=!1,window.removeEventListener("mousemove",s))}));const r=t=>{u(Math.round(e[0]+(t.targetTouches[0].pageX-i.clientLeft-70)/(i.clientWidth-100)*l))};return c.addEventListener("touchstart",(()=>{d=!0,window.addEventListener("touchmove",r)})),window.addEventListener("touchend",(()=>{d&&(d=!1,window.removeEventListener("touchmove",r))})),u(t),{element:i,set:u,add:m};function u(t){return t<e[0]&&(t=e[0]),t>e[1]&&(t=e[1]),c.style.marginLeft=(t-(e[0]+e[1])/2)/l*2*80+"%",a(t),o=t,o}function m(e){return console.log(e),u(o+e)}}({range:n,defaultValue:a,offset:o,onValueChange:function(e){c.dataset.value=e,window.localStorage.setItem(t,e),l=e}});return i.appendChild(c),i.appendChild(d.element),{element:i,getValue:()=>l}}(e);break;case"toggle":e.defaultValue="true"==window.localStorage.getItem(e.codename)||e.defaultValue,t=function({title:e,codename:t,defaultValue:n=!1}){let a=n;const o=document.createElement("div");o.className="item";const l=document.createElement("div");l.className="title",l.dataset.name=e;const i=document.createElement("div");return i.classList.add("toggle"),a&&i.classList.add("checked"),o.appendChild(l),o.appendChild(i),o.addEventListener("click",(()=>{a?(i.classList.remove("checked"),window.localStorage.setItem(t,!1)):(i.classList.add("checked"),window.localStorage.setItem(t,!0)),a=!a})),{element:o}}(e);break;case"button":t=function({title:e,onClick:t}){const n=document.createElement("div");n.className="item";const a=document.createElement("button");return a.innerText=e,a.className="button",n.appendChild(a),a.onclick=t,{element:n}}(e);break;default:throw new Error("Unknown setting: "+e)}document.getElementById("settingItems").appendChild(t.element)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9GLGFBQWFDLFFBQVFYLEdBQVUsSUFFdkMyRixHQUFhQSxLQUdQLENBQUVSLFFBQVN6QixHRndCVHFDLENBQVcxQyxHQUNsQixNQUNELElBQUssU0FDSkMsRUd2REksVUFBb0IsTUFBRXZELEVBQUssUUFBRUssSUFDbkMsTUFBTXNELEVBQVlwQixTQUFTcUIsY0FBYyxPQUN6Q0QsRUFBVUUsVUFBWSxPQUV0QixNQUFNb0MsRUFBUzFELFNBQVNxQixjQUFjLFVBUXRDLE9BUEFxQyxFQUFPcEQsVUFBWTdDLEVBQ25CaUcsRUFBT3BDLFVBQVksU0FFbkJGLEVBQVVTLFlBQVk2QixHQUV0QkEsRUFBT0MsUUFBVTdGLEVBRVYsQ0FBRStFLFFBQVN6QixHSDJDVHdDLENBQVc3QyxHQUNsQixNQUNELFFBQ0MsTUFBTSxJQUFJOEMsTUFBTSxvQkFBc0I5QyxHQUV2Q2YsU0FBUzhELGVBQWUsZ0JBQWdCakMsWUFBWWIsRUFBSzZCLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhpLWNvbW11bml0eS8uL3NyYy9zZXR0aW5ncy9zZXR0aW5nLmpzIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvLi9zcmMvc2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGhpLWNvbW11bml0eS8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3NsaWRlLmpzIiwid2VicGFjazovL3BoaS1jb21tdW5pdHkvLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy90b2dnbGUuanMiLCJ3ZWJwYWNrOi8vcGhpLWNvbW11bml0eS8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHt7XG4gKiBcdHRpdGxlOiBzdHJpbmcsXG4gKiBcdGNvZGVuYW1lOiBzdHJpbmdcbiAqIH19IEJhc2VTZXR0aW5nXG4gKlxuICogQHR5cGVkZWYgeyBCYXNlU2V0dGluZyAmIHtcbiAqICByYW5nZTogW251bWJlcixudW1iZXJdLFxuICogXHRkZWZhdWx0VmFsdWU/OiBudW1iZXIgPSByYW5nZVswXSxcbiAqIFx0b2Zmc2V0OiBudW1iZXIgPSAxLFxuICogfX0gU2xpZGVTZXR0aW5nXG4gKlxuICogIEB0eXBlZGVmIHsgQmFzZVNldHRpbmcgJiB7XG4gKiBcdGRlZmF1bHRWYWx1ZTpib29sZWFuID0gZmFsc2UsXG4gKiB9fSBUb2dnbGVTZXR0aW5nXG4gKlxuICogIEB0eXBlZGVmIHt7XG4gKiBcdHRpdGxlOiBzdHJpbmcsXG4gKiBcdG9uQ2xpY2s6ICh0aGlzOiBHbG9iYWxFdmVudEhhbmRsZXJzLCBldjogTW91c2VFdmVudCkgPT4gYW55XG4gKiB9fSBCdXR0b25TZXR0aW5nXG4gKlxuICovXG5cbi8qKlxuICogQHR5cGUge0FycmF5IDxcbiAqIChTbGlkZVNldHRpbmcgJiB7dHlwZTogJ3NsaWRlJ30pfFxuICogKFRvZ2dsZVNldHRpbmcgJiB7dHlwZTogJ3RvZ2dsZSd9fFxuICogKEJ1dHRvblNldHRpbmcgJiB7dHlwZTogJ2J1dHRvbid9KT5cbiAqIH1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0gW1xuXHR7XG5cdFx0dHlwZTogJ3NsaWRlJyxcblx0XHR0aXRsZTogJ+iwsemdouW7tuaXtihNUyknLFxuXHRcdGNvZGVuYW1lOiAnaW5wdXQtb2Zmc2V0Jyxcblx0XHRyYW5nZTogWy01MDAsIDUwMF0sXG5cdFx0ZGVmYXVsdFZhbHVlOiAwLFxuXHRcdG9mZnNldDogNSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn5qC55o2u5aOw6Z+z6LCD5pW05YGP56e7546HJyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcuL2NhbGlicmF0ZSc7XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdzbGlkZScsXG5cdFx0dGl0bGU6ICfmjInplK7nvKnmlL4nLFxuXHRcdGNvZGVuYW1lOiAnc2VsZWN0LXNjYWxlLXJhdGlvJyxcblx0XHRyYW5nZTogWzEsIDVdLFxuXHRcdGRlZmF1bHRWYWx1ZTogMyxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdzbGlkZScsXG5cdFx0dGl0bGU6ICfog4zmma/kuq7luqYnLFxuXHRcdGNvZGVuYW1lOiAnc2VsZWN0LWdsb2JhbC1hbHBoYScsXG5cdFx0cmFuZ2U6IFsxLCA1XSxcblx0XHRkZWZhdWx0VmFsdWU6IDMsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+W8gOWQr+WkmuaKvOi+heWKqScsXG5cdFx0Y29kZW5hbWU6ICdoaWdoTGlnaHQnLFxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5byA5ZCv5omT5Ye76Z+z5pWIJyxcblx0XHRjb2RlbmFtZTogJ2hpdFNvbmcnLFxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5ri4546p5pe26Ieq5Yqo5YWo5bGPJyxcblx0XHRjb2RlbmFtZTogJ2F1dG9GdWxsc2NyZWVuJyxcblx0XHRkZWZhdWx0VmFsdWU6IHRydWUsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+W8gOWQr0ZDL0FQ5oyH56S65ZmoJyxcblx0XHRjb2RlbmFtZTogJ2xpbmVDb2xvcicsXG5cdH0sXG5cdC8v5LiL6Z2i5bCx5piv5qih5ouf5Zmo5YW25LuW55qE5Yqf6IO95LqGXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+S9v+eUqOa4uOeOqeWPi+WlveWei05vdGUnLFxuXHRcdGNvZGVuYW1lOiAndXNlUGxheWVyRnJpZW5kbHlVSScsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+W8gOWQr+S9juWIhui+qOeOh+aooeW8jycsXG5cdFx0Y29kZW5hbWU6ICdlbmFibGVMb3dSZXMnLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3NsaWRlJyxcblx0XHR0aXRsZTogJ+eVjOmdouWuvemrmOavlCcsXG5cdFx0Y29kZW5hbWU6ICdzZWxlY3QtYXNwZWN0LXJhdGlvJyxcblx0XHRyYW5nZTogWzEsIDhdLFxuXHRcdGRlZmF1bHRWYWx1ZTogOCxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn55WM6Z2i5a696auY5q+U5pWw5YC86K+05piOJyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0YWxlcnQoXG5cdFx0XHRcdCcxPT41OjQgICAgICgxLjI1KVxcbjI9PjQ6MyAgICAgKDEuMzMzMzMzKVxcbjM9PjEwOjcgICAoMS40Mjg1NzEpXFxuND0+MTk6MTMgKDEuNDYxNTM4KVxcbjU9Pjg6NSAgICAgKDEuNilcXG42PT41OjMgICAgICgxLjY2NjY2NylcXG43PT4yMjoxMyAoMS42OTIzMDgpXFxuOD0+MTY6OSAgICgxLjc3Nzc3OCknXG5cdFx0XHQpO1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+W8gOWQr0h5cGVyTW9kZScsXG5cdFx0Y29kZW5hbWU6ICdoeXBlck1vZGUnLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICflkK/nlKjml6fniYjmnKzmiZPmrYznlYzpnaJVSScsXG5cdFx0Y29kZW5hbWU6ICd1c2VPbGRVSScsXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAndG9nZ2xlJyxcblx0XHR0aXRsZTogJ+iDjOaZr+aooeeziuaYvuekuicsXG5cdFx0Y29kZW5hbWU6ICdpbWFnZUJsdXInLFxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcblx0fSxcblx0Ly8ge1xuXHQvLyBcdHR5cGU6ICd0b2dnbGUnLFxuXHQvLyBcdHRpdGxlOiAn5pi+56S66L+H5rih5Yqo55S7Jyxcblx0Ly8gXHRjb2RlbmFtZTogJ3Nob3dUcmFuc2l0aW9uJyxcblx0Ly8gfSxcblx0e1xuXHRcdHR5cGU6ICd0b2dnbGUnLFxuXHRcdHRpdGxlOiAn5ZCv55SoQXV0b1BsYXknLFxuXHRcdGNvZGVuYW1lOiAnYXV0b3BsYXknLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICflvIDlkK/op6bmkbjlj43ppognLFxuXHRcdGNvZGVuYW1lOiAnZmVlZGJhY2snLFxuXHR9LFxuXHR7XG5cdFx0dHlwZTogJ3RvZ2dsZScsXG5cdFx0dGl0bGU6ICfmmL7npLrlrprkvY3ngrknLFxuXHRcdGNvZGVuYW1lOiAnc2hvd1BvaW50Jyxcblx0fSxcblx0Ly8ge1xuXHQvLyBcdHR5cGU6ICdidXR0b24nLFxuXHQvLyBcdHRpdGxlOiAn6KeC55yL5pWZ5a2mJyxcblx0Ly8gXHRvbkNsaWNrKCkge1xuXHQvLyBcdFx0bG9jYXRpb24uaHJlZiA9ICcuLi93aGlsZVBsYXlpbmcvaW5kZXguaHRtbD9wbGF5PWludHJvZHVjdGlvbiZsPWV6Jztcblx0Ly8gXHR9LFxuXHQvLyB9LFxuXHR7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dGl0bGU6ICfkv67mlLnnjqnlrrbmmLXnp7AnLFxuXHRcdG9uQ2xpY2soKSB7XG5cdFx0XHRjb25zdCBuYW1lID0gcHJvbXB0KCfovpPlhaXmmLXnp7AnLCAnR1VFU1QnKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwbGF5ZXJOYW1lJywgbmFtZSk7XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn5YWz5LqO5oiR5LusJyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcuLi9hYm91dFVzL2luZGV4Lmh0bWwnO1xuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR0aXRsZTogJ+a4hemZpOWFqOmDqOaVsOaNricsXG5cdFx0b25DbGljaygpIHtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnLi4vaW5kZXguaHRtbCc7XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn5a+85Ye65pys5Zyw5pWw5o2u5Yiw5Ymq6LS05p2/Jyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlKSk7XG5cdFx0XHR0aGlzLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWFnZXMvVGljay5zdmdcIj4g5oiQ5YqfJztcblx0XHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPSAn5a+85Ye65pys5Zyw5pWw5o2u5Yiw5Ymq6LS05p2/Jztcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0fSwgMjAwMCk7XG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHRpdGxlOiAn5LuO5Ymq6LS05p2/5a+85YWl5pWw5o2uJyxcblx0XHRvbkNsaWNrKCkge1xuXHRcdFx0bmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4oKGNsaXBUZXh0KSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgY2xpcFRleHRPYmogPSBKU09OLnBhcnNlKGNsaXBUZXh0KTtcblx0XHRcdFx0XHRjb25zdCBjbGlwVGV4dE9iaktleXMgPSBPYmplY3Qua2V5cyhjbGlwVGV4dE9iaik7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXlzIGluIGNsaXBUZXh0T2JqS2V5cykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coa2V5cywgY2xpcFRleHRPYmpba2V5c10pO1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXG5cdFx0XHRcdFx0XHRcdGNsaXBUZXh0T2JqS2V5c1trZXlzXSxcblx0XHRcdFx0XHRcdFx0Y2xpcFRleHRPYmpbY2xpcFRleHRPYmpLZXlzW2tleXNdXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbm5lckhUTUwgPVxuXHRcdFx0XHRcdFx0JzxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltYWdlcy9UaWNrLnN2Z1wiPiDmiJDlip8nO1xuXHRcdFx0XHRcdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaW5uZXJIVE1MID0gJ+WvvOWHuuacrOWcsOaVsOaNruWIsOWJqui0tOadvyc7XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdFx0fSwgMjAwMCk7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0YWxlcnQoJ+WvvOWFpeWksei0pe+8jOivt+ajgOafpeWJqui0tOadv+WGheWuueaYr+WQpuato+ehrlxcbicgKyBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdH0sXG5dO1xuIiwiaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmcuanMnO1xuaW1wb3J0IHsgU2xpZGVySXRlbSwgVG9nZ2xlSXRlbSwgQnV0dG9uSXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9cdOWFqOWxgOWIneWni+WMlum8oOagh+a7mui9ri/np7vliqjnq6/mu5HliqjlnZDmoIdcbi8vIHZhciB5Q29vcmQgPSAwLFxuLy8gXHRwcmV2aW91c1RvdWNoWUNvb3JkID0gMDtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRpZiAod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy4uL2NoYXB0ZXJTZWxlY3QvaW5kZXguaHRtbCc7XG5cdFx0XHQvLyBsb2NhdGlvbi5ocmVmPScuLi93aGlsZVBsYXlpbmcvaW5kZXguaHRtbD9wbGF5PWludHJvZHVjdGlvbiZsPWV6Jztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcuLi9jaGFwdGVyU2VsZWN0L2luZGV4Lmh0bWwnO1xuXHRcdH0pO1xuXHR9XG5cdGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL0hhbkhhbjIzMy9QaGlDb21tdW5pdHkvY29tbWl0cz9wZXJfcGFnZT0xJylcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZlcicpLmlubmVyVGV4dCA9IGRhdGFbMF0uc2hhLnNsaWNlKFxuXHRcdFx0XHQwLFxuXHRcdFx0XHQ3XG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdHRyeSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldmljZScpLmlubmVyVGV4dCA9XG5cdFx0XHQnUGxhdGZvcm06ICcgK1xuXHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0gK1xuXHRcdFx0JyA7IGlzTW9iaWxlOicgK1xuXHRcdFx0bmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXZpY2UnKS5pbm5lclRleHQgPVxuXHRcdFx0J1VzZXItQWdlbnQgOiAnICtcblx0XHRcdG5hdmlnYXRvci51c2VyQWdlbnQuc2xpY2UobmF2aWdhdG9yLnVzZXJBZ2VudC5sYXN0SW5kZXhPZignICcpKTtcblx0fVxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV2aWNlJykudGl0bGUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuXHQvLyBsb2FkU2V0dGluZ3MoKTtcblx0Ly/liJvlu7rorr7nva7mnaHnm65cblx0c2V0dGluZ3MuZm9yRWFjaCgoc2V0dGluZykgPT4ge1xuXHRcdGxldCBpdGVtO1xuXHRcdHN3aXRjaCAoc2V0dGluZy50eXBlKSB7XG5cdFx0Y2FzZSAnc2xpZGUnOlxuXHRcdFx0c2V0dGluZy5kZWZhdWx0VmFsdWUgPVxuXHRcdFx0XHRcdHBhcnNlRmxvYXQod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmcuY29kZW5hbWUpKSB8fFxuXHRcdFx0XHRcdHNldHRpbmcuZGVmYXVsdFZhbHVlO1xuXHRcdFx0aXRlbSA9IFNsaWRlckl0ZW0oc2V0dGluZyk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICd0b2dnbGUnOlxuXHRcdFx0c2V0dGluZy5kZWZhdWx0VmFsdWUgPVxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nLmNvZGVuYW1lKSA9PSAndHJ1ZSdcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBmYWxzZSB8fCBzZXR0aW5nLmRlZmF1bHRWYWx1ZTtcblx0XHRcdGl0ZW0gPSBUb2dnbGVJdGVtKHNldHRpbmcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdGl0ZW0gPSBCdXR0b25JdGVtKHNldHRpbmcpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBzZXR0aW5nOiAnICsgc2V0dGluZyk7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nSXRlbXMnKS5hcHBlbmRDaGlsZChpdGVtLmVsZW1lbnQpO1xuXHR9KTtcbn0pO1xuIiwiY29uc3QgbWFyZ2luUmFuZ2UgPSA4MDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9zZXR0aW5nJykuU2xpZGVTZXR0aW5nfSBvcHRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNsaWRlckl0ZW0oe1xuXHR0aXRsZSxcblx0Y29kZW5hbWUsXG5cdHJhbmdlLFxuXHRkZWZhdWx0VmFsdWUgPSByYW5nZVswXSxcblx0b2Zmc2V0ID0gMSxcbn0pIHtcblx0bGV0IGN1cnJlbnRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdpdGVtJztcblxuXHRjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0aXRsZSc7XG5cdHRpdGxlRWxlbWVudC5kYXRhc2V0WyduYW1lJ10gPSB0aXRsZTtcblx0dGl0bGVFbGVtZW50LmRhdGFzZXRbJ3ZhbHVlJ10gPSBjdXJyZW50VmFsdWU7XG5cblx0Y29uc3Qgc2xpZGVyID0gU2xpZGVyKHsgcmFuZ2UsIGRlZmF1bHRWYWx1ZSwgb2Zmc2V0LCBvblZhbHVlQ2hhbmdlIH0pO1xuXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVyLmVsZW1lbnQpO1xuXG5cdHJldHVybiB7IGVsZW1lbnQ6IGNvbnRhaW5lciwgZ2V0VmFsdWU6ICgpID0+IGN1cnJlbnRWYWx1ZSB9O1xuXG5cdGZ1bmN0aW9uIG9uVmFsdWVDaGFuZ2UodmFsdWUpIHtcblx0XHR0aXRsZUVsZW1lbnQuZGF0YXNldFsndmFsdWUnXSA9IHZhbHVlO1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2RlbmFtZSwgdmFsdWUpO1xuXHRcdGN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHt7XG4gKiAgcmFuZ2U6IFtudW1iZXIsbnVtYmVyXSxcbiAqIFx0ZGVmYXVsdFZhbHVlPzogbnVtYmVyID0gcmFuZ2VbMF0sXG4gKiBcdG9mZnNldDogbnVtYmVyID0gMSxcbiAqICBvblZhbHVlQ2hhbmdlOihudW1iZXIpID0+IHZvaWRcbiAqIH19IG9wdGlvblxuICovXG5mdW5jdGlvbiBTbGlkZXIoeyByYW5nZSwgZGVmYXVsdFZhbHVlID0gcmFuZ2VbMF0sIG9mZnNldCA9IDEsIG9uVmFsdWVDaGFuZ2UgfSkge1xuXHRsZXQgY3VycmVudFZhbHVlO1xuXHRjb25zdCB0b3RhbCA9IHJhbmdlWzFdIC0gcmFuZ2VbMF07XG5cblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2xpZGVyJztcblxuXHRjb25zdCBzbGlkZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHNsaWRlQmxvY2suY2xhc3NOYW1lID0gJ3NsaWRlQmxvY2snO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVCbG9jayk7XG5cblx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRpZiAoZS5vZmZzZXRYID4gY29udGFpbmVyLm9mZnNldFdpZHRoIC0gMzUpIHtcblx0XHRcdGFkZChvZmZzZXQpO1xuXHRcdH1cblx0XHRpZiAoZS5vZmZzZXRYIDwgMzUpIHtcblx0XHRcdGFkZCgwIC0gb2Zmc2V0KTtcblx0XHR9XG5cdH0pO1xuXG5cdC8v5ouW5puz5rua5Yqo5p2hXG5cdGxldCBpc0RyYWdTdGFydCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiDnlLXohJHnq69cblx0ICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlXG5cdCAqL1xuXHRjb25zdCBvbk1vdXNlRHJhZyA9IChlKSA9PiB7XG5cdFx0c2V0KFxuXHRcdFx0TWF0aC5yb3VuZChcblx0XHRcdFx0cmFuZ2VbMF0gK1xuXHRcdFx0XHRcdCgoZS5wYWdlWCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0IC0gNzApIC9cblx0XHRcdFx0XHRcdChjb250YWluZXIuY2xpZW50V2lkdGggLSAxMDApKSAqXG5cdFx0XHRcdFx0XHR0b3RhbFxuXHRcdFx0KVxuXHRcdCk7XG5cdH07XG5cdHNsaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuXHRcdGlzRHJhZ1N0YXJ0ID0gdHJ1ZTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0aWYgKCFpc0RyYWdTdGFydCkgcmV0dXJuO1xuXHRcdGlzRHJhZ1N0YXJ0ID0gZmFsc2U7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqIOenu+WKqOerr1xuXHQgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGVcblx0ICovXG5cdGNvbnN0IG9uVG91Y2hEcmFnID0gKGUpID0+IHtcblx0XHRzZXQoXG5cdFx0XHRNYXRoLnJvdW5kKFxuXHRcdFx0XHRyYW5nZVswXSArXG5cdFx0XHRcdFx0KChlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggLSBjb250YWluZXIuY2xpZW50TGVmdCAtIDcwKSAvXG5cdFx0XHRcdFx0XHQoY29udGFpbmVyLmNsaWVudFdpZHRoIC0gMTAwKSkgKlxuXHRcdFx0XHRcdFx0dG90YWxcblx0XHRcdClcblx0XHQpO1xuXHR9O1xuXG5cdHNsaWRlQmxvY2suYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcblx0XHRpc0RyYWdTdGFydCA9IHRydWU7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hEcmFnKTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuXHRcdGlmICghaXNEcmFnU3RhcnQpIHJldHVybjtcblx0XHRpc0RyYWdTdGFydCA9IGZhbHNlO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoRHJhZyk7XG5cdH0pO1xuXG5cdHNldChkZWZhdWx0VmFsdWUpO1xuXG5cdHJldHVybiB7IGVsZW1lbnQ6IGNvbnRhaW5lciwgc2V0LCBhZGQgfTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXQobmV3VmFsdWUpIHtcblx0XHRpZiAobmV3VmFsdWUgPCByYW5nZVswXSkgbmV3VmFsdWUgPSByYW5nZVswXTtcblx0XHRpZiAobmV3VmFsdWUgPiByYW5nZVsxXSkgbmV3VmFsdWUgPSByYW5nZVsxXTtcblxuXHRcdHNsaWRlQmxvY2suc3R5bGUubWFyZ2luTGVmdCA9XG5cdFx0XHQoKG5ld1ZhbHVlIC0gKHJhbmdlWzBdICsgcmFuZ2VbMV0pIC8gMikgLyB0b3RhbCkgKiAyICogbWFyZ2luUmFuZ2UgK1xuXHRcdFx0JyUnO1xuXG5cdFx0b25WYWx1ZUNoYW5nZShuZXdWYWx1ZSk7XG5cblx0XHRjdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRyZXR1cm4gY3VycmVudFZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRcblx0ICovXG5cdGZ1bmN0aW9uIGFkZChvZmZzZXQpIHtcblx0XHRjb25zb2xlLmxvZyhvZmZzZXQpO1xuXHRcdHJldHVybiBzZXQoY3VycmVudFZhbHVlICsgb2Zmc2V0KTtcblx0fVxufVxuIiwiLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9zZXR0aW5nJykuVG9nZ2xlU2V0dGluZ30gb3B0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGVJdGVtKHsgdGl0bGUsIGNvZGVuYW1lLCBkZWZhdWx0VmFsdWUgPSBmYWxzZSB9KSB7XG5cdGxldCBpc0NoZWNrZWQgPSBkZWZhdWx0VmFsdWU7XG5cblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbSc7XG5cblx0Y29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSAndGl0bGUnO1xuXHR0aXRsZUVsZW1lbnQuZGF0YXNldFsnbmFtZSddID0gdGl0bGU7XG5cblx0Y29uc3QgdG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuXHRpZiAoaXNDaGVja2VkKSB0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUVsZW1lbnQpO1xuXG5cdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRpZiAoaXNDaGVja2VkKSB7XG5cdFx0XHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2RlbmFtZSwgZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2dnbGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0XHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShjb2RlbmFtZSwgdHJ1ZSk7XG5cdFx0fVxuXHRcdGlzQ2hlY2tlZCA9ICFpc0NoZWNrZWQ7XG5cdH0pO1xuXG5cdHJldHVybiB7IGVsZW1lbnQ6IGNvbnRhaW5lciB9O1xufVxuIiwiLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vc2V0dGluZycpLkJ1dHRvblNldHRpbmd9IG9wdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uSXRlbSh7IHRpdGxlLCBvbkNsaWNrIH0pIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaXRlbSc7XG5cblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGJ1dHRvbi5pbm5lclRleHQgPSB0aXRsZTtcblx0YnV0dG9uLmNsYXNzTmFtZSA9ICdidXR0b24nO1xuXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdGJ1dHRvbi5vbmNsaWNrID0gb25DbGljaztcblxuXHRyZXR1cm4geyBlbGVtZW50OiBjb250YWluZXIgfTtcbn1cbiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsInR5cGUiLCJ0aXRsZSIsImNvZGVuYW1lIiwicmFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJvZmZzZXQiLCJvbkNsaWNrIiwibG9jYXRpb24iLCJocmVmIiwiYWxlcnQiLCJuYW1lIiwicHJvbXB0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsImNsZWFyIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoaXMiLCJpbm5lckhUTUwiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlYWRUZXh0IiwidGhlbiIsImNsaXBUZXh0IiwiY2xpcFRleHRPYmoiLCJwYXJzZSIsImNsaXBUZXh0T2JqS2V5cyIsIk9iamVjdCIsImtleXMiLCJjb25zb2xlIiwibG9nIiwicmVsb2FkIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiaW5uZXJUZXh0Iiwic2hhIiwic2xpY2UiLCJ1c2VyQWdlbnREYXRhIiwicGxhdGZvcm0iLCJtb2JpbGUiLCJ1c2VyQWdlbnQiLCJsYXN0SW5kZXhPZiIsImZvckVhY2giLCJzZXR0aW5nIiwiaXRlbSIsInBhcnNlRmxvYXQiLCJnZXRJdGVtIiwiY3VycmVudFZhbHVlIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlRWxlbWVudCIsImRhdGFzZXQiLCJzbGlkZXIiLCJvblZhbHVlQ2hhbmdlIiwidG90YWwiLCJzbGlkZUJsb2NrIiwiYXBwZW5kQ2hpbGQiLCJlIiwib2Zmc2V0WCIsIm9mZnNldFdpZHRoIiwiYWRkIiwiaXNEcmFnU3RhcnQiLCJvbk1vdXNlRHJhZyIsInNldCIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwiY2xpZW50TGVmdCIsImNsaWVudFdpZHRoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hEcmFnIiwidGFyZ2V0VG91Y2hlcyIsImVsZW1lbnQiLCJuZXdWYWx1ZSIsInN0eWxlIiwibWFyZ2luTGVmdCIsIlNsaWRlciIsInZhbHVlIiwiZ2V0VmFsdWUiLCJTbGlkZXJJdGVtIiwiaXNDaGVja2VkIiwidG9nZ2xlRWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIlRvZ2dsZUl0ZW0iLCJidXR0b24iLCJvbmNsaWNrIiwiQnV0dG9uSXRlbSIsIkVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9