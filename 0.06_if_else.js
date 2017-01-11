var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuckAndWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up!");
} else {
	console.log("Going down");	
};

if (elevatorBroken === true) {
	console.log("Going nowhere - get out!");		
} else {
	console.log("Select your floor, and hold on!");
};


//--------------------------------------------------------
// ------------Challenges: If/Else Statements ----------
//--------------------------------------------------------
//--------------------------------------------------------

/*-----------------------------------------------------------*/
//CHALLENGE: Bronze

//WRITE YOUR OWN CONDITIONAL USING BOOLEANS AND LOGICAL OPERATORS.
//Come up with a simple example

//Challenge: Silver
//Create a simple login console message.
// create 2 variables 1 for your users firstName, 2 for the boolean condition
// If login is true then print "You're Logged In!"
//Else if login is false then print "Please Sign In"


//CHALLEGE: Gold
//Set up a var with bankAccount and a var with debt.
//Also set up a difference var.
//Do some logic to show whether or not you will pay off your debt or prints out a message if you have extra money.

var bankAccount = 1000;
var debt = 1500;
var difference = (bankAccount > debt);

if (difference === true) {
	console.log("You have extra money after debt is paid!");
} else {
	console.log("You need more money, or a 'Sugar Mama'.");
};



