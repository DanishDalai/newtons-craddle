const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot,ball;

var gameState = "onSling";

function preload()
{
	ballIMG  = loadImage("sprites/ball.png")
}

function setup() {
	var canvas = createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	box = new Box(500,100,500,20)
	ball1 = new Ball(300,500,50)
	ball2 = new Ball(400,500,50)
	ball3 = new Ball(500,500,50)
	ball4 = new Ball(600,500,50)
	ball5 = new Ball(700,500,50)

	slingShot1 = new SlingShot(ball1.body,box.body,-200,0)
	slingShot2 = new SlingShot(ball2.body,box.body,-100,0)
    slingShot3 = new SlingShot(ball3.body,box.body,0,0)
	slingShot4 = new SlingShot(ball4.body,box.body,100,0)
	slingShot5 = new SlingShot(ball5.body,box.body,200,0)

	
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

	box.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	slingShot1.display(); 
	slingShot2.display();
	slingShot3.display();
	slingShot4.display();
	slingShot5.display();
  
  drawSprites();
 
}

  
   function keyPressed(){ 
	   if(keyCode===UP_ARROW){ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-60,y:-20}); } }

  
