let img
//let mySound
var FruitSwitch=1
var fruitX
var fruitY
var snakeLength = 50;
var snakeDirection = 'up' // 'down', 'left', 'right'
var snakeX = 200
var snakeY = 200
var xPosArray = []   // xPosArray[]
var yPosArray = []
function preload() {
    img = loadImage('help/ya4.png');
  soundFormats('wav');
  mySound = loadSound('help/beep1.wav');
}
function setup() {
  imageMode(CENTER)
   mySound = loadSound('help/beep1.wav');
  createCanvas(400, 400);
  background(120)
  strokeWeight(10)

  for(i=1;i<=snakeLength;i=i+1){
    xPosArray[i]=200
    yPosArray[i]=200
  }

}

function draw() {
  background(120);
  if (FruitSwitch==1){
  [fruitX,fruitY]=drawfruit(1)
   FruitSwitch=0
  mySound.play()}
  
image(img,fruitX,fruitY,50,50)
  // change snakeDirection
  if (key == 'ArrowUp'||key == 'w'){
    snakeDirection ='up'
  }
  else if(key == 'ArrowDown'||key == 's'){
    snakeDirection = 'down'
  }
  if (key=='d'||key == 'ArrowRight'||key=='D'){
  snakeDirection = 'right'  
  }
   if (key=='a'||key == 'ArrowLeft'){
  snakeDirection = 'left'  
  }
  print(snakeDirection)
  print(key)
  
  
  // moveSnake
  // Update last point
  if (snakeDirection == 'up')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]-1
    xPosArray[snakeLength] = xPosArray[snakeLength] 
    if(yPosArray[snakeLength]<0){
    yPosArray[snakeLength]=height
    }
  }
  
    if (snakeDirection == 'down')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]+1
    xPosArray[snakeLength] = xPosArray[snakeLength]
         if(yPosArray[snakeLength]>height){
    yPosArray[snakeLength]=0
    }
      
   }
    if (snakeDirection == 'left')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]
    xPosArray[snakeLength] = xPosArray[snakeLength]-1
    if(xPosArray[snakeLength]<0){
    xPosArray[snakeLength]=width
    }
    }
   if (snakeDirection == 'right')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]
    xPosArray[snakeLength] = xPosArray[snakeLength]+1
        if(xPosArray[snakeLength]>width){
    xPosArray[snakeLength]=1
    }
   }
  
  // Old points will go in consecutive/point point position
  for (i =1; i<snakeLength; i=i+1){
  yPosArray[i] = yPosArray[i+1]
    xPosArray[i] = xPosArray[i+1]
  } 
  //drawSnake
  for(i = 1; i <=snakeLength; i= i+1){
  point(xPosArray[i],yPosArray[i])
  }

  mouthX = xPosArray[snakeLength]
  mouthY = yPosArray[snakeLength]
  FruitSwitch = touch(mouthX,mouthY,fruitX,fruitY)
}