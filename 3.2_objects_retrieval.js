//Values can be retieved from an object by wrapping a string expression in a [] suffix
//A . notation can be used instead - it is preferrd as it is more compact and reads better

var empty_object = {};

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

