function setup() {
    createCanvas(640,480);
    background(200);
    
    var ts = 50;
    var lineNumber = 1;
    
    // ts means text size
    
    //rect(320,240,70,12);
    textSize(ts);
    textFont("Lucida Grande");
    textAlign(CENTER);
    textLeading(100);
    
    
    var x = 320;
    var y = 100;
    
    var greeting = "Hello World!";
    var greetingWidth = textWidth(greeting);
    rectMode(CENTER);
    
    
    rect(x,y + ts/2,greetingWidth,ts); 
    text(greeting,x, y + ts*lineNumber);
    lineNumber++;
    
    fill("lightblue");
    strokeWeight(10);
    stroke("blue");
    
    textStyle(ITALIC);
    text("It's Monday",x,y + ts*lineNumber);
    lineNumber++;
    
    textStyle(BOLD);
    text("2017",x,y + ts*lineNumber);
    lineNumber++;
    
    textStyle(NORMAL);
    text("February 21",x,y + ts*lineNumber);


}