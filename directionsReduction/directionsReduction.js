/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){  //O(n)
	var dirc = {};                                   // OR we can add object with key is the direction 
	var result = [];								//and value ids the oppsit of this direction and we check
	for (var i = 0; i < directions.length; i++ ){	//with for loop if the current value not equal the oppesit push it to result
		if(dirc[directions[i]]){					//
			dirc[directions[i]] += 1; 
		}else{dirc[directions[i]] = 1;}
	}

	if(dirc['NORTH'] > dirc['SOUTH'] ){
		result.push('NORTH');
	}
	else if(dirc['SOUTH'] > dirc['NORTH']){
		result.push('SOUTH');
	}
	else if(dirc['WEST'] > dirc['EAST'] ){
		result.push('WEST');
	}
	else if(dirc['EAST'] > dirc['WEST']){
		result.push('EAST');
	}



	return result;
};

