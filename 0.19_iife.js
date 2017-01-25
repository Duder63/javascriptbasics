//IIFE - Immediate Invoked Functional Expressions


//Functional Expression
var greeting = function(name) {
	console.log("Hello " + name);
}("Gary");
//greeting("Gary");


var addNumbers = (function(num1, num2){
	console.log(num1 + num2)
})(3,4);
//addNumbers(3,4);


