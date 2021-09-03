object=[]
img=""
insta_status="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(500,200);
obj_detector=ml5.objectDetector("cocossd",ModelLoaded);
document.getElementById("Status").innerHTML="Status:Loading Objects"+"<img src='load.webp' style='width:50px; height:50px;'>";
}
function draw(){

image(img,0,0,500,500);
if (insta_status!="") {
for ( i = 0; i< object.length; i++) {
    document.getElementById("Status").innerHTML="Status:Object Detected✔";
    document.getElementById("Status").style.color="lightgreen"; 
    fill(0, 247, 255);  
    confidence=floor((object[i].confidence)*100)+"%";
    textSize(20);
    text(object[i].label+" "+confidence,object[i].x+15,object[i].y+15);
    noFill();
    stroke(0, 247, 255);
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
}    
}
};
function ModelLoaded(){
console.log("I sleepy,so I write this, the model a ok!😴👍🏽");
insta_status=true;
obj_detector.detect(img,gotResult);
}
function gotResult(error,result){
if (error) {
console.error(error);   
} else {
console.log(result);
object=result

}
}