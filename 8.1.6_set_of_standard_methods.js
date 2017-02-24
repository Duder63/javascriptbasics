//JS includes a small set of standard methods
// that are available on the standard types:

//Array

//array.unshift(item…)

//Is like the push method except that it shoves the items
// onto the front of this array instead of at the end.

var a = [1, 2, 3];
a.unshift(4, 5);

console.log(a);  // [4, 5, 1, 2, 3]


var q = ['a', 'b', 'c'];
var r = q.unshift('?', '@');
// q is ['?', '@', 'a', 'b', 'c']
// r is 5