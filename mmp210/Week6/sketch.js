function setup() {
  createCanvas(620, 800);
}
function draw() {
  background(100);
  strokeWeight(2);
  fill(128,0,(frameCount % 1 == 0) * 100);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseX / width)*72);
  text("DarkMegamanSX900", 5, 200);
}