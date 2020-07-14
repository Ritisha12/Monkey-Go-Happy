var monkey,monkeyImg, ground,groundImg, bananaGroup, obstacleGroup, bananaImg, obstacleImg,invisibleground,score;

function preload(){
  monkeyImg = loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  bananaImg = loadImage("Banana.png");
  obstacleImg = loadImage("stone.png");
  groundImg = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600,450);
  
  ground=createSprite(400,200,1200,400);
  ground.addImage("ground",groundImg)
  ground.scale=1.2
  
  monkey=createSprite(100,400,20,30);
  monkey.addAnimation("monkey",monkeyImg)
  monkey.scale=0.12
  invisibleground=createSprite(400,430,1200,5)
  invisibleground.visible=false
  score=0
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}

function draw(){
 background(255); 
  
  if(monkey.isTouching (bananaGroup)){
  score=score+2
  bananaGroup.destroyEach();
  }
  if(monkey.isTouching (obstacleGroup)){
  monkey.scale=0.08
  }
  if(ground.x<0){
  ground.x=ground.width/2
  }
  ground.velocityX=-2
  
  if (keyDown("space")) {
  monkey.velocityY=-12;
}
monkey.velocityY = monkey.velocityY + 0.7;
monkey.collide(invisibleground)
  
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
      break;
    case 30: monkey.scale = 0.16; 
      break;
    case 40: monkey.scale = 0.18;
      break;
      default:break; 
  }


banana();
obstacles();
drawSprites();
stroke("black");
textSize(20);
fill("white");
text("Score:"+score,500,50)
}

function banana(){
  if (frameCount % 80 === 0){
    var banana=createSprite(600,random(320,400),10,10);
    banana.addImage(bananaImg)
    banana.y=random(120,200);
    banana.velocityX=-5
    banana.lifetime=150
    banana.scale=0.06
    bananaGroup.add(banana)
  }
}
function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle=createSprite(600,400,10,10);
    obstacle.addImage(obstacleImg);
    obstacle.velocityX=-5;
    obstacle.scale=0.15;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}


