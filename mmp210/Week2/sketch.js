function setup(){
    createCanvas(900,900);
	
	background('gray')
 
	
//Legs
var r = 255;
var g = 205;
var b = 153;
fill(r, g, b);
var legYPosition = 750;
var legWidth = 25;
var legHeight = 60;
//RightLeg
ellipse(420,legYPosition, legWidth, legHeight);
//LeftLeg
ellipse(380,legYPosition, legWidth, legHeight);
	
//Feet
var r = 255;
var g = 0;
var b = 0;
fill(r, g, b);
var FeetYPosition = 780;
var FeetWidth = 40;
var FeetHeight = 25;
//RightFeet
ellipse(420,FeetYPosition ,FeetWidth, FeetHeight);
//LeftFeet
ellipse(380,FeetYPosition, FeetWidth, FeetHeight);

//LittleBomb
var r = 255
var g = 0
var b = 0
fill(r, g, b);
var bombYPostiton = 400;
var bombWidth = 590;
var bombHeight = 29;
ellipse(bombYPostiton, bombWidth, bombHeight);

//Body
var r = 102;
var g = 0;
var b = 102;
fill(r, g, b);
var BodyYPostiton = 400;
var BodyWidth = 700;
var BodyHeight = 60;
ellipse(BodyYPostiton, BodyWidth, BodyHeight);
    

//Arms
var r = 255;
var g = 255;
var b = 255;
fill(r, g, b)
var ArmYPostiton = 700;
var ArmWidth = 45;
var ArmHeight = 15;
//Right
ellipse(450,ArmYPostiton, ArmWidth, ArmHeight);
//Left
ellipse(350,ArmYPostiton, ArmWidth, ArmHeight);

//Hands
var r = 0;
var g = 0;
var b = 0;
fill(r, g, b)
var HandYPostiton = 700;
var HandWidth = 20;
var HandHeight = 20;
//RightHand
ellipse(472,HandYPostiton, HandWidth, HandHeight);
//LeftHand
ellipse(330,HandYPostiton, HandWidth, HandHeight);
	
//Head
var r = 255;
var g = 205;
var b = 153;
fill(r, g, b)
var HeadYPostiton = 400;
var HeadWidth = 636;
var HeadHeight = 80;
ellipse(HeadYPostiton, HeadWidth, HeadHeight);
	
//Eyes
var r= 0;
var g= 0;
var b= 0;
fill(r, g, b);
var EyeYPostiton = 630
var EyeWidth = 10
var EyeHeight = 50
//RightEye
ellipse(420, EyeYPostiton, EyeWidth, EyeHeight);
//LeftEye
ellipse(390, EyeYPostiton, EyeWidth, EyeHeight);	


}