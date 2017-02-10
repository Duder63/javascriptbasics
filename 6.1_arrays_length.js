// Every array has a length property.

// The length property is the largest integer property name in the array plus one.
// This is not necessarily the number of properties in the array:

var myArray = [];
myArray.length  // 0

//If you store an element with a subscript that is greater than or equal to the current length,
// the length will increase to contain the new element.
//There is no array bounds error.

myArray[10] = true;

console.log(myArray.length); // 11  // myArray contains one property.


//NOTE: The length can be set explicitly:
myNumbers.length = 3;  // numbers is ['zero', 'one', 'two']

//A new element can be appended to the end of an array by assigning to the array’s current length:
myNumbers[myNumbers.length] = 'foo';
// numbers is ['zero', 'one', 'two', 'foo']

myNumbers.push('fi');
// myNumbers is ['zero', 'one', 'two', 'foo', 'fi']
