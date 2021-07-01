var hr , mn , sc


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();

angleMode(DEGREES)

scAngle = map(sc,0,60,0,360);
mnAngle = map(mn,0,60,0,360);
hrAngle = map(hr%12 , 0 ,12,0,360);

translate(400,200)
rotate(-90);
push()
rotate(scAngle);
stroke("red");
strokeWeight(7)
line(0,0,100,0);
pop()

push()
rotate(mnAngle);
stroke("blue");
strokeWeight(7)
line(0,0,75,0);
pop()

push()
rotate(hrAngle);
stroke("green");
strokeWeight(7)
line(0,0,50,0);
pop()

push()
rotate(90);
textSize(30);
textStyle(BOLD);
text(hr%12 + ":" + mn + ":" + sc , -50 , 200);
pop()

noFill();

stroke("red");
strokeWeight(7);
arc(0,0,300,300,0,scAngle)

stroke("blue");
strokeWeight(7);
arc(0,0,280,280,0,mnAngle)

stroke("green");
strokeWeight(7);
arc(0,0,260,260,0,hrAngle)


 // drawSprites();
}