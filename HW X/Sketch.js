// x and y for char.
var charX = 100;
var charY = 100;
//key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for shape 1 
var shape1X = 350;
var shape1Y = 50;
var shape1Xspeed;
var shape1Yspeed;

//x and y for shape 2
var shape2X = 450;
var shape2Y = 450;
var shape2Xspeed;
var shape2Yspeed;

//create shape when mouse clicked
var mouseShapeX = -10;
var mouseShapeY = -10;
function setup(){
    createCanvas(500,500);
    //get random speed when start
    shape1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw(){
    background(224, 148, 219);
    stroke(0);
    fill(0);
    
    //border
    rect(0,0, width,10);
    rect(0,0,10,height);
    rect(0,height-10,width,10);
    rect(width-10,0,10,height-50);

    //exit
    textSize(16);
    text("EXIT", width-50,height-50);

    //char
    fill(50);
    circle(charX, charY,25);

    //keys
    if(keyIsDown(w)){
        charY -= 10;
    }
    else{
        if(keyIsDown(s)){
        charY += 10;
        }
    }
    if(keyIsDown(a)){
        charX -= 10;
    }
    else{
        if(keyIsDown(d)){
        charX += 10;
        }
    }
    

    //enemy approaches! 1
    fill(93, 140, 96);
    circle(shape1X, shape1Y, 10);

    shape1Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape1Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape1X += shape1Xspeed;
    shape1Y += shape1Yspeed;

    if(shape1X > width){
        shape1X = 0;
    }
    if(shape1X < 0){
        shape1X = width;
    }
    if(shape1Y > width){
        shape1Y = 0;
    }
    if(shape1Y < 0){
        shape1Y = width;
    }
    
    //enemy approaches! 2
    fill(112, 112, 186);
    circle(shape2X, shape2Y, 20);

    shape2Xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shape2Yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shape2X += -1 * shape2Xspeed;
    shape2Y += -1 * shape2Yspeed;

    if(shape2X > width){
        shape2X = 0;
    }
    if(shape2X < 0){
        shape2X = width;
    }
    if(shape2Y > width){
        shape2Y = 0;
    }
    if(shape2Y < 0){
        shape2Y = width;
    }

    //check char exit
    if(charX > width && charY > width-50){
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    //create shape on mouse click
    fill(93, 140, 96);
    circle(mouseShapeX,mouseShapeY, 25);
}

function mouseClicked(){
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }