let x, y;

let angle1 = 0.0;

let angle2 = 0.0;

let segLength = 100;



function setup() {
  
createCanvas(720, 400);
  
strokeWeight(30);
  
stroke(255, 160);
  
x = width * 0.5;
  
y = height * 0.5;

}



function draw() {
  
background(0);

  

angle1 = (mouseX / float(width) - 0.5) * -TWO_PI;
  
angle2 = (mouseY / float(height) - 0.5) * PI;

  
push();
  
segment(x, y, angle1);
  
segment(segLength, 0, angle2);
  pop();

}



function segment(x, y, a) {
  
translate(x, y);
  
rotate(a);
 
line(0, 0, segLength, 0);

}