//JS includes a small set of standard methods
// that are available on the standard types:

//Array

//array.push(item…)

//The push method appends items to the end of an array. 
// It modifies the array and appends array items whole.
// It returns the new length of the array:

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.push(b);

console.log(a);  // c is 4
                  // a is ['a', 'b', 'c', ['x', 'y', 'z'] ]


var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

vegetables.push('celery', 'beetroot');

console.log(vegetables);  // ['parsnip', 'potato', 'celery', 'beetroot']



//array.reverse( )
//Modifies the array by reversing the order of the elements.

var a = ['a', 'b', 'c'];

a.reverse( );

console.log(a);  // ['c', 'b', 'a']


