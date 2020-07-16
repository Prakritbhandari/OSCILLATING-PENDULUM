const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var support ,bob ,thread;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var support_options={
    isStatic: true
  }

support = Bodies.rectangle(200,100,200,20,support_options);
World.add(world,support);

var bob_options = {

  restitution : 0.8,
  density : 0.8

}

bob  = Bodies.circle(200,200,40,bob_options);
World.add(world,bob);


var thread_options = {
  bodyA : bob,
  bodyB : support,
  stiffness: 0.005,
  length : 100
}
var thread = Constraint.create(thread_options);
World.add(world,thread);

}


function draw() {
  background('white'); 
  Engine.update(engine);


  text("Press Right Arrow or Left Arrow to set the Bob",75,20);
  text("Press Down Arrow to Realease the Bob",95,40);

  fill ("silver");
  rectMode(CENTER);
  rect(support.position.x,support.position.y,200,20);

  fill("black");
  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,40);

  strokeWeight(5);
  stroke("black");
  line(bob.position.x,bob.position.y,support.position.x,support.position.y)

  if(keyCode===37){
    bob.position.x = 50;
    bob.position.y = 150;
  }

  else if (keyCode === 39){
  bob.position.x = 350;
  bob.position.y = 150;
  }
}