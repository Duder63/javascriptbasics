// this variable is a string type
var firstname = "Gary";
var lastname = "Shew";
var fullname = firstname + " " + lastname;

//concatenation (this is where you can build or combine something)
//console.log(firstname + " " + lastname);
//console.log(fullname);

//empty variables

//variable declararion or initialization
var num
//variable assignment
num = 2;
//console.log(num);

//empty string variable
var petsName = "";

petsName = "Gus";
//console.log(petsName);

//short hand operators
var age = 55;

//age += 1 is tha same as age = age + 1
//console.log(age += 1);
//age = age / 2
//console.log(age /= 2);
//age = age * 2
//console.log(age *= 2);

//DO NOT start vaiable name with integers
//var 2nite = "Wednesday Night"






//--------------------------------------------------------
//--------------------------------------------------------
// -------------- Challenge: Variables-----------
//--------------------------------------------------------
//--------------------------------------------------------

/*
CHALLENGE: Bronze
Come up with five different variables. Think of 
real world uses for integers and create variables based on 
those things. A few examples might include: 
*/

/*var myBankAccount = 2000000; //No dollar sign, we'll discuss how to add this later.
var numberOfHotDogsKobyashiAte = 39; //Check this stat. Not that's how many he ate.

console.log(myBankAccount);
console.log("Kobyashi:" + numberOfHotDogsKobyashiAte); /* <----String concatenation

/*-----------------------------------------------------------*/

//CHALLENGE: Silver
//Make a var called myNumber
//Set it to 0.
//Use shorthand to add 10 to it.
//Then use shorthand to subtract 1.
//Use shorthand to multiply by 9.
//Use shorthand to divide by 7.
//Just for practice, print myNumber to the console between each operation.
/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/

var myNumber = 0;
console.log(myNumber += 10);
console.log(myNumber -= 1);
console.log(myNumber *= 9);
console.log(myNumber /= 7);

/*-----------------------------------------------------------*/
//CHALLENGE: Gold
//Challenge #3 - Lifetime Supply
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount of glasses of water per day (as a number).
// Calculate how many glasses of water you would need for the rest of your life.
// Output the result to the screen like so: "You will need 5 million glasses to last you until the ripe old age of X".

var currentAge = 53;
var maxAge = 65;
var peanuts_Per_Day = 50;
var totalNutsNeeded = (maxAge - currentAge) * (peanuts_Per_Day * 365);
console.log("I will need " +  totalNutsNeeded + " peanuts to last you until the ripe old age of " + maxAge);



