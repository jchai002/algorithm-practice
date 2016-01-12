/**
 *                       Problem VII: Merge
 *
 *  Prompt: Merge two sorted lists into one sorted list.
 *
 *  Input: Two sorted lists (two array)
 *  Ouput: A sorted list (merged sorted lists)
 *
 *  Example:
 *
 *    Input: [1,3,5], [2,4,9,12]
 *    Output: [1,2,3,4,5,9,12]
 **/

function merge(array1,array2){
  var sorted =[]

  function compareValueAtIndex(index1,index2){
    //if we finished walking through array1
    if (index1===array1.length) {
      //add the left over values of array2 to the sorted portion
      for (var i=index2;i<array2.length;i++){
        sorted.push(array2[i])
      }
      return
    }

    //if we finished walking through array2
    if (index2===array2.length){
      //add the left over values of array1 to the sorted portion
      for (var i=index1;i<array1.length;i++){
        sorted.push(array1[i])
      }
      return
    }

    //if value at index 1 is lesser, push value into sorted, else push value at index2
    if (array1[index1]<array2[index2]){
      sorted.push(array1[index1])
      // recursively call index1+1 and index2 to make the next comparason
      compareValueAtIndex(index1+1,index2)
    } else {
      sorted.push(array2[index2])
      // recursively call index1+2 and index1 to make the next comparason
      compareValueAtIndex(index1,index2+1)
    }
  }
  compareValueAtIndex(0,0)
  return sorted
}

module.exports = merge
