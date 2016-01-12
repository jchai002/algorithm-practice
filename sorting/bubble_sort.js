function bubbleSort(arr){

    do {
      var swapped=false
      for (var i=1;i<arr.length;i++){
          if (arr[i]<arr[i-1]) {
            var temp = arr[i]
            arr[i] = arr[i-1]
            arr[i-1]=temp
            swapped=true
          }
      }
    } while(swapped)


}
