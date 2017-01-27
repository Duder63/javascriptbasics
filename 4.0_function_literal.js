// Function literal has four parts:
// 1. The first part is the reserved word function.
// 2. The optional second part is the function’s name.
// 3. The third part is the set of parameters of the function, wrapped in parentheses.
// 4. The fourth part is a set of statements wrapped in curly braces.

function addNum(a, b) {
 return a + b;
};
addNum(4,5);

function getArea(width, height){
	return width * height;
}
getArea(12,3);


//Function without parameters
function sayHello() {
	document.write('Hello!');
	//console.log("Hello World");
};
sayHello();


//A function that takes the numbers from the input fields (by their ID) in an html form,
//then returns the result to the designated/targeted ID:
function addNum() {
	var numOne = parseInt(document.getElementById("numOne").value);
	var numTwo = parseInt(document.getElementById("numTwo").value);
	var numTotal = numOne + numTwo;
	document.getElementById("DOMnumTotal").innerHTML = numTotal;
}