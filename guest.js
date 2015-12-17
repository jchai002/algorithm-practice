//max combination of days to stay
//array's index is day number
//array's value is how many days they want to stay

//for each index, if the value at that index is more than the values stored in the indexes following it, then guest at that index can stay

function traverse(arr){
  max_days = 0

  for (var day=0;day<arr.length;day++){
    total_value = 0;
    days_occupied=day+arr[day]
    for (var j=day+1; j<days_occupied || arr.length;j++){
      total_value += arr[j]
      console.log(total_value)
    }
    if (arr[day]> total_value) {
      max_days+=arr[day]
      day+=arr[day]
    } else {
      max_days+=total_value
    }
  }

  return max_days
}

console.log(traverse([1,3,7,1,2]))
