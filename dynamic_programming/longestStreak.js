function longestStreak(str,k){
  var longestStreak=0
  var currentStreak=0
  var streakStart = 0
  var swaps = []

  for (var i=0;i<str.length;i++) {

    if (str[i]==="W") {
      if (k===0) {
        streakStart = swaps[0]
        currentStreak=i-streakStart
        swaps.shift()
        swaps.push(i)
      } else {
        //else if k is not 0
        k--
        swaps.push(i)
        currentStreak++
        if (currentStreak>longestStreak){
          longestStreak=currentStreak;
        }
      }
    } else {
      currentStreak++
      if (currentStreak>longestStreak){
        longestStreak=currentStreak;
      }
    }
  }


  return longestStreak
}
