
/*var jerry, jerryImage1, jerryImage2, jerryImage3, jerryImage4;

var garden, gardenImage;

var tom, tomImage1, tomImage2, tomImage3, tomImage4;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");

    jerryImage1 = loadImage("images/jerryOne.png");
    jerryImage2 = loadImage("images/jerryTwo.png");
    jerryImage3 = loadImage("images/jerryThree.png");
    jerryImage4 = loadImage("images/jerryFour.png");

    tomImage1 = loadImage("images/tomOne.png");
    tomImage2 = loadImage("images/tomTwo.png");
    tomImage3 = loadImage("images/tomThree.png");
    tomImage4 = loadImage("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600); 
    tom.addImage("TOM", tomImage1)

    jerry = createSprite(200,600);
    jerry.addImage("JERRY", jerryImage1);

}

function draw() {
    background(bg);
    
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2){
        tom.velocityX = 0; 
        tom.addImage("tommychange", tomImage3);
        tom.x = 300; 
        tom.scale = 0.2;
         
        jerry.addImage("jerryblahblah", jerryImage3); 
        jerry.scale = 0.15; 
    }

    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", tomImage2);
        tom.changeAnimation("tomRunning")

        jerry.addAnimation("jerryfunny", jerryImage2); 
        jerry.changeAnimation("jerryfunny");
    }

}*/


var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}