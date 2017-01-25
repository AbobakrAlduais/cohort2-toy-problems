/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var result = [];
	var row = 0;
	var col = 0;
	var maxCol = matrix.length-1;

	for (col = 0; col < matrix.length -1; col++){    //first row
		result.push (matrix[row][col]);
	}
	for(row = 0; row < matrix.length; row++){        //last colom
		
		result.push(matrix[row][maxCol]);
	}
	if(row === maxCol)                              //last row
	for(;maxCol > 0; maxCol--){
		result.push(matrix[row][maxCol])
		col = 0;
	}
	for (row = row-1; row < matrix.length-1; row--){  
		result.push(matrix[row][col])

	}
	return result;

};
