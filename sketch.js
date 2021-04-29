var hr, mn, sc,d
var hrA, mnA, scA, dA





function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(400,200);

  hr=hour()
  mn = minute();
  sc = second();
  d = day();

  scA = map(sc,0,60,0,360);
  mnA = map(mn,0,60,0,360);
  hrA = map(hr%12,0,12,0,360)
  dA = map(d,0,31,0,360)

  push();
rotate(scA);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0)
  pop();

  push();
rotate(mnA);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0)
  pop();

  push();
rotate(hrA);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0)
  pop();

  push();
rotate(dA);
stroke(255,255,0);
strokeWeight(7);
line(0,0,50,0)
  pop();

  stroke(255,0,0)
  strokeWeight(7)
  noFill();
  arc(0, 0, 300, 300, 0, scA);

  stroke(0,255,0)
  strokeWeight(7)
  noFill();
  arc(0, 0, 285, 285, 0, mnA);

  stroke(0,0,255)
  strokeWeight(7)
  noFill();
  arc(0, 0, 270, 270, 0, hrA);

  stroke(255,255,0)
  strokeWeight(7)
  noFill();
  arc(0, 0, 255, 255, 0, dA);

  drawSprites();
}