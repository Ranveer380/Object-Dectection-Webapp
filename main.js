function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function preload(){
    img= loadImage('dog_cat.jpg')
}

img="";
function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog", 45 ,75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);
rect(270,270,130,150);
text("Bowl", 275,290)
;
}



