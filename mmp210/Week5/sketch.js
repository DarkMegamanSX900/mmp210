function setup(){
    createCanvas(640,360);
}

function draw(){
    background(220);
    
    stroke("yellow");
    
    var numColums = 10;
    
    var columWidth = width / numColums;
    var rowHeight = height / numColums;
    
    
    
    for (var i = 0; i < numColums; i++) {
        line(columWidth*i, 0, columWidth*i, height);
        
        line(0,rowHeight*i,width,rowHeight*i);
    }
}