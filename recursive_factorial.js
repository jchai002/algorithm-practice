var factorial = function(n) {
	// base case:
	if(n===0){
	    return 1;
	}
	// recursive case:
	else {
	    return n * factorial(n-1);
	}
}; 
