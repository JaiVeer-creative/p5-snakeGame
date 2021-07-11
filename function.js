function drawfruit (n){
var x=random(width)
var y=random(height)
return [x,y]
}
function touch(mouthX,mouthY,fruitX,fruitY){
  let Eating = false
  // step 0: check if mouth reaches fruit
    if (abs(mouthX-fruitX)<25 
        && abs(mouthY - fruitY)<25 ){
      Eating = true
    }
  //  step 1: fruit should disappear and form at new place
  if (Eating == true) {
    FruitSwitch = 1
    Eating = false
    return FruitSwitch 
 
  }  
}
