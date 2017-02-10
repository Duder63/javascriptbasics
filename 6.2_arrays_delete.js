//JS arrays are really objects,
// the delete operator can be used to remove elements from an array:

var myNumbers = ['zero', 'one', 'two', 'foo', 'fi'];
delete myNumbers[2];

console.log(myNumbers);  // myNumbers is ['zero', 'one', ' ', 'foo', 'fi']

//Splice method can do surgery on an array.
//The first argument is an ordinal (item's position) in the array.
// The second argument is the number of elements to delete.
myNumbers.splice(2, 1);

console.log(myNumbers);  // myNumbers is ['zero', 'one', 'foo', 'fi']
//NOTE: The property whose value is 'foo' has its key changed from '4' to '3'. 