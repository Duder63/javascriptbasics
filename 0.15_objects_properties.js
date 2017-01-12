//Empty Object Literal
var emptyObject = {};

//Object with Properties
var facebookFriend = {
	name: "",
	age: 0,
	vocation: "",
	inRelationship: true
};

facebookFriend.name = "Jona";
//console.log(facebookFriend.name);

facebookFriend.age = 40;
//console.log(facebookFriend.age);

console.log(facebookFriend.name + " just turned " + facebookFriend.age + ".");

if (facebookFriend.inRelationship) {
	console.log(facebookFriend.name + " is in a relationship.")
}


var myCar = {
	make: "",
	isPaidOff: false,
	age: 0
}
myCar.make = "Honda Accord";
myCar.isPaidOff = true;
myCar.age = 13;

var item = "My " + myCar.make + " is " + myCar.age + " years old";


