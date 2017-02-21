function setup() {
    createCanvas(640,480);
    background('grey');
    
    
    
    textFont("cambria");
    
    //txts is text size
    var txts = 40;
    
    //nxtl is Next Line
    var nxtl = 1;
    
    var x = 320;
    var y = 150;
    var name = "Isaiah Serrano";
    
    
    textSize(txts);
    textAlign(CENTER);
    
    stroke('green');
    strokeWeight(5);
    line(x-60,y+100,x+60,y+170);
    line(x-60,y+170,x+80,y+100);
    
   
    

    
    strokeWeight(0);
     text(name,x,y + txts*nxtl);
        nxtl++;
    
    fill('white');
    text("Family",x/2,y+150, txts*nxtl);
    nxtl++;
    
      text(" Games",x+60,y+100, txts*nxtl);
    nxtl++;
    y-=60
    
      text("God",x,y + txts*nxtl);
    nxtl++;
    y+=60;
    
      text("Food",x,y + txts*nxtl);
    
    
    
    
}
    