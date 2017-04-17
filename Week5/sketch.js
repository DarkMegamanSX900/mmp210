// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background("lightgreen");
    
    var windowWidth = width/6;
    var windowHeight = height/2; 
    
    for (var x = windowWidth/4; x < width; x+=windowWidth){
       for (var y = windowHeight/4; y < height; y+=windowHeight) {  
    
    
    fill("lightblue");
    rect(x, y, windowWidth/2, windowHeight/2);
    
    fill("White");
    stroke(167, 82, 54);
           
           rect(x, y + windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/4, windowWidth/4, windowHeight/0);
           rect(x, y + windowHeight/4, windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 1, windowWidth/8, windowHeight/8);
           rect(x + windowWidth/100, y + windowHeight/8 * 1, windowWidth/10, windowHeight/8);
  }
 }
}
    