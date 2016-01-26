/**
 *                       Problem II: Count Occurences
 *
 *  Prompt: Given a list of elements, count the occurences of a specific element inside the list
 *
 *  Input: A list (array), Element (Int or Str)
 *  Ouput: An integer (occurence of element)
 *
 *  Example:
 *
 *    Input: [1,9,3,4,5,1], 1
 *    Output: 2
 **/

function countOccurence(array, int) {
  var count = 0;

  function traverse(array) {
    if (!array.length) {
      return;
    }
    if (array[0] === int) {
      count++;
      array.splice(0, 1);
      traverse(array);
    } else {
      array.splice(0, 1);
      traverse(array);
    }
  }
  traverse(array);
  return count;
}

console.log(countOccurence([1, 9, 3, 4, 5, 1, 1, 1], 1));
