var ship;
var aliens = [];
var bullets = [];
var img;
var Img;
var shots;
var explosions;
function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // bullet = new Bullets(width/2, height/2);
  for (var i = 0; i < 6; i++) {
    aliens[i] = new Alien(i*80+80, 60);
  }
}
function preload(){
    img = loadImage("images/alien.png");
    Img = loadImage("images/blue.png");
    explosions = loadSound("Alien-GoBoom.wav");
    shots = loadSound("Ship-Shots.wav");
    
}
function draw() {
  background(0);
  ship.show();
  ship.move();
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (bullets[i].hits(aliens[j])) {
        aliens[j].grow();
        bullets[i].evaporate();
      }
    }
  }
  var edge = false;
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true;
    }
  }
  if (edge) {
    for (var i = 0; i <aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }
  for (var i = 0; i < bullets.length-1; i++) {
      bullets[i].show();
      bullets[i].move();
      for (var j = 0; j < aliens.length; j++){
          if(bullets[i].hits(aliens[j])){
              aliens.splice(j,1);
              bullets[i].evaporate();
          }
          
      }
    
  }
}
function Ship() {
  this.x = width/2, height/4;
  this.xdir = 0;
  this.show = function() {

    //fill(255, 133, 0); 
    image(Img, this.x, 330, 50, 50);
    //rect(this.x, height-20, 20, 60);
  }
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  this.move = function(dir) {
      //console.log(this.x);
    if (this.xdir > 0 && this.x < width - 50)
         this.x += this.xdir*5;
     if (this.xdir < 0 && this.x > 0)
         this.x += this.xdir*5;  
  }
  
}
function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 4;
  this.toDelete = false;
  shots.play();    
  this.show = function() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  this.evaporate = function() {
    this.toDelete = true;
  }
  this.hits = function(ball) {
    var d = dist(this.x, this.y, ball.x, ball.y);
    if (d < this.r + ball.r) {
      return true;
    } else {
      return false;
    }
  }
  this.move = function() {
    this.y = this.y - 5;
  }
}
function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.xdir = 1;    
  this.grow = function() {
  this.r = this.r - 2;
      explosions.play();
  }
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }
  this.move = function() {
    this.x = this.x + this.xdir;
  }
  this.show = function() {
    noStroke();
    fill(170, 0, 98);
    image(img, this.x, this.y, this.r*2, this.r*2);
    //ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}
function keyPressed() {
  if (key === ' ') {
    var bullet = new Bullet(ship.x+25,height+-50);
    bullets.push(bullet);
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}