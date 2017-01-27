// Global variables can hold all of the assets of your application.
// Global variables weaken the resiliency of programs and should be avoided.
// Solution -> Create a single global variable for your application.

var MYAPP = {};

// That variable then becomes the container for your application:

MYAPP.someDude = {
 firstName: "Manny",
 lastName: "Moe"
};
MYAPP.flight = {
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

// This will significantly reduce the chance of bad interactions 
// with other applications, widgets, or libraries.