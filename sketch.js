function setup() {
  createCanvas(600, 600);
  fixed = createSprite(300, 300, 60, 100);
  moving = createSprite(20, 300, 40, 60);

  moving.velocityX = 2;

  rect1 = createSprite(100, 100, 40, 40);
  rect2 = createSprite(200, 100, 40, 40);
  rect3 = createSprite(300, 100, 40, 40);
  rect4 = createSprite(400, 100, 40, 40);
  rect5 = createSprite(500, 100, 40, 40);

  moving.shapeColor = "green";
  fixed.shapeColor = "blue";
}

function draw() {
  background(rgb(137, 0, 255));
  bounceOff(moving, fixed);
  //moving.y = mouseY;
  //moving.x = mouseX;

  //arguments
  if (isTouching(fixed, moving)) {
    moving.shapeColor = "black";
    fixed.shapeColor = "white";
  } else {
    moving.shapeColor = "green";
    fixed.shapeColor = "blue";
  }

  if (isTouching(rect1, moving)) {
    moving.shapeColor = "black";
    rect1.shapeColor = "orange";
  } else {
    moving.shapeColor = "green";
    rect1.shapeColor = "grey";
  }

  if (isTouching(rect2, moving)) {
    moving.shapeColor = "black";
    rect2.shapeColor = "yellow";
  } else {
    moving.shapeColor = "green";
    rect2.shapeColor = "grey";
  }

  if (isTouching(rect3, moving)) {
    moving.shapeColor = "black";
    rect3.shapeColor = "white";
  } else {
    moving.shapeColor = "green";
    rect3.shapeColor = "grey";
  }

  if (isTouching(rect4, moving)) {
    moving.shapeColor = "black";
    rect4.shapeColor = "white";
  } else {
    moving.shapeColor = "green";
    rect4.shapeColor = "grey";
  }

  if (isTouching(rect5, moving)) {
    moving.shapeColor = "black";
    rect5.shapeColor = "white";
  } else {
    moving.shapeColor = "green";
    rect5.shapeColor = "grey";
  }

  drawSprites();
}

//parameters
