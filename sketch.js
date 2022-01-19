const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);

  playerArcher = new PlayerArcher(width - 600, playerBase.body.position.y - 180, 120, 120);

  computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);
  
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);
  
  playerArrow = new PlayerArrow()
  
  computerArrow = new ComputerArrow()
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Display arrow();
  
  

  if(keyCode === 32){
    arrow.shooot(playerArcher.body,shoot);

    shoot(archerAngle){
      var velocity = p5.vector.fromAngle(archerAngle);
      velocity.mult(20);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body,{ x:velocity.x, y:velocity.y})
    }

  }
  

  }




