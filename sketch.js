const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var job,jobImg;
var coinGroup,booksGroup,MazesGroup,competitionGroup;
var score = 0;
var lifes = 3;
var gameState = "play";



function preload(){
jobImg = loadImage("building.png");
coinImg = loadImage("coin.png");
bookImg = loadImage("book.jpg");
coinS = loadSound("coin.wav");
gameS = loadSound("Blazer Rail.wav");
studentImg = loadImage("student.jpg");
competitionImg = loadImage("competition.jpg");
}

function setup() {
  createCanvas(1350,650);
  engine=Engine.create();
  world=engine.world;


  coinGroup = new Group();
  booksGroup = new Group();
  MazesGroup = new Group();
  competitionGroup = new Group();

  reset = createSprite(680,350,50,50);
  reset.visible = false;
   
  competition1 = createSprite(600,400,20,20);
  competition1.addImage(competitionImg);
  competition1.scale = 0.1;
  competition1.velocityX = -4;
  competition1.velocityY = 4;
  competitionGroup.add(competition1);

  competition2 = createSprite(200,400,20,20);
  competition2.addImage(competitionImg);
  competition2.scale = 0.1;
  competition2.velocityX = -4;
  competition2.velocityY = +4;
  competitionGroup.add(competition2);

  competition3 = createSprite(1000,400,20,20);
  competition3.addImage(competitionImg);
  competition3.scale = 0.1;
  competition3.velocityX = -4;
  competition3.velocityY = +4;
  competitionGroup.add(competition3);

  competition4 = createSprite(970,100,20,20);
  competition4.addImage(competitionImg);
  competition4.scale = 0.1;
  competition4.velocityX = +4;
  competition4.velocityY = +4;
  competitionGroup.add(competition4);

  
  student = createSprite(100,100,20,20);
  student.shapeColor = "blue";
  student.addImage(studentImg);
  student.scale = 0.15;
  

 // coin1 = new Coins(700,200);

  book1 = createSprite(200,200,30,30);
  book1.addImage(bookImg);
  book1.scale = 0.2;
  booksGroup.add(book1);
  book2 = createSprite(1000,500,30);
  book2.addImage(bookImg);
  book2.scale = 0.2;
  booksGroup.add(book2);
  book3 = createSprite(1000,200,30,30);
  book3.addImage(bookImg);
  book3.scale = 0.2;
  booksGroup.add(book3);
  book4 = createSprite(600,570,30,30);
  book4.addImage(bookImg);
  book4.scale = 0.2;
  booksGroup.add(book4);

  job = createSprite(1270,100,20,20);
  job.addImage(jobImg);
  job.scale = 0.2;
 

  //creating boundaries
  Maze1 = createSprite(54,345,4,550);
  Maze1.shapeColor = "red";
  MazesGroup.add(Maze1);
  Maze2 = createSprite(1310,345,4,550);
  Maze2.shapeColor = "red";
  MazesGroup.add(Maze2);
  Maze3 = createSprite(680,68,1255,4);
  Maze3.shapeColor = "red";
  MazesGroup.add(Maze3);
  Maze4 = createSprite(680,618,1255,4);
  Maze4.shapeColor = "red";
  MazesGroup.add(Maze4);
  
  //creating inner walls
  //Right side and left side walls which are touched to boundaries
  Maze5 = createSprite(96,264,80,4);
  Maze5.shapeColor = "yellow";
  MazesGroup.add(Maze5);
  Maze6 = createSprite(96,420,80,4);
  Maze6.shapeColor = "yellow";
  MazesGroup.add(Maze6);
  Maze7 = createSprite(1267,264,80,4);
  Maze7.shapeColor = "yellow";
  MazesGroup.add(Maze7);
  Maze8 = createSprite(1267,420,80,4);
  Maze8.shapeColor = "yellow";
  MazesGroup.add(Maze8);

  Maze9 = createSprite(178,343,83,4);
  Maze9.shapeColor = "yellow";
  MazesGroup.add(Maze9);
  Maze10 = createSprite(1187,343,83,4);
  Maze10.shapeColor = "yellow";
  MazesGroup.add(Maze10);

  Maze11 = createSprite(178,147,83,4);
  Maze11.shapeColor = "yellow";
  MazesGroup.add(Maze11);
  Maze12 = createSprite(1185,147,83,4);
  Maze12.shapeColor = "yellow";
  MazesGroup.add(Maze12);
  Maze13 = createSprite(178,538,83,4);
  Maze13.shapeColor = "yellow";
  MazesGroup.add(Maze13);
  Maze14 = createSprite(1185,538,83,4);
  Maze14.shapeColor = "yellow";
  MazesGroup.add(Maze14);

  Maze15 = createSprite(430,147,83,4);
  Maze15.shapeColor = "yellow";
  MazesGroup.add(Maze15);
  Maze16 = createSprite(430,539,83,4);
  Maze16.shapeColor = "yellow";
  MazesGroup.add(Maze16);
  Maze17 = createSprite(933,147,83,4);
  Maze17.shapeColor = "yellow";
  MazesGroup.add(Maze17);
  Maze18 = createSprite(933,539,83,4);
  Maze18.shapeColor = "yellow";
  MazesGroup.add(Maze18);

  Maze19 = createSprite(346,304,83,4);
  Maze19.shapeColor = "yellow";
  MazesGroup.add(Maze19);
  Maze20 = createSprite(1016,304,83,4);
  Maze20.shapeColor = "yellow";
  MazesGroup.add(Maze20);
  Maze21 = createSprite(1016,382,83,4);
  Maze21.shapeColor = "yellow";
  MazesGroup.add(Maze21);

  Maze22 = createSprite(599,304,83,4);
  Maze22.shapeColor = "yellow";
  MazesGroup.add(Maze22);
  Maze23 = createSprite(764,304,83,4);
  Maze23.shapeColor = "yellow";
  MazesGroup.add(Maze23);

  Maze24 = createSprite(262,225,83,4);
  Maze24.shapeColor = "yellow";
  MazesGroup.add(Maze24);
  Maze25 = createSprite(1100,225,83,4);
  Maze25.shapeColor = "yellow";
  MazesGroup.add(Maze25);
  Maze26 = createSprite(262,459,83,4);
  Maze26.shapeColor = "yellow";
  MazesGroup.add(Maze26);
  Maze27 = createSprite(1100,459,83,4);
  Maze27.shapeColor = "yellow";
  MazesGroup.add(Maze27);

  Maze28 = createSprite(682,187,4,77);
  Maze28.shapeColor = "yellow";
  MazesGroup.add(Maze28);
  Maze29 = createSprite(682,499,4,77);
  Maze29.shapeColor = "yellow";
  MazesGroup.add(Maze29);

  Maze30 = createSprite(304,110,4,77);
  Maze30.shapeColor = "yellow";
  MazesGroup.add(Maze30);
  Maze31 = createSprite(1059,110,4,77);
  Maze31.shapeColor = "yellow";
  MazesGroup.add(Maze31);
  Maze32 = createSprite(304,576,4,77);
  Maze32.shapeColor = "yellow";
  MazesGroup.add(Maze32);
  Maze33 = createSprite(1059,576,4,77);
  Maze33.shapeColor = "yellow";
  MazesGroup.add(Maze33);

  Maze34 = createSprite(473,420,4,77);
  Maze34.shapeColor = "yellow";
  MazesGroup.add(Maze34);
  Maze35 = createSprite(473,265,4,77);
  Maze35.shapeColor = "yellow";
  MazesGroup.add(Maze35);
  Maze36 = createSprite(890,420,4,77);
  Maze36.shapeColor = "yellow";
  MazesGroup.add(Maze36);
  Maze37 = createSprite(890,265,4,77);
  Maze37.shapeColor = "yellow";
  MazesGroup.add(Maze37);

  Maze38 = createSprite(557,344,4,77);
  Maze38.shapeColor = "yellow";
  MazesGroup.add(Maze38);
  Maze39 = createSprite(807,344,4,77);
  Maze39.shapeColor = "yellow";
  MazesGroup.add(Maze39);

  Maze40 = createSprite(389,227,4,155);
  Maze40.shapeColor = "yellow";
  MazesGroup.add(Maze40);
  Maze41 = createSprite(975,227,4,155);
  Maze41.shapeColor = "yellow";
  MazesGroup.add(Maze41);
  Maze42 = createSprite(389,460,4,155);
  Maze42.shapeColor = "yellow";
  MazesGroup.add(Maze42);
  Maze43 = createSprite(975,460,4,155);
  Maze43.shapeColor = "yellow";
  MazesGroup.add(Maze43);

  Maze44 = createSprite(220,343,4,235);
  Maze44.shapeColor = "yellow";
  MazesGroup.add(Maze44);
  Maze45 = createSprite(1143,343,4,235);
  Maze45.shapeColor = "yellow";
  MazesGroup.add(Maze45);

  Maze46 = createSprite(137,167,4,40);
  Maze46.shapeColor = "yellow";
  MazesGroup.add(Maze46);
  Maze47 = createSprite(137,519,4,40);
  Maze47.shapeColor = "yellow";
  MazesGroup.add(Maze47);
  Maze48 = createSprite(1227,167,4,40);
  Maze48.shapeColor = "yellow";
  MazesGroup.add(Maze48);
  Maze49 = createSprite(1227,519,4,40);
  Maze49.shapeColor = "yellow";
  MazesGroup.add(Maze49);

  Maze50 = createSprite(682,382,247,4);
  Maze50.shapeColor = "yellow";
  MazesGroup.add(Maze50);

  Maze51 = createSprite(682,148,249,4);
  Maze51.shapeColor = "yellow";
  MazesGroup.add(Maze51);
  Maze52 = createSprite(682,538,249,4);
  Maze52.shapeColor = "yellow";
  MazesGroup.add(Maze52);

  Maze53 = createSprite(535,225,126,4);
  Maze53.shapeColor = "yellow";
  MazesGroup.add(Maze53);
  Maze54 = createSprite(535,460,126,4);
  Maze54.shapeColor = "yellow";
  MazesGroup.add(Maze54);
  Maze55 = createSprite(829,225,126,4);
  Maze55.shapeColor = "yellow";
  MazesGroup.add(Maze55);
  Maze56 = createSprite(829,460,126,4);
  Maze56.shapeColor = "yellow";
  MazesGroup.add(Maze56);

  Maze57 = createSprite(346,382,83,4);
  Maze57.shapeColor = "yellow";
  MazesGroup.add(Maze57);
}

function draw() {
  background("black");  
  Engine.update(engine);


if(gameState === "play"){
  
  if(keyCode === 38){
    student.velocityY = -3;
    student.velocityX = 0;
  }
  else if(keyCode === 40){
    student.velocityY = 3;
    student.velocityX = 0;
  }
  else if(keyCode === 37){
    student.velocityX = -3;
    student.velocityY = 0;
  }
  else if(keyCode === 39){
    student.velocityX = 3;
    student.velocityY = 0;
  }

  for (var i = 0; i < booksGroup.length; i++) {
    if (booksGroup.get(i).isTouching(student)) {
        booksGroup.get(i).destroy();
        coinS.play();
        score = score+10;
        
    }
    
}

  for (var i = 0; i < coinGroup.length; i++) {
    if (coinGroup.get(i).isTouching(student)) {
        coinS.play();
        coinGroup.get(i).destroy();
        score = score+1;
        
        
    }
    
}

   if(score===60 && student.isTouching(job)){
     textSize(40);
     fill("blue");
     text("You Won",610,360);
     textSize(40);
     fill("yellow");
     text("Press SPACE to restart",470,130);
     student.velocityX=0;
     student.velocityY=0;
     coinGroup.destroyEach();
    booksGroup.destroyEach();
    competitionGroup.destroyEach();
    if(keyCode === 32){
      gameState = "play";
      lifes = 3;
      score = 0;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      
      for (i=0; i<20;i++){
        var coins = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
        coins.addImage(coinImg);
        coins.scale = 0.01;
      
        coinGroup.add(coins);
      }
      book1 = createSprite(200,200,30,30);
      book1.addImage(bookImg);
      book1.scale = 0.2;
      booksGroup.add(book1);
      book2 = createSprite(1000,500,30);
      book2.addImage(bookImg);
      book2.scale = 0.2;
      booksGroup.add(book2);
      book3 = createSprite(1000,200,30,30);
      book3.addImage(bookImg);
      book3.scale = 0.2;
      booksGroup.add(book3);
      book4 = createSprite(600,570,30,30);
      book4.addImage(bookImg);
      book4.scale = 0.2;
      booksGroup.add(book4);   

      competition1 = createSprite(600,400,20,20);
      competition1.addImage(competitionImg);
      competition1.scale = 0.1;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competitionGroup.add(competition1);

      competition2 = createSprite(200,400,20,20);
      competition2.addImage(competitionImg);
      competition2.scale = 0.1;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competitionGroup.add(competition2);

      competition3 = createSprite(1000,400,20,20);
      competition3.addImage(competitionImg);
      competition3.scale = 0.1;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competitionGroup.add(competition3);

      competition4 = createSprite(970,100,20,20);
      competition4.addImage(competitionImg);
      competition4.scale = 0.1;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      competitionGroup.add(competition4);
      
    }
     
    
   }

   if(competitionGroup.isTouching(student)){
     student.x = 100;
     student.y = 100;
     student.velocityX = 0;
     student.velocityY = 0;
     lifes = lifes - 1;
   }

   if(lifes === 0){
    
    gameState = "end";
   }

  
  student.collide(MazesGroup);
  competitionGroup.bounceOff(MazesGroup);

  textSize(20);
  fill(0,255,72);
  text("Score : "+score,100,50);
  text("Lifes : "+lifes,600,50);
  spawnCoins();

  }else if(gameState === "end"){
    textSize(40);
    fill("red");
    text("You Lose", 600,360);
    textSize(40);
     fill("yellow");
     text("Press SPACE to restart",470,130);
    student.velocityX = 0;
    student.velocityY = 0;
    coinGroup.destroyEach();
    booksGroup.destroyEach();
    competitionGroup.destroyEach();
    if(keyCode === 32){
      gameState = "play";
      lifes = 3;
      score = 0;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      
      for (i=0; i<20;i++){
        var coins = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
        coins.addImage(coinImg);
        coins.scale = 0.01;
      
        coinGroup.add(coins);
      }
      book1 = createSprite(200,200,30,30);
      book1.addImage(bookImg);
      book1.scale = 0.2;
      booksGroup.add(book1);
      book2 = createSprite(1000,500,30);
      book2.addImage(bookImg);
      book2.scale = 0.2;
      booksGroup.add(book2);
      book3 = createSprite(1000,200,30,30);
      book3.addImage(bookImg);
      book3.scale = 0.2;
      booksGroup.add(book3);
      book4 = createSprite(600,570,30,30);
      book4.addImage(bookImg);
      book4.scale = 0.2;
      booksGroup.add(book4);   

      competition1 = createSprite(600,400,20,20);
      competition1.addImage(competitionImg);
      competition1.scale = 0.1;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competitionGroup.add(competition1);

      competition2 = createSprite(200,400,20,20);
      competition2.addImage(competitionImg);
      competition2.scale = 0.1;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competitionGroup.add(competition2);

      competition3 = createSprite(1000,400,20,20);
      competition3.addImage(competitionImg);
      competition3.scale = 0.1;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competitionGroup.add(competition3);

      competition4 = createSprite(970,100,20,20);
      competition4.addImage(competitionImg);
      competition4.scale = 0.1;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      competitionGroup.add(competition4);
      
    }
  }

  
  


 
  


  
  drawSprites();
}

function spawnCoins(){
  if (frameCount === 1 ||frameCount === 2 || frameCount === 3 || frameCount === 4 || frameCount === 5 || frameCount === 6 || frameCount === 7 || frameCount === 8 || frameCount === 9 || frameCount === 10 || frameCount === 11 || frameCount === 12 || frameCount === 13 || frameCount === 14 || frameCount === 15 || frameCount === 16 || frameCount === 17 || frameCount === 18 || frameCount === 19 || frameCount === 20 ){
  var coins = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
  coins.addImage(coinImg);
  coins.scale = 0.01;

  coinGroup.add(coins);
  }
}

function reset(){
  coinGroup.destroyEach();
    booksGroup.destroyEach();
    competitionGroup.destroyEach();
    if(keyCode === 32){
      gameState = "play";
      lifes = 3;
      score = 0;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      
      for (i=0; i<20;i++){
        var coins = createSprite(Math.round(random(80,1200)),Math.round(random(80,600)),40,10);
        coins.addImage(coinImg);
        coins.scale = 0.01;
      
        coinGroup.add(coins);
      }
      book1 = createSprite(200,200,30,30);
      book1.addImage(bookImg);
      book1.scale = 0.2;
      booksGroup.add(book1);
      book2 = createSprite(1000,500,30);
      book2.addImage(bookImg);
      book2.scale = 0.2;
      booksGroup.add(book2);
      book3 = createSprite(1000,200,30,30);
      book3.addImage(bookImg);
      book3.scale = 0.2;
      booksGroup.add(book3);
      book4 = createSprite(600,570,30,30);
      book4.addImage(bookImg);
      book4.scale = 0.2;
      booksGroup.add(book4);   

      competition1 = createSprite(600,400,20,20);
      competition1.addImage(competitionImg);
      competition1.scale = 0.1;
      competition1.velocityX = -4;
      competition1.velocityY = 4;
      competitionGroup.add(competition1);

      competition2 = createSprite(200,400,20,20);
      competition2.addImage(competitionImg);
      competition2.scale = 0.1;
      competition2.velocityX = -4;
      competition2.velocityY = +4;
      competitionGroup.add(competition2);

      competition3 = createSprite(1000,400,20,20);
      competition3.addImage(competitionImg);
      competition3.scale = 0.1;
      competition3.velocityX = -4;
      competition3.velocityY = +4;
      competitionGroup.add(competition3);

      competition4 = createSprite(970,100,20,20);
      competition4.addImage(competitionImg);
      competition4.scale = 0.1;
      competition4.velocityX = +4;
      competition4.velocityY = +4;
      competitionGroup.add(competition4);
      
    }
}
