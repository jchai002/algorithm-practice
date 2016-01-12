/**
 *  Homework I
 *
 *  Instructions:
 *   List the Time and Auxiliary Space Complexity of each of the following functions in the space provided
 **/


/**
 * Problem 1:
 *  Time Complexity: O(n)
 *  Auxiliary Space Complexity: 1
 **/

function firstTimesLast(array) {
  var result = null;

  if (array.length < 2) {
    return result;
  } else {
    result = array[0] * array[length-1];
    return result;
  }
};

/**
 * Problem 2:
 *  Time Complexity: n
 *  Auxiliary Space Complexity: n
 **/

function mostFrequentOccurrence(string) {
  var lowerString = string.toLowerCase(); //aux n
  var letters = {};
  var mostFrequent = [];

  for(var i = 0; i < lowerString.length; i++) {
    if (letters[lowerString[i]]) {
      letters[lowerString[i]] ++;
    } else {
      letters[lowerString[i]] = 1;
    }
  }
  // time n, aux at most 26 letters, therefore constant

  for(var key in letters) {
    if (!mostFrequent.length) {
      mostFrequent = [key, letters[key]];
    } else {
      if (letters[key] > mostFrequent[1]) {
        mostFrequent = [key, letters[key]];
      }
    }
  }
  //time at most 26 letters, so it's constant , aux is constant
  return mostFrequent[0];
};

/**
 * Problem 3:
 *  Time Complexity: O(n**2)
 *  Auxiliary Space Complexity: 1
 **/

function printUnorderedPairs(array) {
 for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      console.log(array[i] + "," + array[j]);
    }
  }
};

/**
 * Problem 4:
 *  Time Complexity: O(log n)
 *  Auxiliary Space Complexity: n
 **/

function sortedArraySearch(sortedArray, target) {
  var mid = Math.floor(sortedArray.length / 2);

  if (sortedArray[mid] === target) {
    return sortedArray[mid];
  } else if (sortedArray[mid] < target && sortedArray.length > 1) {
    return sortedArraySearch(sortedArray.splice(mid, Number.MAX_VALUE), target);
  } else if (sortedArray[mid] > target && sortedArray.length > 1) {
    return sortedArraySearch(sortedArray.splice(0, mid), target);
  } else {
    return -1;
  }
};

/**
 * Problem 5:
 *  Time Complexity: O(nm)
 *  Auxiliary Space Complexity: nm
 **/

function makeCombinedMatrix(arrayOne, arrayTwo) {
  var result = []; //time 1, aux 1
  var row; //is this using any memory aka aux space??

  for (var i = 0; i < arrayOne.length; i++) {
    row = [];

    for (var j = 0; j < arrayTwo.length; j++) {
      row.push(arrayTwo[j] + arrayOne[i]);
    }
    //time n, aux n

    result.push(row);
  }
  //time m, aux m

  return result;
};
