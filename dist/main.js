!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,o){kiwi.plugin("starryPlugin",function(e,o){let n=document.createElement("canvas");n.style.position="absolute",n.style.top=0,n.style.left=0,n.style.width="100%",n.style.height="100vh",n.style.zIndex=-100,document.body.appendChild(n);let s=i=j=p=X=Y=Z=t=dataURL=joined=0,r=Math.sin,l=Math.cos,a=0;n.width=700,n.height=620;let c=n.getContext("2d");!function o(){for(void 0!==document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-connection")[0]&&(document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-connection")[0].style.background="rgba(0,0,0,0)",document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-info")[0].style.background="rgba(0,0,0,0)",document.getElementsByClassName("kiwi-wrap")[0].style.background="rgba(0,0,0,0)"),void 0!==document.getElementsByClassName("kiwi-sidebar")[0]&&(document.getElementsByClassName("kiwi-statebrowser-scrollarea")[0].style.background="rgba(0,0,0,.25)",document.getElementsByClassName("kiwi-statebrowser")[0].style.background="rgba(0,0,0,0)",document.getElementsByClassName("kiwi-sidebar")[0].style.background="rgba(0,0,0,0)",document.getElementsByClassName("kiwi-workspace-background")[0].style.background="rgba(0,0,0,0)",document.getElementsByClassName("kiwi-header")[0].style.background="rgba(0,0,0,0)"),c.globalAlpha=.3,c.fillStyle="#000",c.fillRect(0,0,n.width,n.height),c.fillStyle=c.strokeStyle="undefined"!=typeof starColor?starColor:e.state.setting("starry.color"),s=n.width/2,j=1e3;j--;c.beginPath(c.fill())){for(c.globalAlpha=.5-.5*Math.pow(Z,6),i=6;i--;c.lineTo(s+(200-j*j%400+r(p=2.51*i+t/2.5+j))/Z,n.height/2+(199-j*j*6%399+l(p))/Z));Z=1-(j*j/s+t/9)%1}t+=1/60*("undefined"!=typeof starSpeed?starSpeed.value/10-5:1),requestAnimationFrame(o)}(),e.on("irc.raw",function(t,o){if("JOIN"===t&&!joined){joined=!0,(a=document.createElement("div")).className="starControlsDiv",a.style.position="absolute",a.style.right="40px",a.style.bottom="80px",a.style.background=e.state.setting("starry.color"),a.style.padding="10px",a.style.border="1px solid #aaa",a.style.borderRadius="6px",a.style.width="200px",a.style.height="200px",a.style.display="none",a.style.zIndex="100",a.innerHTML='<button onclick=\'document.getElementsByClassName("starControlsDiv")[0].style.display = "none";document.getElementById("picker").jscolor.hide();\' style=\'position:absolute;right:5px;margin-top:-5px;border-radius:5px;background:#f88;\'>X</button>',a.innerHTML+='<div class="color"><input value="'+e.state.setting("starry.color")+"\" class=\"jscolor {width:169, padding:0, shadow:false, borderWidth:0, backgroundColor:'transparent', insetColor:'#fff', onFineChange:'setColor(this)'}\" id=\"picker\"></div>",a.innerHTML+='<div style="margin-top:110px">Star Speed:<input type="range" id="starSpeed" value="55"></div>',document.body.appendChild(a);const t=document.createElement("i");t.className="fa fa-star",e.addUi("input",t),setColor=document.createElement("script"),setColor.innerHTML='function setColor(picker){starColor=picker.toHEXString();document.getElementsByClassName("starControlsDiv")[0].style.background = starColor}',document.head.appendChild(setColor),starColorPicker=document.createElement("script"),starColorPicker.src="https://color-mixer.tk/jscolor.js",document.head.appendChild(starColorPicker),window.addEventListener("mouseup",function(){"block"===a.style.display&&document.getElementById("picker").jscolor.show()}),window.addEventListener("mousedown",function(){"block"===a.style.display&&document.getElementById("picker").jscolor.show()}),t.onclick=function(e){e.preventDefault(),starClick=!0,"block"===a.style.display?a.style.display="none":(a.style.display="block",document.getElementById("picker").jscolor.show())}}})})}]);
//# sourceMappingURL=main.js.map