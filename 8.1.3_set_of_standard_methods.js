//JS includes a small set of standard methods
// that are available on the standard types:

//array.shift( )
//Removes the first element from an array.
// If the array is empty, it returns undefined.

var a = ['a', 'b', 'c'];
a.shift( );

console.log(a); // ['b', 'c']

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

console.log(fruits);  // [ 'Orange', 'Apple', 'Mango' ]


//array.slice(start,end)
//Makes a shallow copy of a portion of an array.
// The first element copied will be array[start].
// It will stop before copying array[end].

var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, 3);

console.log(a);      // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']