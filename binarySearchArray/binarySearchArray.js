/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {   
	var midIndex = Math.floor( array.length/2)
	var middelElement =  array[ midIndex];
	if(target < middelElement){
		for (var i = 0; i < midIndex; i++){ //O(log(n)) if the target greater than elemnt in the middel;
			if (array[i] === target){
				return i;
			}
		}
	}
	else if( target >= middelElement ){             // O(log(n)) if the target greater than elemnt in the middel;
		for (var i = midIndex; i < array.length; i++ ){
			if (array[i] === target){
				return i;
			}
		}
	}
	return -1 ; // if the target not in the array ;


  
};

