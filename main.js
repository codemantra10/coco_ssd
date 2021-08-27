img=""
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(500,200);
}
function draw(){
image(img,0,0,500,500);
noFill();
rect(120, 25, 125, 250);
stroke(0, 247, 255);
text("dog",90,25);
textSize(20);
strokeWeight(3);

fill(0, 247, 255);
textSize(20);
text("cat",220,25);
noFill();
strokeWeight(3);
stroke(255, 0, 0);
rect(240, 25, 125, 250);

};
