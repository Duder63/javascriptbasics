var empty_object = {};

var dude = {
 firstName: "Gary",
 lastName: "Shew",
 age: 53
};

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


//The 'typeof' operator is helpful in determining the type of a property:

typeof dude.age // 'number'
typeof dude.firstName // 'string'
typeof flight.arrival // 'object'
typeof flight.manifest // 'undefined'

//Be aware -> any property on the prototype chain can produce a value:
typeof flight.toString // 'function'
typeof flight.constructor // 'function'



//The 'hasOwnProperty' method, 
//returns true if the object has a particular property. 

//The hasOwnProperty method 
//does not look at the prototype chain:
flight.hasOwnProperty('number') // true
flight.hasOwnProperty('constructor') // false



