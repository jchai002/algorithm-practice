function maxSum(arr){
  var max=0
  var sum = 0
  for (var i =0; i<arr.length; i++){
    sum+=arr[i]
    if (sum > max) {
      max = sum
    }
  }
  return max
}

console.log(maxSum([6, -1, 3, 5, -10]))
