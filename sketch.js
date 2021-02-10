const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var playbutton, playbuttonimg;
var howtoplay, howtoplayimg;
var maze1, maze2, maze3, maze4, maze5, maze6, maze7, maze8, maze9, maze10, maze11, maze12,maze13,maze14, maze15, maze16, maze17;

 var backpack, backpackimg,lvl2key, passport, passportimg;
 var lvl4fence, lvl4fenceimg, lvl4key, keyimg;
var lvl5gate, lvl5gateimg,plane1, planeimg, plane2;
 var enemy,enemyimg,door,doorimg;

 var mainguy,mainguyimg;



function preload () { 
  
}


function setup () {
createCanvas(1000,500);

engine = Engine.create();
world = engine.world;
var playbutton = createSprite(500,250,50,50);


var  howtoplay = createSprite(50,450,50,50);

maze1 = new Mazeparts(225,150,300,10);
maze2 = new Mazeparts(923,150,150,10);
maze3 = new Mazeparts(25,90,50,10);
maze4 = new Mazeparts(125,90,10,65);
maze5 = new Mazeparts(850,435,10,125);
maze6 = new Mazeparts(812,367,85,10);
maze7 = new Mazeparts(595,330,10,85);
maze8 = new Mazeparts(594,177,10,65);
maze9 = new Mazeparts(435,367,100,10);
maze10 = new Mazeparts(380,188,10,85);
maze11 = new Mazeparts(380,330,10,85);
maze12 = new Mazeparts(275,367,200,10);
maze13 = new Mazeparts(638,367,75,10);
maze14 = new Mazeparts(662,150,125,10);
maze15 = new Mazeparts(35,367,75,10);
maze16 = new Mazeparts(125,250,250,10);
maze17 = new Mazeparts(925,230,150,10);

 backpack = new Items(50,30,40,40);
 lvl2key = new Ez(30,305,40,40);
 lvl4fence = new Items(10,200,10,75);
 lvl4key = new Ez(950,190,40,40);
 lvl5gate = new Items(730,80,10,150);
passport = new Items(40,200,40,40);
plane1  = new Items(900,450,40,40);
plane2 = new Items(970,65,40,40);
 var mainguy = createSprite(500,250,50,50);
 mainguy.shapeColor = "orange";
var enemy  = createSprite(925,450,40,40);
var door = createSprite(990,65,10,60);


}
function draw () {
    Engine.update(engine);
background(0,255,255);
createEdgeSprites();
maze1.display();
maze2.display()
maze3.display();
maze4.display();
maze5.display();
maze6.display();
maze7.display();
maze8.display();
maze9.display();
maze10.display();
maze11.display();
maze12.display();
maze13.display();
maze14.display();
maze15.display();
maze16.display();
maze17.display();
backpack.display();
lvl2key.display();
passport.display();
lvl4fence.display();
lvl4key.display();
lvl5gate.display();
plane1.display();
plane2.display();
textSize(20);
text("Exit", 960,115);
textSize(15);
text("backpack",75,30);
textSize(15);
text("plane 2",895,80);
textSize(15);
text("plane 1",950,450);
textSize(15);
text("key",65,305);
textSize(15);
text("passport",70,200);
textSize(15);
text("fence",5,150);
textSize(15);
text("key",900,195);
drawSprites();
}