//JS programs can get confused on the distinguishing arrays and objects.
//The 'typeof' operator reports that the type of an array is 'object'.

//The Array.isArray() determines whether the passed value is an Array.

//Array.isArray(obj)
//obj --> The object to be checked.

var colors = ['white', 'black', 'gold', 'green', 'pink', 
	'blue', 'silver', 'red', 'orange', 'brown'
];

console.log(Array.isArray(colors));  // true

//all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
//FACT: Array.prototype itself is an array:
Array.isArray(Array.prototype);



var numbers_object = {
	'0': 'zero', '1': 'one', '2': 'two',
	'3': 'three', '4': 'four', '5': 'five',
	'6': 'six', '7': 'seven', '8': 'eight',
	'9': 'nine'
};

console.log(Array.isArray(numbers_object));  // false