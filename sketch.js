
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

//	roofSprite=createSprite(370,100, 300,20);

	engine = Engine.create();
	world = engine.world;

	var roof_options ={
        isStatic: true
    }

//	roof = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
//	World.add(world, roof);
	//Create the Bodies Here.
	roof=new Roof(width/2,height/6,width/7,20);
	bobObject1 = new Bob(720,675,40); 
	bobObject2 = new Bob(760,675,40); 
	bobObject3 = new Bob(800,675,40); bobObject4 = new Bob(840,675,40);
	 bobObject5 = new Bob(880,675,40);

	 rope1=new Rope(bobObject1. body, roof. body,-80, 0); 
	 rope2=new Rope(bobObject2. body, roof. body, -40, 0);
	rope3=new Rope(bobObject3. body, roof. body, 0, 0);
	 rope4=new Rope(bobObject4. body, roof. body, 40, 0);
	rope5=new Rope(bobObject5. body, roof. body, 80, 0);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); }
		 }




