/**
 *                       Problem VI: Pivot
 *
 *  Prompt: Given a list of integers and a pivot index, split the list in two in regards to the pivot.
 *          Place all elements less than the element at the pivot index in the first list, and all other
 *          elements into the second list.
 *
 *  Input: A list (array), Pivot Index (integer)
 *  Ouput: A list of two lists (two arrays organized by pivot element)
 *
 *  Example:
 *
 *    Input: [1,9,4,3,5], 4
 *    Output: [[1,4,3],[5,9]]
 **/

function pivotIterative(array,index) {
  var pivotValue=array[index]
  var lessThan=[]
  var others=[]

  for (var i=0;i<array.length;i++){
    if(array[i]<pivotValue){
      lessThan.push(array[i])
    } else {
      others.push(array[i])
    }
  }


  return [lessThan,others]
}

function pivotRecursive(array,pivotIndex) {
  var pivotValue=array[pivotIndex]
  var lessThan=[]
  var others=[]
  var stopIndex=array.length

  function traverse(index){
    if (index===stopIndex){
      return
    }

    if (array[index]<pivotValue){
      lessThan.push(array[index])
    } else {
      others.push(array[index])
    }
    traverse(index+1)
  }

  traverse(0)
  return [lessThan,others]
}

console.log(pivotRecursive([1,9,4,3,5], 4))
