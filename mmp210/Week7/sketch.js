// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background("lightgreen");
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    var x = 60, y = 30;
    for (var i = 0; i < 6; i++) {
        for (var h = 0; h < 3; h++) {
            drawWindow(x + 150 * i, y + 150 * h, windowWidth, windowHeight);
        }
    }
    
}

function drawWindow(x, y, windowWidth, windowHeight) {
    fill("lightblue");
    rect(x, y, windowWidth/2, windowHeight/2);
           
    fill("white");
    stroke(167, 82, 54);
           
   rect(x, y + windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/4, windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/4, windowWidth/4, windowHeight/8);
           rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
           rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/8, windowHeight/8);
           rect(x + windowWidth/100, y + windowHeight/8 * 1, windowWidth/10, windowHeight/8);
    fill("green");
    noStroke();
    rect(x - windowWidth/20, y + windowHeight/1000, windowWidth/2 + windowWidth/8, windowHeight/16);
    
	  fill("green");
	  noStroke();
	  rect(x - windowWidth/16, y + windowHeight/2, windowWidth/2 + windowWidth/8, windowHeight/16);
}   
