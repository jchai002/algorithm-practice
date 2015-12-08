var insert = function(array, rightIndex, value) {
    var i;
    for(var i = rightIndex; i >= 0 && array[i] > value; i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

var insertionSort = function(array) {
    for(var i=1;i<array.length;i++){
       insert(array,i-1,array[i]);
    }
};



console.log(insertion_sort([1,3,2,5,4,7,6,-1,9,8]))
