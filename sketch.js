const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  var cheetah = loadImage("cheetah_img.png");
  var cheetahSkin = loadImage("cheetah_skin.png")

  var arrow = loadImage("Arrow.png");

  var hunter = loadImage("Hunter.png");
}

function setup() {;
  createCanvas(800,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var  ground = new Ground(600,height,1200,20);
  var hunter = new Hunter(300,300,80,50);
  var cheetah = new Cheetah(700,300,80,50);
  var arrow = new Arrow ()
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  cheeth.display();
  arrow.display();
  hunter.display();

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  drawSprites();

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  hunter.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(arrow.body,{x:200,y:50})
     hunter.attach(arrow.body);

  }
}