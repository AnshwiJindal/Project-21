var wall
var bullet
var speed
var weight
var thickness

function setup() {
  createCanvas(1280,400);

  wall=createSprite(1200, 200, thickness, 200);
  wall.shapeColor="white"

  speed=random(223,331)
  weight=random(30,52)
  thickness=random(22,83)

 bullet=createSprite(50,200,30,10)
 bullet.shapeColor="white"
 bullet.velocityX=speed 

 
  
}

function draw() {
  background("black");  

 

  if(HasCollided(bullet,wall) ){
    bullet.velocityX=0
    bullet.collide(wall)
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
    wall.shapeColor="red"
     }

     

       if(damage<10){
        wall.shapeColor="green"
         }

        
  }

  drawSprites();

  textSize(40)
  fill("blue")
  text("Wall Reliability Test when bullet hits it",400,60)

  

}

function HasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}