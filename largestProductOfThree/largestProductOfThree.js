/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	if (array.length <3 ){
		return 'array small'; 
	}
	array.sort(function(a,b){return a-b})
	var product = array[array.length-3] * array[array.length-2] * array[array.length-1];
	if (array[0] < 0 && array [1] < 0){
		var negativeProdect = array[0] * array [1] *array [array.length-1]; // if there is two number negative ;
	}
	if(product > negativeProdect){
		return product;
	}
	return negativeProdect;
	 
};




