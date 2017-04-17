// x position variable
var xpos = 5; 
function setup() 
{
  // set canvas size
  createCanvas(400, 200);
}
 
function draw() 
{
  // clear background
  background('orange');
 
  // set the fill color
      
  fill(frameCount, 0, 255);   
 
  // black outline
  stroke(5);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // increment x variable
  xpos = xpos + 1;
 
  // if the circle moves off screen, reset it's position
  if(xpos > width)
  {
    xpos = 0;
  }
 
  // draw a circle
  ellipse(xpos, 100, 25, 25);	
 
  // display xpos variable
  fill(0);
  text("xpos = " + xpos, 25, 25);
}