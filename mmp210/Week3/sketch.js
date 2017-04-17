//Logo
function setup(){
    createCanvas(640, 480);
    background(0);
    
    var ts = 60;
    var lineNumber = 1;
    
    textSize(ts);
    
    fill("Red");
    rect(25, 240, 575, 19);
    
    var y = 150;
    var x = 20;
    
    
    fill("blue");
    textStyle(BOLD);
    text("DarkMegamanSX900", x, y + ts*lineNumber);
    lineNumber = lineNumber = 1;
    textStyle(BOLD);
    
    
     
}