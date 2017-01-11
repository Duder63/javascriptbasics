//booleans express either
//true or false
//on or off
var hungry = true;

//Comparison operators in JS
//= assigns inforamation into a variable
//== evaluates (equal or not) values (returns true or false)
var isTrue = 1 == 1;
//console.log(isTrue);

//compares type and value
var numOne = 1 === "1";
//console.log(numOne); //this will be false

// ! (bang) states 'is not'
var num1 = 35;
var num2 = 34;
//console.log(num1 != num2);

var foo = true;
//console.log(!foo);


//--------------------------------------------------------
// ------ Challenge: Boolean Logic  ----------
//--------------------------------------------------------
//--------------------------------------------------------
/*---------------------------------------------------------*/


/*CHALLENGE: Bronze
Create 5 boolean variables that would be used in everyday programming
Using the boolean variables created above integrate logical and comparison operators to return true and false statements in the console.
*/

/*CHALLENGE: Silver
Write your own conditional that deals with Boolean Operators and Boolean Logic. Get as complicated as you want, just make sure it runs. Sign up for an account on Repl.io. Add the code there and send it to James, Paul, and Kenn. You can do that on Slack by using the @ symbol for all of us.
*/

/*CHALLENGE: Gold 
I want to order some Colts gear online(Jona, go ahead with the Bengals(boo)), and I'm not sure 
which courier service to use yet. I want to know which one to use
for Next Day Air, 2 day air, 3 day ground, and whenever. Can you write
an if/else statement that helps me pick the best one? It's just your opinion here.
*/

var shipping = 1;

if (shipping === 1) {
	console.log("Your shipment will be sent Next Day Air.");
} else if (shipping === 2) {
	console.log("Your shipment will be sen 2 Day Air.");
} else {
	console.log("Your shipment will be sent Ground.");	
};






