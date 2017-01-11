var firstname = "Gary";
var message = firstname + ": " + 53;
var num = 32;
//typeof will return what type (number, string)
//console.log(typeof message);
//console.log(typeof num);

//quotes?
var lastName = 'Shew';
//console.log(typeof lastName);
var greeting = "How's your day?";
//console.log(typeof greeting);

// the \ charactor allows nested '' or ""
var kensGreeting = 'Ken says "How\'s your day?"';
//console.log(typeof kensGreeting);

//string methods
/*console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

console.log(greeting.split(" "));

console.log(greeting.slice(1));*/

//--------------------------------------------------------
// --------------  Challenge: Strings-------------
//--------------------------------------------------------
//--------------------------------------------------------

//Challenge: Bronze
//Write a string that has two variables. Output should be something like this: 
//I graduated from TooCoolForSchool High School in 1994.

//Challenge: Silver
//Create one variable that holds a string that prints out three other variables. The three other //variables should be the make, model, and year of your car.
// “I drive a 1968 Chevy Impala.”

var carMake = "Toyota";
var carModel = "Tundra";
var carYear = 2005;
var aboutMyCar = "I drive a " + carYear + " " + carMake + " " + carModel + ".";

console.log(aboutMyCar);

//Challenge: Gold
//Create a variable called age. Give the age a value.
//Use a conditional to check the age.
//If the age is 18, console.log('You are an adult');
//If the age is less than 18, console.log('You are a minor');

//--------------------------------------------------------

var age = 53;
if (age >= 18 && age < 50) {
	console.log('You are an adult');
} else if (age >= 50) {
	console.log('You are an AARP member');
} else {
	console.log('You are a minor');
};

