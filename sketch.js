function setup() {
  createCanvas(600, 600);
  fixed = createSprite(300, 300, 60, 100);
  moving = createSprite(300, 300, 40, 60);

  moving.shapeColor = "green";
  fixed.shapeColor = "blue";
}

function draw() {
  background(rgb(137, 0, 255));

  moving.y = mouseY;
  moving.x = mouseX;

  if (
    moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x - moving.x < moving.width / 2 + fixed.width / 2 &&
    moving.y - fixed.y < moving.width / 2 + fixed.width / 2 &&
    fixed.y - moving.y < moving.width / 2 + fixed.width / 2
  ) {
    moving.shapeColor = "black";
    fixed.shapeColor = "white";
  } else {
    moving.shapeColor = "green";
    fixed.shapeColor = "blue";
  }

  drawSprites();
}
