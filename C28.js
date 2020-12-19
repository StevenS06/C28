var = Tree,treeImage;
var = Stone,stoneImage;
var = Mango,mangoImage;
var options={
	isStatic:true,
	restitution :0,
	friction :1.
}


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

	//Create the Bodies Here.


	Engine.run(engine);
  
	detectcollision(stoneObj, mango1);
	detectcollision(stoneObj, mango2);
	detectcollision(stoneObj, mango3);
	detectcollision(stoneObj, mango4);
	detectcollision(stoneObj, mango5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
}


function keyPressed(){
	if(keyCode ===32){
		Matter.Body.setPosition(stoneObj.body, {x.235,y.420})
		launcherObject.attach(stoneObj.body);
	}
	}
}



