//On my Midterm my theme is Outerspace!, I picked this theme bacause of my favorite video game series Ratchet and Clank. The second reason I picked Outerspace is because, it's a very big wide open space with, many different thing's out there that we haven't discoved yet and it's always mayde me wonder is there any other liveforms or something very old or new waiting to be discoved, hopefully I'll be able to travel out there.
function setup() {
    createCanvas(740, 600);
    background("black");
    
  for(var i = 0; i < 50; i++){
    var xPos = random(10,width);
    var yPos = random(10,height);
    r = random(150,250);
    g = random(125,250);
    b = random(100,250);
    
   fill(r ,g, b, 150);
   ellipse(xPos, yPos, 30, 30);
}
    
    fill("Yellow");
    ellipse(30, 30, 150, 150);
   
    spaceship(10 + 10, 240, 120);
    

}
var spaceship = function(x, y, size) {
    var fin = size/6;
    fill("Orange");
    triangle(x,y - fin,x,y + size/2 + fin,x + size, y + size/4);
    fill("Lightblue")
    rect(x, y, size, size/2);
    fill("green")
    arc(x + size, y + size/4, size, size/2, PI + HALF_PI, HALF_PI);
      for (var i = 1; i < 4; i++){
      ellipse(x + i*size/3 , y + size/4, fin, fin);
          
     }
}