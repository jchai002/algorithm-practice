function deepEquals(obj1,obj2){
  var result = true

  function traverse(objA,objB){
    for (var key in objA){
      if (!objB[key]) {
        result = false
        return
      }
      else if(typeof objA[key]==="object" && typeof objB[key]==="object"){
        traverse(objA[key],objB[key])
      } else {
        if (objA[key]!==objB[key]){
          result = false
          return
        }
      }
    }
  }

  traverse(obj1,obj2)
  traverse(obj2,obj1)
  return result
}

console.log(deepEquals({1:1,2:{2:{1:2}}},{1:1,2:{2:{1:2}}}))
