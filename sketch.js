var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyimg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(100,550);
	fairy.addAnimation("fairy",fairyimg);
	fairy.scale=0.2;
	fairy.debug=true;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    ground=createSprite(400,740,800,20);
	ground.visible=false;
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  fairy.velocityX=0;
  fairy.velocityX=0;
  fairy.collide(ground);
  if(keyDown("right")){
	fairy.velocityX=6;
}
if(keyDown("left")){
	fairy.velocityX=-6;
}
if(fairy.collide(star)){
	star.velocityY=0;
	fairy.velocityY=0;
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
