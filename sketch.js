const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionHeight = 300;
var particles = [];
var divisions = [];
var plinkos = [];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-5, width, 10);

  for(var x = 0; x <= width; x+= 80){
    divisions.push(new Division(x, height-divisionHeight/2, 5, divisionHeight));
  }
  for(var a = 0; a <= width-20; a+=40){
    plinkos.push(new Plinko(a, 75));
  }
  for(var b = 20; b <= width; b+=40){
    plinkos.push(new Plinko(b, 175));
  }
  for(var c = 35; c <= width-35; c+=40){
      plinkos.push(new Plinko(c, 275));
    }
  for(var e = 20; e <= width-20; e+=40){
      plinkos.push(new Plinko(e, 375));
    }

  }

function draw() {
  background(0); 
  Engine.update(engine); 

  ground.display();
  for(var y = 0; y < divisions.length; y++){
    divisions[y].display();
  }
  for(var d = 0; d < plinkos.length; d++){
    plinkos[d].display();
  }
  if(frameCount%10 === 0){
    particles.push(new Particle(random(40, 440), 10));
  }
  for(var f = 0; f < particles.length; f++){
    particles[f].display();
  }
}