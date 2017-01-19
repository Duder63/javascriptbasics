//Object Literals
//Provide a very convenient notation for creating new object values.
//An object literal is a pair of curly braces surrounding zero or more name/value
//pairs. 
//A property’s name can be any string, including the empty string.

var empty_object = {};

var dude = {
 firstName: "Gary",
 lastName: "Shew"
};

//to call --> (object.property)
console.log(dude.firstName);



//A property’s value can be obtained from any expression, including another object literal.

//Nesting
var flight = {
	airline: "Zepplin",
	number: 007,
	departure: {
		IATA: "IND",
		time: "2017-04-01 11:05",
		city: "Indianapolis"
	 },
	arrival: {
		IATA: "LGA",
		time: "2017-04-01 13:00",
		city: "New York"
	}
};

console.log("All flight info:", flight);
console.log("Departure info: ", flight.departure);
console.log("Arrival time: ", flight.arrival.time);




