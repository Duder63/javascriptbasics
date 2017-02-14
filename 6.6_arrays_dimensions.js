//JS can have arrays of arrays:

var matrix = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8]
];
console.log(matrix[2][1]);  // 7  (third array, second number)
console.log(matrix[1][2]);  // 5  (second array, third number)


//make each item within the array an array:

var x = new Array(10);
for (var i = 0; i < 10; i++) {
  x[i] = new Array(20);
}
//x[5][12] = 3;
console.log(x[5][12]);  // 3