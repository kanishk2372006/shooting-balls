//var PLAY = 1;
//var END = 0;
//var gameState = PLAY;

var ball,g
var score=0;

function preload(){

bal=loadImage("ball.png");
weapon = loadImage("gun.png");
gold=loadImage("g.png");
arms=loadImage("earth.png")
bg=loadImage("download(2).jpeg")
}

function setup() {
  createCanvas(800,400);
 
  bulitsGroup=new Group();
  obstaclesGroup = new Group();
  goldg=new Group();
  cannon=createSprite(350, 350, 50, 50);
  cannon.addImage(weapon);
  cannon.scale=0.1555;

}







function draw() {
  background("black" );  
  cannon.x = World.mouseX
  

  if(keyWentDown("space")){
bulit=createSprite(cannon.x,cannon.y,20,20)
bulit.addImage(arms);
bulit.scale=0.2;
bulitsGroup.add(bulit)
bulit.velocityY=-7;
bulit.lifetime=100;

  }

var number=Math.round(random(1,2))
if(frameCount%100===0){
if(number===1){
  Obstacles()
  
}
else if(number===2){
goldBalls()

}


}
if(bulitsGroup.isTouching(goldg)||bulitsGroup.isTouching(obstaclesGroup)){
obstaclesGroup.destroyEach();
goldg.destroyEach();

score=score+1;

}

  
  stroke("blue")
    fill("red");
    textSize(15);
  text("bombs are falling from space and pressing space bar will shoot bulits to destroy bomb ",10,20)
  text("#SAVE EARTH",200,35)
 
  drawSprites();
  
  fill("#0000ff")
  stroke("white")
  textSize(20)
  text("score",700,390)
  
}

function Obstacles(){
 
 

  
  ball=createSprite(400,20,10,10);

  ball.x=Math.round(random(100,700))
  ball.velocityY=6;
  obstaclesGroup.add(ball);
  
 
ball.addImage(bal)
ball.scale=0.2

  
  
    




}
function  goldBalls(){

g=createSprite(400,20,10,10);
g.x=Math.round(random(100,700))
g.velocityY=6;
g.addImage(gold)
g.scale=0.2;
goldg.add(g);

}