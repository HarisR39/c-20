var wall, car;
var speed, weight;

function setup() {
  createCanvas(800,400);
  wall= createSprite(700, 200, 20, 120)
  wall.shapeColor= "white";

  speed= random(55, 90);
  weight= random(400, 1500);


  car= createSprite(400, 200, 40, 20)
  car.velocityX= speed/15;
}
 

function draw() {
  background(0);  
  drawSprites();

  if(car.collide(wall)){

  if(((0.5* weight* speed* speed)/ 22500)< 100){

    car.shapeColor= "green"

  }

   if(((0.5* weight* speed* speed)/ 22500)>100 && ((0.5* weight* speed* speed)/ 22500)<180 ){

    car.shapeColor= "yellow"

  }

  if (((0.5* weight* speed* speed)/ 22500)>180){

    car.shapeColor= "red"

}
}
}