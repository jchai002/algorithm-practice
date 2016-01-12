function countOccurence(array,int){
  var count = 0

  function traverse(array){
    if (!array.length){
      return
    }
    if (array[0]===int){
      count++
      array.splice(0,1)
      traverse(array)
    } else {
      array.splice(0,1)
      traverse(array)
    }
  }
  traverse(array)
  return count
}

console.log(countOccurence([1,9,3,4,5,1,1,1],1))
