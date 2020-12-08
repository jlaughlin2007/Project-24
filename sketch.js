var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	
	paper1 = new paper();
	ground1 = new ground();
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  
  drawSprites();
 
}



