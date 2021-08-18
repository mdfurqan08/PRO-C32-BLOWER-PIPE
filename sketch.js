const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var image;
var btn;
var sound1;


function preload(){
image = loadImage("photo.gif");
sound1 = loadSound("Future.mp3");
}
function setup() {
  var canvas = createCanvas(800, 500);

  engine = Engine.create();
  world = engine.world;

// Creating ball
  ball = new Ball(width / 2 + 80, height / 2 - 85, 85, 85 );
// Creating Blower
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);sound1.play();
// Creating blowerMouth
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
// Creating button
  button = createButton("Click to Blow🌬");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
  
//creating mute button
 btn = createImg("mute1.png");
 btn.position(700,50);
 btn.size(60,50);
 btn.mouseClicked(mute1);



  
}




function draw() {
  background(image);
  Engine.update(engine);

  // Title
  fill("white");
  textAlign("center");
  textSize(40);
  text("PRO-C32: BLOWER PIPE", width / 2, 100);


  blower.show();
  ball.show();
  blowerMouth.show();
   
  //drawsprites();
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}

function mute1(){
    if(sound1.isPlaying())
    {
      sound1.stop();
    }
    else{
      sound1.play()
    }
}