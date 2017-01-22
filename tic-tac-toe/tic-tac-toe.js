/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	var hascolorrow = hasrowORColumSolved(board);
	var hasdialog = hasDialogSolved(board);
	var hasreversdialog = hasReversDialogSolved(board);
	if(hascolorrow ===1 || hasdialog ===1 || hasreversdialog===1){
		return 1
	}
	else if(hascolorrow ===2|| hasdialog ===2 || hasreversdialog===2){
		return 2
	}

	else {return -1}

	
	 
};


function hasrowORColumSolved(board){
	var countRow = 0;
	var countCol = 0;
	for(var j=0; j<board[0].length; j++){
		countRow = 0;
		countRow = 0;
		for (var i = 0; i < board[0].length; i++){
			countRow+=board[j][i];
			countCol+=board[i][j]
		}	
			if(countRow === 3 || countCol === 3 ){
				return 1
			}
			else if (countRow === 6 || countCol ===6){
				return 2
			}
			
	}	
		
}

function hasDialogSolved(board){
	count = 0;
	for (var i = 0; i < board[0].length; i++){
		count+=board[i][i];

	}
	if(count === 3){
				return 1;
			}
			else if (count === 6){
				return 2;
			}
}
function hasReversDialogSolved(board){
	count = 0;
	var x = board[0].length;
	for (var i = 0; i < board[0].length; i++){
		x--;
		count+=board[i][x];

	}
	if(count === 3){
				return 1;
			}
			else if (count === 6){
				return 2;
			}
}



