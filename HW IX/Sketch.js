var myName = "Tilley"
var myAge = "20"

var R = 232;
var G = 176;
var B = 226;

var headx = 200;
var heady = 200;
var bodyx = 150;
var bodyy = 200;
var eyexL = 175;
var eyeyL = 200;
var eyexR = 225;
var eyeyR = 200;
var hairx = 125;
var hairy = 170;

var myHeadMoves = 1;
var myBodyMoves = 1;
var myEyeMoveL = 1;
var myEyeMoveR = 1;
var myHairMoves = 1;

var textMovement = 1;
var txtSize = 25;
var textCounter = 0;

function setup(){
    createCanvas(400,400);
    myHeadMoves = floor(random() * 15) + 1
    myBodyMoves = floor(random() * 15) + 1
    myEyeMoveL = floor(random() * 15) + 1
    myEyeMoveR = floor(random() * 15) + 1
    myHairMoves = floor(random() * 15) + 1
}
function draw(){
    background(R, G, B);
    fill(255);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: "+ round(mouseY), 10,20);

    console.log(myName);
    console.log(myAge);2
    myAge ++;

    //hair
    fill(77, 60, 52);
    circle(200,180,150);
    rect(hairx,hairy,150,100);
    fill(227, 221, 209);
    rect(125,270,150,25);
    fill(199, 182, 151);
    rect(125,220,150,25);

    if(hairx >= 400 || hairx <= 0 || hairy >= 400 || hairy <= 0){
        myHairMoves *= -1;
    }
    hairx += myHairMoves;
    hairy += myHairMoves;


    stroke(77, 60, 52);
    strokeWeight(20);
    line(145,150,100,260);
    stroke(199, 182, 151);
    line(255,150,300,260);

    //body
    noStroke();
    fill(75);
    rect(bodyx,bodyy,100,200);

    if(bodyx >= 400 || bodyx <= 0 ){
        myBodyMoves *= -1;
    }
    bodyx += myBodyMoves;

    //head
    fill(255, 235, 215);
    circle(headx,heady,150);

    if(headx >= 400 || headx <= 0 ){
        myHeadMoves *= -1;
    }
    headx += myHeadMoves;

    //eyes
    fill(255);
    strokeWeight(3);
    stroke(0);
    circle(eyexL,eyeyL,15);
    circle(eyexR,eyeyR,30);

    if(eyeyL >= 400 || eyeyL <= 0 ){
        myEyeMoveL *= -1;
    }
    eyeyL += myEyeMoveL;

    if(eyeyR >= 400 || eyeyR <= 0 ){
        myEyeMoveR *= -1;
    }
    eyeyR += myEyeMoveR;

    stroke(0);
    strokeWeight(7);
    point(174,200);
    strokeWeight(15);
    point(228,197);

    //bangs
    stroke(77, 60, 52);
    strokeWeight(10);
    fill(77, 60, 52);
    triangle(175,130,125,180,145,140);
    triangle(210,125,250,140,275,185);
    stroke(199, 182, 151);
    fill(199, 182, 151);
    triangle(170,170,175,130,200,130);

    //mouth
    fill(232, 155, 163);
    strokeWeight(3);
    stroke(0);
    triangle(175,230,230,235,200,260);
    
    //title
    textSize(txtSize);
    stroke(255);
    fill(132, 156, 126);
    text('Tilley is Rad', 100,30);

    txtSize += textMovement;

    if(textCounter >= 5){
        textMovement *= -1;
        textCounter = 0;
    }
    textCounter += 1;
}