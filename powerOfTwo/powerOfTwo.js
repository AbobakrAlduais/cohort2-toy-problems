/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var newNum = Math.pow(2,num);
	var str = newNum +"";
	var result = 0;
	if (isNaN(num)  ){
		return 0;
	}
	for (var i = 0; i < str.length; i++){
		if(str[i] !== 'e' && str[i] !== '.' && str[i] !== '+'){
			result = result+ parseInt(str[i]);
		}
		else{
			var num2 = str.split('+');                 // num2 = ["1.0715086071862673", "301"]
			result+= powerOfTwo(parseInt(num2[1]));
		}
	}
	   
	return result;
}