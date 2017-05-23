var flameR = 250;
var flameG = 250;
var flameB = 0;
var shipX = 100;
var shipY = 250;
var zigzag = 1;

function setup() {
	createCanvas (1250,500);
}

function draw() {
	background(255,100,100);
	
	var spaceship = function(xLoc, yLoc) {
		strokeWeight(2);	//setting black lines
		fill(0);			//cockpit color
		triangle(xLoc, yLoc, xLoc - 30, yLoc + 15, xLoc - 30, yLoc - 15);	//cockpit
		
		fill(255);			//body color
		rect(xLoc - 70, yLoc - 15, 40, 30);
		quad(xLoc - 100, yLoc - 35, xLoc - 50, yLoc - 30, xLoc - 40, yLoc - 15, xLoc - 70, yLoc - 15);
		quad(xLoc - 100, yLoc + 35, xLoc - 50, yLoc + 30, xLoc - 40, yLoc + 15, xLoc - 70, yLoc + 15);
		
		fill(flameR, flameG, flameB);	//flame color
		triangle(xLoc - 70, yLoc - 10, xLoc - 70, yLoc + 10, xLoc - 100, yLoc);
	}
	
	spaceship(shipX,shipY);
	shipX++;
	flameR -= 0.25;
	flameG -= 0.1;
	flameB++;
	
	shipY += zigzag;
	
	if (shipY == 300) {
		zigzag = -1;
	}
	else if (shipY == 200) {
		zigzag = 1;
	}
}