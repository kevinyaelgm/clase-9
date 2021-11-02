var box;
var box2;
var edges;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor="white"
  box2 = createSprite(370,70,30,30);
  box2.shapeColor="white"
}

function draw() 
{
  edges = createEdgeSprites();
  background(30);
  box.bounceOff(edges);
  box2.bounceOff(edges);
  box.displace(box2);
  if (keyDown("UP")){
    box.velocityY=-5;
  }
  if (keyDown("Down")){
    box.velocityY=5;
  }
  if (keyDown("left")){
    box.velocityX=-5;
  }
  if (keyDown("right")){
    box.velocityX=5;
  }
drawSprites();
}




