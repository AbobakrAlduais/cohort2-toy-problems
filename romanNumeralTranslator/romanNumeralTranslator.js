
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
<<<<<<< HEAD

	var result = 0;
	romanNumeral = romanNumeral.toUpperCase().split('');

	for (var i = 0; i < romanNumeral.length; i++){
		if(!DIGIT_VALUES[romanNumeral[i]]){
			return null;
		}
	result = DIGIT_VALUES[romanNumeral[i]] < DIGIT_VALUES[romanNumeral[i+1]] ? result - DIGIT_VALUES[romanNumeral[i]] : result + DIGIT_VALUES[romanNumeral[i]] 
	
}
return result;
=======
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
}