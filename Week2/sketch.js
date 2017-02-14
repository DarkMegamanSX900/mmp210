function setup(){
    createCanvas(800,800);
    //line(15, 25, 70, 90);
    //two ponits in (x1, y1, x2, y2)
    background('darkorange');
    
    //head
    fill(176,113,3);
    ellipse(400,300,600);
    
    //eyes
    fill(255,255,255);
    ellipse(200,240,110,95);
    ellipse(450,240,110,95);
    
    //mouth
    arc(350,410,200,100,0,PI+QUARTER_PI, OPEN);
    

}