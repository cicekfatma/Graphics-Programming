let x = 0;
let y = 0;
let dim = 80.0;

function setup(){
  createCanvas(720,400);
  noStroke();
}
function draw(){
  background(102);
  x= x+0.8;
  if(x> width + dim){
    x=-dim;
  }
  translate(x,height/2 -dim/2);
  fill(255);
  rect(-dim/2,-dim/2,dim,dim);
  translate(x,dim);
  fill(0);
  rect(-dim/2,-dim/2,dim,dim);
}
