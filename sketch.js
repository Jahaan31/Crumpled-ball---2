var ground,ball,side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bini = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,680,800,40);
	ball = new Ball(70,100,56);

	side1 = new Bin(600,650,150,10);
	side2 = new Bin(500,585,50,150);
	side3 = new Bin(700,585,50,150);
  
}


function draw() {
background("white");
ball.display();
ground.display();
image(bini,490,490,200,180);
//side1.display();
//side2.display();
//side3.display();
 
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y: -160})
}	
}



