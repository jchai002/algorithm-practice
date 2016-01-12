/**
 *                       Problem III: Reverse List Order
 *
 *  Prompt: Given a list of elements, reverse the order of the list.
 *          Try this problem by reversing both in place and by creating a new output array.
 *
 *  Input: A list (array)
 *  Ouput: A list (reversed input array)
 *
 *  Example:
 *
 *    Input: [1,9,3,4,5]
 *    Output: [5,4,3,9,1]
 **/
 
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
