var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex]; //time 1, aux 1
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}; //time 1, aux 1

function reverseList(array) {
  var lastIndex=array.length-1
  var stopIndex=Math.floor(array.length/2)

  function traverse(index){
    if(index===stopIndex){
      return
    }
    swap(array,index,lastIndex-index)
    traverse(index+1)
  }

  traverse(0)
  return array
}

console.log(reverseList([1,2,3,4,5,6,7]))
