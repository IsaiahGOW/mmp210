function setup() {
    createCanvas(640,480);
}

function draw() {
    background(220);
    
    
    var wd = width/3;
    var ht = height/2;
    
    for (var x = wd/3; x <= width; x+=wd) {
        for (var y = ht/4; y<= height; y+=ht) {
            
            
    fill("Maroon");
        
    rect(x,y,wd/2,ht/2);
            
    fill("white");
    rect(x,y,wd/4,ht/4);
    
    fill("blue");
    rect(x+wd/4,y,wd/4,ht/4);
            
    fill("green");
    ellipse(x+wd/8,y+ht/2.5,55);
            
        
    
    }
        }
}
//class notes below 
//
//function setup() {
//    createCanvas(500,700);
//   
//    
//
//}
//
//function draw() {
// background(220);
//    
//    //draw a grid
//     stroke("green");
//    
//    var numColumns = 3;
//    var columnWidth = width/ numColumns;
//    var rowHeight = height/ numColumns;
//    
//    for (var i = 1; i< numColumns; i++) {
//     line(columnWidth*i,0,columnWidth*i,height);
//        line(0,rowHeight*i,width,rowHeight*i);
//        
//        console.log(i);
//    }
//
//}


//Windows Template

//function setup() {
//    createCanvas(640, 480);
//    noStroke();
//}
//
//function draw() {
//    background(220);
//    
//   
//    var ww = width/4;
//    var wh = height/2;
//    
//    for (var x = ww/4 ; x <= width ; x+=ww) {
//         for ( var y = wh/4; y <= height ; y+=wh ) {
//    
//             fill(167,82,54);
//             rect(x,y,ww/2,wh/2);
//             
//             fill("black");
//              stroke(167,82,54);
//             rect(x,y,ww/4,wh/4);
//             rect(x,y + wh/8, ww/4, wh/8);
//             rect(x + ww/4,y + wh/8, ww/4, wh/4);
//             rect(x + ww/4, y+wh/8*2,ww/4,wh/8);
//             
//             
//    
//    
//    }
//    
//        }
//    
//
//}