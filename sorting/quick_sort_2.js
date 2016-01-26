function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var pivot = arr.pop();
    var bigger = [];
    var smaller = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        smaller.push(arr[i]);
      } else {
        bigger.push(arr[i]);
      }
    }
    return quickSort(smaller).concat(pivot, quickSort(bigger));
  }
}
