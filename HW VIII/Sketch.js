function setup(){
    createCanvas(400,400);
}
function draw(){
    background(232, 176, 226);
    fill(255);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: "+ round(mouseY), 10,20);

    //hair
    fill(77, 60, 52);
    circle(200,180,150);
    rect(125,170,150,100);
    fill(227, 221, 209);
    rect(125,270,150,25);
    fill(199, 182, 151);
    rect(125,220,150,25);

    stroke(77, 60, 52);
    strokeWeight(20);
    line(145,150,100,260);
    stroke(199, 182, 151);
    line(255,150,300,260);

    //body
    noStroke();
    fill(75);
    rect(150,200,100,200);

    //head
    fill(255, 235, 215);
    circle(200,200,150);

    //eyes
    fill(255);
    strokeWeight(3);
    stroke(0);
    circle(175,200,15);
    circle(225,200,30);

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
    textSize(25);
    stroke(255);
    fill(132, 156, 126);
    text('Tilley is Rad', 100,30);
}