/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

var buildTriangle = function(numOfRows){
	var result = [[1]];
	var currentRow = [];
	var preRaw = 0;
	var firstNum = 0;
	var secondNum = 0;
	while (result.length < numOfRows){
		preRaw = result[result.length-1];
		for (var i = 1; i < preRaw.length; i++ ){
			firstNum = preRaw[i-1];
			secondNum = preRaw[i];
			currentRow.push(firstNum + secondNum);
		}
		result.push(currentRow);
		
	}
	return result;

		
}
		