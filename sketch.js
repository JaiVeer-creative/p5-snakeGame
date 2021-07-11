let img
let score=0
//let mySound
var FruitSwitch=1
var fruitX
var fruitY
var snakeLength = 5;
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
  rectMode(CENTER)
  frameRate(5)
}

function draw() {
 if(FruitSwitch!=-1){
    background(120);
  print (score)
 textSize(16)
  text ('score',25,20)
   text (score,15,40)
  
  if (FruitSwitch==1){
 //SPECIAL EVENT HAS OCCURRED
    
    [fruitX,fruitY]=drawfruit(1)
   FruitSwitch=0
  score=score+10
  mySound.play()
  incrementLength = 1
 
  snakeLength+=incrementLength;
    
  for(i = 1;i<=incrementLength;i++){
  xPosArray = concat(xPosArray,xPosArray[xPosArray.length-1]) ;
  yPosArray = concat(yPosArray,yPosArray[yPosArray.length-1]) ;
  }

}  

image(img,fruitX,fruitY,50,50)
  // change snakeDirection
  if (key == 'ArrowUp'||key == 'w'||key=='W'){
    snakeDirection ='up'
  }
  else if(key == 'ArrowDown'||key == 's'||key=='S'){
    snakeDirection = 'down'
  }
  if (key=='d'||key == 'ArrowRight'||key=='D'){
  snakeDirection = 'right'  
  }
   if (key=='a'||key == 'ArrowLeft'||key=='A'){
  snakeDirection = 'left'  
  }
  print(snakeDirection)
  print(key)
  
  
  

  // moveSnake
  // Update last point
  if (snakeDirection == 'up')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]-10
    xPosArray[snakeLength] = xPosArray[snakeLength] 
    if(yPosArray[snakeLength]<0){
    yPosArray[snakeLength]=height
    }
  }
  
    if (snakeDirection == 'down')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]+10
    xPosArray[snakeLength] = xPosArray[snakeLength]
         if(yPosArray[snakeLength]>height){
    yPosArray[snakeLength]=0
    }
      
   }
    if (snakeDirection == 'left')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]
    xPosArray[snakeLength] = xPosArray[snakeLength]-10
    if(xPosArray[snakeLength]<0){
    xPosArray[snakeLength]=width
    }
    }
   if (snakeDirection == 'right')  {
    yPosArray[snakeLength] = yPosArray[snakeLength]
    xPosArray[snakeLength] = xPosArray[snakeLength]+10
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
  strokeWeight(0)
  fill(255)
  circle(xPosArray[i],yPosArray[i],10)
  }
  
  mouthX = xPosArray[snakeLength]
  mouthY = yPosArray[snakeLength]
 
  fill(0)
  if (snakeDirection =='up' || snakeDirection =='Down'){
  rect(mouthX,mouthY-5,5,30)}
  else{
  rect(mouthX-5,mouthY,30,5)}
  
  
  fill(255,0,0)
  circle(mouthX,mouthY,20)
  
  
  fill(255)
  FruitSwitch = touch(mouthX,mouthY,fruitX,fruitY)
  
  
  if (FruitSwitch==1){
  fill(255,0,0)
  for (i=0;i<xPosArray.length;i=i+1){
    circle(xPosArray[i],yPosArray[i],10)
    
  }
  fill(255)
  }
if(score>10){
  for(let i=0;i<xPosArray.length-2;i=i+1){
   if(xPosArray[i]==mouthX && yPosArray[i]==mouthY){
FruitSwitch=-1
  }
  }
  }
}
if (FruitSwitch==-1){
background(0,0,0)
text('GAMEOVER',200,200)

}
textAlign(CENTER);
  textSize(70)
}
