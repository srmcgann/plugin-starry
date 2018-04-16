kiwi.plugin('starryPlugin', function(kiwi, log) {
  let c = document.createElement("canvas");
  c.style.position = "absolute";
  c.style.top = 0;
  c.style.left = 0;
  c.style.width = "100%";
  c.style.height = "100vh";
  //.kiwi-workspace-background
  c.style.zIndex = -100;
  document.body.appendChild(c);
  let w = i = j = p = X = Y = Z = t = dataURL = joined = 0, S = Math.sin, C = Math.cos;
  let starControlsDiv = 0;
  c.width = 350*2;
  c.height = 310*2;
  let x = c.getContext("2d");
  function Draw(){
    if(typeof document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-connection")[0] !== "undefined"){
      document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-connection")[0].style.background = "rgba(0,0,0,0)";
      document.getElementsByClassName("kiwi-startup-common-section kiwi-startup-common-section-info")[0].style.background = "rgba(0,0,0,0)";
      document.getElementsByClassName("kiwi-wrap")[0].style.background = "rgba(0,0,0,0)";
    }
    if(typeof document.getElementsByClassName("kiwi-sidebar")[0] !== "undefined"){
      document.getElementsByClassName("kiwi-statebrowser-scrollarea")[0].style.background = "rgba(0,0,0,.25)";
      document.getElementsByClassName("kiwi-statebrowser")[0].style.background = "rgba(0,0,0,0)";
      document.getElementsByClassName("kiwi-sidebar")[0].style.background = "rgba(0,0,0,0)";
      document.getElementsByClassName("kiwi-workspace-background")[0].style.background = "rgba(0,0,0,0)";
      document.getElementsByClassName("kiwi-header")[0].style.background = "rgba(0,0,0,0)";
    }
    x.globalAlpha = .3;
    x.fillStyle = "#000";
    x.fillRect(0,0,c.width,c.height);
    x.fillStyle = x.strokeStyle = typeof starColor !== "undefined" ? starColor : kiwi.state.setting('starry.color');
    for(w=c.width/2,j=1000;j--;x.beginPath(x.fill())){
      x.globalAlpha = .5 - Math.pow(Z,6) * .5;
      for(i=6;i--;x.lineTo(w+(200-j*j%400+S(p=2.51*i+t/2.5+j))/Z,c.height/2+(199-j*j*6%399+C(p))/Z));
      Z=1-(j*j/w+t/9)%1
    }
    //redrawDivs();
    t += 1/60 * (typeof starSpeed !== "undefined" ? starSpeed.value / 10 - 5: 1);
    //dataURL = c.toDataURL();
    requestAnimationFrame(Draw);
  }
  Draw();

  if(!joined){
    joined = true;
    starControlsDiv = document.createElement("div");
    starControlsDiv.className = "starControlsDiv";
    starControlsDiv.style.position = "absolute";
    starControlsDiv.style.right = "40px";
    starControlsDiv.style.bottom = "80px";
    starControlsDiv.style.background = kiwi.state.setting('starry.color');
    starControlsDiv.style.padding = "10px";
    starControlsDiv.style.border = "1px solid #aaa";
    starControlsDiv.style.borderRadius = "6px";
    starControlsDiv.style.width = "200px";
    starControlsDiv.style.height = "200px";
    starControlsDiv.style.display = "none";
    starControlsDiv.style.zIndex = "100";
    starControlsDiv.innerHTML = "<button onclick='document.getElementsByClassName(\"starControlsDiv\")[0].style.display = \"none\";document.getElementById(\"picker\").jscolor.hide();' style='position:absolute;right:5px;margin-top:-5px;border-radius:5px;background:#f88;'>X</button>";
    starControlsDiv.innerHTML += `<div class="color"><input value="`+kiwi.state.setting('starry.color')+`" class="jscolor {width:169, padding:0, shadow:false, borderWidth:0, backgroundColor:'transparent', insetColor:'#fff', onFineChange:'setColor(this)'}" id="picker"></div>`;
    starControlsDiv.innerHTML += `<div style="margin-top:110px">Star Speed:<input type="range" id="starSpeed" value="55"></div>`;
    document.body.appendChild(starControlsDiv);
    const starTool = document.createElement('i');
    starTool.className = 'fa fa-star';
    kiwi.addUi('input', starTool);
    setColor = document.createElement("script");
    setColor.innerHTML=`function setColor(picker){starColor=picker.toHEXString();document.getElementsByClassName("starControlsDiv")[0].style.background = starColor}`;
    document.head.appendChild(setColor);
    starColorPicker = document.createElement("script");
    starColorPicker.src = "https://color-mixer.tk/jscolor.js";
    document.head.appendChild(starColorPicker);
    window.addEventListener("mouseup", function(){if(starControlsDiv.style.display === "block")document.getElementById('picker').jscolor.show()});
    window.addEventListener("mousedown", function(){if(starControlsDiv.style.display === "block")document.getElementById('picker').jscolor.show()});
    starTool.onclick = function(e){
      e.preventDefault();
      starClick = true;
      if(starControlsDiv.style.display === "block"){
        starControlsDiv.style.display = "none";
        document.getElementById('picker').jscolor.hide()
      }else{
        starControlsDiv.style.display = "block";
        document.getElementById('picker').jscolor.show();
      }
    }
  }
});
