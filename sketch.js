var fixedRect, movingRect;

 var obj1,ibj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(150,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(150,100,50,50);
  obj2 = createSprite(250,100,50,50);
  obj3 = createSprite(350,100,50,50);
  obj4 = createSprite(450,100,50,50);

  obj1.shapeColor = "yellow";
  obj2.shapeColor = "blue";
  obj3.shapeColor = "orange";
  obj4.shapeColor = "purple";

  movingRect.velocityX = 2
}

function draw() {
  background("lightblue");  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 
  
if(isTouching(movingRect,obj2)){
  obj2.shapeColor = "red";
 movingRect.shapeColor = "red";
}
else{
  obj2.shapeColor = "blue";
  movingRect.shapeColor = "green";
}


bounceOff(movingRect,fixedRect);

  drawSprites();
}

