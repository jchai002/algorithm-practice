function findMax(array){
  console.log("comparing", array[0], "and", array[1])
  if (array.length===1){
    return array[0]
  }
  if (array[0]>array[1]){
    array.splice(1,1)
    return findMax(array)
  } else {
    array.splice(0,1)
    return findMax(array)
  }
}

console.log(findMax([1,2,7,3,4,5,6]))
