var fixedRect, movingRect;
var rect1
var rect2
var rect3
var rect4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(1000,500,70,80)
  rect1.shapeColor="green"
  rect2 = createSprite(300,700,70,80)
  rect2.shapeColor="green"
  rect3 = createSprite(600,200,70,80)
  rect3.shapeColor="green"
  rect4 = createSprite(1100,300,70,80)
  rect4.shapeColor="green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect4)){
    movingRect.shapeColor = "red";
    rect4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }
  
  drawSprites();
}


