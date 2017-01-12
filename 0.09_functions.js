//function without parameters
function hello() {
	console.log("Hello World");
};

hello();

// function greeting() {
// 	console.log("Yoh Turner");
// };

// greeting();


//add number to functions
function printNumber() {
	console.log(1);
};

printNumber();

function sumNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num2 + num1);
};

function divNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num2 / num1);
};

function mulNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num2 * num1);
};

function subNum() {
	var num1 = 4;
	var num2 = 6;
	console.log(num2 - num1);
};

// sumNum();
// divNum();
// mulNum();
// subNum();



//function with parameters
function greeting(name) {
	//console.log("Good'ay " + name);
	return "Good'ay " + name;
};

//greeting("Dude");
var addGreeting = greeting("Dude") + ", how are you doing today?";
console.log(addGreeting);


function sumNum2(num1,num2) {
	return num1 + num2;
};

console.log(sumNum2(11,4));


function calculatePriceIndiana(quantity,price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = quantity * price + totalTax;
	return totalPrice;
};

console.log(calculatePriceIndiana(17,5));


//built-in functions
var today = Date();  //Date is built-in
console.log(today);


//built-in Objects
var today = new Date();
console.log(today.toDateString());




function checkOdd(num) {
	if (num % 2 === 0) {
		return "Yo Dude, this is even"
	} else {
		return "nah Dude it's odd"
	};
	//return num % 2 === 0;
};
console.log(checkOdd(12));

function divByThree(num) {
	if (num % 3 === 0) {
		return "This is divisible by 3";
	} else {
		return "Nope, not divisible by 3. Doh!";
	};
};
console.log(divByThree(73));


//Challenge: Create a personalized greeting for 2 names usng a function and a if statement
function greetingForTwo(name) {
	if (name == "Paul") {
		return "Hi Paul";
	} else if (name == "Jenn") {
		return "OMG How are you doing?!";
	} else {
		return "Don't talk to me, I've been coding all night >:(";
	};
};
var addGreeting2 = greetingForTwo("James");



//--------------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
Write a function with two strings as parameters.
		The function should concatenate the string.

Write a function that will help me easily calculate monthly bills.

Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.
 */

function hotDogs(quantity,price) {
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = price * quantity + totalTax;
	var hotDogCost = quantity + " hot dogs will cost you " + "$" + totalPrice + ".";
	return hotDogCost;
};
console.log(hotDogs(150,.9));









