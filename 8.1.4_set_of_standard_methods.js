//JS includes a small set of standard methods
// that are available on the standard types:

//Array

//array.sort(comparefn)


var n = [4, 8, 15, 16, 23, 42];

console.log(n.sort());   // [ 15, 16, 23, 4, 42, 8 ]


//The following function will sort the array ascending
n.sort(function (a, b) {
 return a - b;
});

console.log(n);   // [ 4, 8, 15, 16, 23, 42 ]


//To be able to sort any array of simple values:
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
 if (a === b) {
 return 0;
 }
 if (typeof a === typeof b) {
 return a < b ? -1 : 1;
 }
 return typeof a < typeof b ? -1 : 1;
});
console.log(m);   // [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']

