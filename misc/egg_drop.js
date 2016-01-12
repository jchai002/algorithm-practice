//drop from 10 and up
//if egg breaks, height goes up by 1
//else go up by 10


var eggDrop = function(safeHeight){
  tries=1;
  height=10;

  while (height<safeHeight){
      tries+=1
      height+=10
  }

  height-=10

  while (height<safeHeight){
    tries+=1
    height+=1
  }

  return tries
}

// console.log(eggDrop(99))

//drop from n and up
//if breaks goes up by n-1
//else go up by 1


var eggDrop2 = function(increment, safeHeight){
  tries=1;
  height=increment;

  while (height<safeHeight){
      tries+=1
        increment--
      height+=increment
      console.log("drop from floor:",height)
  }

  height-=increment

  while (height<safeHeight){
    tries+=1
    height+=1
    console.log("drop from floor:",height)
  }

  console.log("total tries",tries)
  return tries
}

eggDrop2(17,99)
