kiwi.plugin('starryPlugin', function(kiwi, log) {
  let starColor = kiwi.state.setting('starry.color');
  let c = document.createElement("canvas");
  let w = i = j = p = X = Y = Z = t = dataURL = joined = 0, S = Math.sin, C = Math.cos;
  c.width = 350;
  c.height = 310;
  let x = c.getContext("2d");
  function Draw(){
    x.globalAlpha = .3;
    x.fillStyle = "#000"
    x.fillRect(0,0,c.width,c.height);
    x.strokeStyle = starColor;
    for(w=c.width/2,j=500;j--;x.beginPath(x.stroke())){
      x.globalAlpha = .2 - Math.pow(Z,6) * .2;
      for(i=6;i--;x.lineTo(w+(100-j%200+S(p=2.51*i+t))/Z,c.height/2+(99-j*j*6%199+C(p))/Z));
      Z=1-(j*j/w+t/9)%1
    }
    redrawDivs();
    t += 1/60;
    dataURL = c.toDataURL();
    requestAnimationFrame(Draw);
  }
  Draw();

  kiwi.on('irc.raw', function(command, event){
    if(command === "JOIN"){
      joined = true;
    }
  });

  function paint(div){
    div.style.background = 'url('+dataURL+') 0% 50%';
    div.style.backgroundSize = '100% 100%';
  }
  
  function redrawDivs(){
    let divs=document.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
      if(joined){
        if(divs[i].className === "kiwi-messagelist") paint(divs[i]);
      }else{
        if(divs[i].className.indexOf("kiwi-startup-common-section kiwi-startup-common-section-connection") !== -1 ||
           divs[i].className.indexOf("kiwi-startup-common-section kiwi-startup-common-section-info") !== -1) paint(divs[i]);
      }
    }
  }
});