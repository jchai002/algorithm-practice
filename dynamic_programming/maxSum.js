function maxSum(arr) {
  var maxSum = arr[0];
  var resultMax = arr[0];
  for (var i = 0; i < arr.length; i++) {
      maxSum = Math.max(arr[i], maxSum + arr[i]);
      resultMax = Math.max(resultMax, maxSum);
  }
  return resultMax;
}

console.log(maxSum([-2, 10]));
