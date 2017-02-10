//Arrays

//An array literal is a pair of square brackets
// surrounding zero or more values separated by commas.

//An array literal can appear anywhere an expression can appear.

//The first value will get the property name '0',
// the second value will get the property name '1', and so on:

// The array literal:
var empty = [];
var colors = ['white', 'black', 'gold', 'green', 'pink', 
	'blue', 'silver', 'red', 'orange', 'brown'
];

empty.length   // 0
colors.length  // 10



// The object literal (array contructor):
var numbers_object = {
	'0': 'zero', '1': 'one', '2': 'two',
	'3': 'three', '4': 'four', '5': 'five',
	'6': 'six', '7': 'seven', '8': 'eight',
	'9': 'nine'
};

// colors inherits from Array.prototype
// number_object inherits from Object.prototype
// NOTE: colors gets the length property, while number_object does not


// JavaScript allows an array to contain any mixture of values:
var misc = [
	'string', 98.6, true, false, null, undefined,
	['nested', 'array'], {object: true}, NaN,
	Infinity
];

misc.length // 10

