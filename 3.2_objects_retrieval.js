// Accessing an object

// Values can be retieved from an object by wrapping a string expression in a [] suffix
// A . notation can be used instead - it is preferrd as it is more compact and reads better

var hotel = {
	name: "Comfy",
	rooms: 100,
	booked: 63,
	checkAvailability: function() {   //this is a method -> a function  within an object (object's property value)
		return this.rooms - this.booked;
	}
};

console.log(hotel.checkAvailability());


var dude = {
 firstName: "Gary",
 lastName: "Shew",
 middleName: ""
};


dude["firstName"]  //Gary
dude.lastName  //Shew

//dude.middleName = "Muffin";

// the || operator can be used to fill in default values
var middle = dude["middleName"] || "(none given)";
//console.log(middle);  //returns (none) if property "middleName" value is left empty or does not exist in the object

console.log(dude.firstName + " " + middle + " " + dude.lastName);
//console.log(middle);

