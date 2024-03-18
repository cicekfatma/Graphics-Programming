let a = 0.0;
let s = 0.0;

function setup(){
  createCanvas(720,400);
  noStroke();
  rectMode(CENTER);
}
function draw(){
  background(102);
  
  a = a + 0.04;
  s = cos(a) * 2;
  translate(width / 2, height / 2);
  scale(s);
  fill(51);
  rect(0,0,50,50);
  translate(75,0);
  fill(255);
  scale(s);
  rect(0,0,50,50);
}