var runner,runnerImage
var path,pathImage

function preload(){
  //pre-load images
pathImage=loadImage("path.png")
runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}
function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=5
  runner=createSprite(100,200)
  runner.addAnimation("runner",runnerImage)
  runner.scale=0.1
  
}

function draw() {
  background(0);
drawSprites()
if(path.y>400){
path.y=200
}

}
