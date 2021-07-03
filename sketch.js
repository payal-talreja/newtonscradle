
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bobObject1 =  new bob(320,575,40)
	bobObject2 =  new bob(360,575,40)
	bobObject3 = new bob(400, 575, 40);
	bobObject4 = new bob(440, 575, 40);
	bobObject5 = new bob(480,575,40)
	roof1 =new roof(400,250,230,20);

	rope1 = new rope(bobObject1.body, roof1.body, -80, 0);
	rope2 = new rope(bobObject2.body, roof1.body, -40, 0);
	rope3 = new rope(bobObject3.body, roof1.body, 0, 0);
	rope4 = new rope(bobObject4.body, roof1.body, 40, 0);
	rope5 = new rope(bobObject5.body, roof1.body, 80, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50,y:-45})
	}
}

