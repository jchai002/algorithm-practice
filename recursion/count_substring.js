/**
 *                       Problem X: Count Substring
 *
 *  Prompt: Given a string and a non-empty substring, "sub", compute recursively if at least n copies of sub appear in the string
 *          somewhere, possibly with overlapping substrings. N will be non-negative.
 *
 *  Input:  A String, A Substring
 *  Output: Integer (Count of how many times substring appears)
 *
 *  Example:
 *
 *    Input: "acatisacatisadog", "cat"
 *    Output: 2
 *
 *    Input: "ccoowcowow", "cow"
 *    Output: 1
 **/

function countSubstring(str, sub) {
  var result = 0;

  function traverse(str, sub) {
    if (str.length < sub.length) {
      return;
    }
    var found = true;
    for (var i = 0; i < sub.length; i++) {
      if (str[i] !== sub[i]) {
        found = false;
      }
    }

    if (found) {
      result++;
    }
    traverse(str.slice(1, str.length), sub);
  }

  traverse(str, sub);
  return result;
}
