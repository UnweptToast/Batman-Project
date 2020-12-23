const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops = [];
var boy;
var sprite;
var boyAnim;
var thunder;
//var thunderImage1, thunderImage2, thunderImage3, thunderImage4;
var thunderImage

function preload() {
    boyAnim = loadAnimation("images/Walking Frame/walking_1.png")
    //thunderImage1 = loadImage("1.png")
}

function setup() {
    engine = Engine.create();
    world = engine.world;

    sprite = createSprite(400, 400)
    sprite.addAnimation("walk", boyAnim)
    sprite.scale = 0.5

    createCanvas(900, 600);
    for(var i = 1; i <= 100; i++)
        drops.push(new Raindrop(random(0, width), random(0, -width), 3))

        //console.log(engine);

    boy = new Umbrella(415, 343, 100)    
}

function draw() {
    frameRate(60);
    background("black");

    Engine.update(engine);

    for(i = 0; i < drops.length;i++) {
        drops[i].display();
    }


    fill("grey")
    rectMode(CENTER)
    rect(width/2, height - 20, width, 40)

    //boy.display();

    spawnLightning();
    drawSprites();
}

function spawnLightning() {
    if(frameCount % 120 === 0) {
        thunder = createSprite(random(0, width),height/2 - 200);
        var rand = Math.round(random(1, 4));
        thunderImage = loadImage("images/thunderbolt/" + rand + ".png")

        thunder.addImage(thunderImage);
        thunder.depth = sprite.depth - 1
        //thunder.y = 0 + thunder.height
        thunder.scale = random(5,8)/10
        thunder.lifetime = Math.round(random(10, 20))
    }
}