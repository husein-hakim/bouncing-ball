var music;
var surfaceBlue;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(600, 800)

    surfaceBlue = createSprite(525, 790, 150, 20);
    surfaceBlue.shapeColor = "blue";

    surfaceRed = createSprite(375, 790, 150, 20);
    surfaceRed.shapeColor = "red";

    surfaceGreen = createSprite(225, 790, 150, 20);
    surfaceGreen.shapeColor = "green";

    surfaceYellow = createSprite(75, 790, 150, 20);
    surfaceYellow.shapeColor = "yellow";

    ball = createSprite(Math.round(random(20, 750)), 500, 20, 20);
    ball.shapeColor = ("black");
   

}

function draw() {

    background("grey");
ball.x=mouseX
  ball.y=mouseY
    if (isTouching(ball, surfaceBlue)&&surfaceBlue.shapeColor === "blue"){
        ball.shapeColor = "blue";
        music.play();
    }

    if (isTouching(ball, surfaceRed)){
        ball.shapeColor = "red";
        music.play();
    }

    if (isTouching(ball, surfaceGreen)){
        ball.shapeColor = "green";
        music.play();
    }

    if (isTouching(ball, surfaceYellow)){
        ball.shapeColor = "yellow";
        music.play();
    }
    
  
    
    drawSprites();
}

