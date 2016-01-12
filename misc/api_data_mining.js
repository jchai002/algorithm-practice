// given api, what's the fastest way to get JSON with ID 1-100 into results
//
// max rate = 4 requests per second

var counter = 1;
var result =[];
var err =[];
var newErr=[];
var index=0;

var initial = setInterval(function(){
    request('api.com'+counter, function(resp,err){
      if (err){
        err.push(resp.id)
        console.log('rate limit exceeded')
      } else {
        result.push(resp.body)
      }
      counter++;
      if(counter>100){
        clearInterval(initial)
      }
    })
  },1000)

var errored= setInterval(function(){
  request('api.com'+runOn[index],function(){
    if (err){
      newErr.push(resp.id)
    } else {
      result.push(resp.body)
      index++
      if (index===4){
        index=0;
      }
    }
  })
},1000)
