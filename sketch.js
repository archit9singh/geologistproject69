const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball0 = new rubber(260,140,30);
    ball1 = new rubber(300,120,30);
    ball2 = new rubber(350,130,20);
    ball3 = new rubber(280,170,60);


    stone1 = new stone(200,100);
    stone2 = new stone(200,100);
    stone3 = new stone(200,100);
    stone4 = new stone(200,100);



    iron1 = new irony(200,210);
    iron2 = new irony(280,220);
    iron3 = new irony(240,260);
    iron4 = new irony(260,270);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    ball0.display();
    ball2.display();
    ball3.display();
    ball1.display();


    
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();



    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();

    
 
}