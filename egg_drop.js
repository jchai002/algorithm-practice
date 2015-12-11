var eggDrop = function(safeHeight){
  tries=1;
  height=10;

  while (height<safeHeight){
      tries+=1
      height+=10
      console.log(height)
  }

  height-=10

  while (height<safeHeight){
    tries+=1
    height+=1
    console.log(height)
  }

  return tries
}

console.log(eggDrop(99))
//drop from 10 and up
//if egg breaks, goes up 1 by 1
//else go up by 1

//drop from n
//if breaks goes up by n-1
//else go up by 1
