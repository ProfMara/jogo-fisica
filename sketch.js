
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var backgroundImg;
function preload(){
  backgroundImg = loadImage("background.png"); 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
 
}


function draw() {
  background(backgroundImg)
  Engine.update(engine);
  drawSprites();
 
}

  

