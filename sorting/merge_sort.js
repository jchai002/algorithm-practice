var merge = require('./merge');

function mergeSort(array) {
  var length = array.length,
      mid = Math.floor(length * 0.5),
      left = array.slice(0, mid),
      right = array.slice(mid, length);
  if (length === 1) {
    return array;
  }
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([8, 4, 7, 6, 5, 3, 4, 3, 2, 1]));
