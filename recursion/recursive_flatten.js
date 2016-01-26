
 /**
  *                       Problem V: Flatten
  *
  *  Prompt: Given a list of lists, flatten the nested lists.
  *
  *  Input: A list of lists (array of nested arrays)
  *  Ouput: An array (flattened lists)
  *
  *  Example:
  *
  *    Input: [[1,9],[3,4],[5,[6,[7]]]]
  *    Output: [1,9,3,4,5,6,7]
  **/

function flatten(array) {
  var result = [];

  function traverse(array) {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        result.push(array[i]);
      } else {
          traverse(array[i]);
      }
    }
  }

  traverse(array);
  return result;
}

console.log(flatten([[1, 9], [3, 4], [5, [6, [7]]]]));
