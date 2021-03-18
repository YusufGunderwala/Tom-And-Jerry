var cat ,garden,catR,catSad,mouseS,mouseT,mouse1,cat1;
var background1;

function preload() {
    //load the images here
    cat = loadImage("cat1.png");   
    catR= loadAnimation("cat2.png","cat3.png");
    catSad = loadImage("cat4.png");
    garden = loadImage("garden.png");
    mouseS = loadImage("mouse1.png");
    mouseT= loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);


  cat1 = createSprite(700,660);
  cat1.addImage(cat);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660);
  mouse1.addImage(mouseS);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catR);
cat1.changeAnimation("cat");

}

if(cat1.isTouching(mouse1)){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseT);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catSad);
    cat1.changeAnimation("catworry");
}

    drawSprites();
}


