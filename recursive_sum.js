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
