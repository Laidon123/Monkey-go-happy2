
var backgrndImg,score,backgrnd
var stoneImg
var stoneGroup
var bananaGroup
var bananaImg
var monkey,monkeyImg
var ground


function preload(){
  backgrndImg=loadImage("jungle.jpg")
  stoneImg=loadImage("stone.png")
  bananaImg=loadImage("banana.png")
 monkeyImg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
}




function setup() {
  createCanvas(400, 400);
  ground= createSprite(200,380,1000,5);
  
  backgrnd=createSprite(200,200,400,400)
  backgrnd.addImage("jungle",backgrndImg)
  backgrnd.velocityX=-5
  
  monkey=createSprite(50,320,10,10)
  monkey.addAnimation("monkey",monkeyImg)
  monkey.scale=0.15
  
  bananaGroup=new Group()
  stoneGroup=new Group()
  
  score=0
}

function draw() {
  background(220);
spawnBananas();
spawnStones();  
  
   monkey.velocityY=monkey.velocityY+0.5;
monkey.collide(ground); 
  
  if (keyWentDown("space")) { 
  monkey.velocityY=-11 ;
}
  
  if( backgrnd.x<0){
   backgrnd.x=200  
     
     }
   if(bananaGroup.isTouching(monkey)){
 bananaGroup.destroyEach();
 score = score+2;
   }
  
  switch(score){
      case 10:monkey.scale=0.2
      break; 
      case 20:monkey.scale=0.3
      break;
      case 30:monkey.scale=0.4
      break;
      case 40:monkey.scale=0.5
      break;
      
      
      
  }
  
   if(stoneGroup.isTouching(monkey)){
   }
 
  drawSprites()
   text("Score:"+score, 330, 15);
}

function spawnBananas(){ 
  if (World.frameCount%60===0){
var banana = createSprite(407, random(100,200));
banana.addImage("Banana",bananaImg);
banana .scale= 0.1;
 banana.velocityX=-4;
bananaGroup.add(banana);
  
  
}
}


function spawnStones(){
  if (World.frameCount%200===0){
var stone = createSprite(407, 350);
stone.addImage("Stone",stoneImg);
stone .scale= 0.2;
 stone.velocityX=-4;
 stoneGroup.add(stone);
  
}
}


