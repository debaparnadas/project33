//consts
   const Engine = Matter.Engine;
   const World = Matter.World;
   const Events = Matter.Events;
   const Bodies = Matter.Bodies;
   const Body = Matter.Body;

//arrays   
   var particles = [];
   var plinkos = [];
   var divisions = [];

//variables   
   var divisionHeight=300;
   var score = 0;
   var particle;
   var turn = 0;
   var gameState = "play";

function setup() {
   createCanvas(800, 800);

   engine = Engine.create();
   world = engine.world;

   //creating bodies
      floor = new Ground(width/2,height,width,20);

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

   //yellow line
      stroke("yellow");
      strokeWeight(3);
      line(0,450,800,450);  
   
   //text for scores
      stroke(0);
      textSize(20);
      fill(255);
      text("Score : "+score,20,30);
      textSize(30);
      text(" 500 ", 5, 550);
      text(" 200 ", 80, 550);
      text(" 100 ", 160, 550);
      text(" 500 ", 240, 550);
      text(" 200 ", 320, 550);
      text(" 100 ", 400, 550);
      text(" 500 ", 480, 550);
      text(" 200 ", 560, 550);
      text(" 100 ", 640, 550);
      text(" 500 ", 720, 550);
   
   Engine.update(engine);
 
   //displaying bodies
      fill(255);
      floor.display();

      for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
      }

   //gameState end
   if (gameState==="end") {
      textSize = 40;
      fill("255");
      text("Game End",250,320);
   }   

      /*if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      //score++;
      }*/

   //scoring system
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
            if (particle.body.position.x<75 && particle.body.position.x>0 || particle.body.position.x<315 && particle.body.position.x>235 || particle.body.position.x<555 && particle.body.position.x>475 || particle.body.position.x<795 && particle.body.position.x>715) 
             {
                 score=score+500;      
                 particle=null;
                 if ( turn>= 5) {
                  gameState ="end";
                 }                          
             }

            else if (particle.body.position.x<155 && particle.body.position.x>75 || particle.body.position.x<395 && particle.body.position.x>315 || particle.body.position.x<635 && particle.body.position.x>555) 
             {
                   score = score + 200;
                   particle=null;
                   if ( turn>= 5) {
                     gameState ="end";

                   }

             }

            else if (particle.body.position.x<235 && particle.body.position.x>155 || particle.body.position.x<475 && particle.body.position.x>395 || particle.body.position.x<715 && particle.body.position.x>635)
             {
                   score = score + 100;
                   particle=null;
                   if ( turn>= 5) {
                     gameState ="end";
                   }

             }    
             
       }
 
     }

      for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
      }

   

}

function mousePressed() {
   if (gameState!=="end") {
      turn = turn + 1;
      particles.push(new Particle(mouseX,20,10));
      particle = new Particle(mouseX,20,10);
   }
}