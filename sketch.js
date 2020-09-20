const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
 

var particles = [];
var plinkos = [];

var divisions=[];

var divisionHeight=300;
var score =0;

var particle=null;

var turn=0;

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  
  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
     
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }


    
    

    
}
 


function draw() {


  background("black");
  textSize(20);
  text("500",100,540);
  text("100",180,540);
  text("200",20,540);
  text("400",260,540);

  text("100",340,540);
  text("200",420,540);
  text("600",500,540);
  text("200",580,540);
  text("100",660,540);
  text("500",740,540);
  
  text("Score : "+score,20,30);

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
   if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

 
   

   if(particle!==null){
     particle.display();
     if (particle.body.position.y>760)
     {
     if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( turn>= 5) gameState ="end";                          
              }
            else if(particle.body.position.x <= 600 && particle.body.position.x >= 300){
                  score=score+300;      
                  particle=null;
                  if ( turn>= 5) gameState ="end";
            }
            else if(particle.body.position.x <= 900 && particle.body.position.x >= 600){
              score=score+400;      
              particle=null;
              if ( turn>= 5) gameState ="end";
            }
        
          }
}
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function keyPressed(){
  if(gameState!=="end" && keyCode===32 && particle===null){
    turn=turn+1;
    particle=new Particle(random(10,width-10),0,10);
    
   
  }
     
}