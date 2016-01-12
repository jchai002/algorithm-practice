 /**********************************************************************
  *                          Homework II                               *
  *                                                                    *
  *  Prompt: Given a set S, return the power set P(S), which is        *
  *          a set of all subsets of S.                                *
  *                                                                    *
  *  Input:  A String                                                  *
  *  Output: An Array with the power set of the input string           *
  *                                                                    *
  *  Example: S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']*                                                               *
  *                                                                    *
  *  Note: There should not be any duplicates in the power set         *
  *        ('ab' and 'ba' are considered the same), and it will always *
  *        begin with an empty string ('')                             *
  *                                                                    *
  **********************************************************************/

  // function wrapper(S){
    var set=[];
  //   var arr= S.split(" ");

    function findPowerSet(arr){
      if (arr.length<1) {
        set.push('')
        return
      } else {
        var copy = arr.slice()
        for (var i=0;i<arr.length;i++){
          var copy = arr.slice()
          copy.splice(i,1)
          set.push(copy.join(''))
          console.log(set)
        }
        console.log("after the for loop arr is",arr)
        newArr=arr.slice(1,arr.length)
        console.log("sending in newArr",newArr)
        findPowerSet(newArr)
      }
    }

  // }

var a=['a','b','c','d']

findPowerSet(a, a.length)
