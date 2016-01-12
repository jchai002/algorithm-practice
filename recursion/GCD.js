/**
 *                       Problem VIII: Greatest Common Divisor (GCD)
 *
 *  Prompt: Given two integers, find the greatest common divisor.
 *
 *  Input:  Two integers
 *  Output: GCD (integer)
 *
 *  Example:
 *
 *    Input: 30, 12
 *    Output: 6
 *
 *    Input: 20, 10
 *    Output: 10
 **/

 function GCD(int1,int2){
   var commonDivisors=[]

   if (int1<int2){
     var lesser = int1
   }else {
     var lesser = int2
   }

   function findCommonDivisors(num){
     if (num===0){
       return
     }
     if (int1%num===0 && int2%num===0){
       commonDivisors.push(num)
     }
     findCommonDivisors(num-1)
   }

   findCommonDivisors(lesser)
   return Math.max.apply(null,commonDivisors)
 }

 console.log(GCD(20,10))
