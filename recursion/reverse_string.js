function strReverse(str){
	result=''

	function traverse (depth){
		if (depth===str.length-1) {
			result += str[depth]
			return
		}
		traverse(depth+1)
		result += str[depth]
	}

	traverse(0)
	return result
}
