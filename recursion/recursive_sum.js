/**
 *                       Problem IV: Add List Values
 *
 *  Prompt: Given a list of integers, return the sum of all the values in the list.
 *
 *  Input: A list (array)
 *  Ouput: An integer (sum of values in list)
 *
 *  Example:
 *
 *    Input: [1,9,3,4,5]
 *    Output: 22
 **/
 
function sum(array){
  var sum=0;

  function traverse(array){
    if (!array.length){
      return
    }
    sum+=array[0]
    array.splice(0,1)
    traverse(array)
  }

  traverse(array)
  return sum
}

console.log(sum([1,9,3,4,5]))
