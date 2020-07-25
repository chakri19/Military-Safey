//global variables
var wall, bullet;
var weight, speed, thickness;

function setup() {
  createCanvas(1600,400);

  //speed,weight, and thickness will be randomized
  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83);

  //assigning properties to the bullet and wall
  bullet = createSprite(40, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);

  //giving velocity and weight to the bullet
  bullet.velocityX = 30;
  bullet = weight;

  bullet.shapeColor = "yellow";
  wall.shapeColor = (80,80,80);
}

function draw() {

  background("black");

  //if condition for when bullet collides with wall
  if (hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damn = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    //damage being greater than 10 shows that it is ineffective
    if (damn>10){
      wall.shapeColor = "red";
    }

    //damage being less than 10 shows that it is effective
    if (damn<10){
      wall.shapeColor = "green";
    }
  }
  
  drawSprites();
}

//this function will provide grounds for bullet colliding with wall
function hasCollided (lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}