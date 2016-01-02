// Problem Statement
//
// Watson gives Sherlock an array A of length N. Then he asks him to determine if there exists an element in the array such that the sum of the elements on its left is equal to the sum of the elements on its right. If there are no elements to the left/right, then the sum is considered to be zero.
// Formally, find an i, such that, A1+A2...Ai-1 =Ai+1+Ai+2...AN.
//
// Input Format
// The first line contains T, the number of test cases. For each test case, the first line contains N, the number of elements in the array A. The second line for each test case contains N space-separated integers, denoting the array A.
//
// Output Format
// For each test case print YES if there exists an element in the array, such that the sum of the elements on its left is equal to the sum of the elements on its right; otherwise print NO.
//
// Constraints
// 1≤T≤10
// 1≤N≤105
// 1≤Ai ≤2×104
// 1≤i≤N
//
// Sample Input
// 2
// 3
// 1 2 3
// 4
// 1 2 3 3
//
// Sample Output
// NO
// YES
//
// Explanation
// For the first test case, no such index exists.
// For the second test case, A[1]+A[2]=A[4], therefore index 3 satisfies the given conditions.


//code

function test(testCase){
        for (var i=0;i<testCase.length;i++){
        var leftSum=0
        for (var j=0;j<i;j++){
            leftSum+=Number(testCase[j])
        }
        var rightSum=0
        for (var k=i+1;k<testCase.length;k++){
            rightSum+=Number(testCase[k])
        }
        if(leftSum===rightSum){
           return "YES"
        }
    }
    return "NO"
}


function processData(input) {
    var testCases=[]
    var inputArray=input.split("\n")
    inputArray.shift()
    for (var a=0;a<inputArray.length;a++){
        if(a%2!==0){
            testCases.push(inputArray[a])
        }
    }
    for (var b=0;b<testCases.length;b++){
        testCases[b]=testCases[b].split(' ')
    }

    var results=[]

    for (var c=0;c<testCases.length;c++){
        results.push(test(testCases[c]))
    }
    console.log(results.join("\n"))
}
