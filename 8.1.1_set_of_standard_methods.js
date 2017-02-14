//JS includes a small set of standard methods
// that are available on the standard types:

//Array

//array.concat(item…)
// Also see array.push(item...) 

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
// c is ['a', 'b', 'c', 'x', 'y', 'z', true]



//array.join(separator)

var a = ['a', 'b', 'c'];
a.push('d');
var c = a.join('');  // c is 'abcd';



//array.pop( )

//The pop method removes and returns the last element in this array.
// If the array is empty, it returns undefined.

var a = ['a', 'b', 'c'];
var c = a.pop( );  // a is ['a', 'b'] & c is 'c'