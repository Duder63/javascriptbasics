//Every object is linked to a prototype object
// form whichit can inherit properties

//All JS objects are linked to Object.prototype

//When you make a new object, 
//you can select the object 
//that should be its prototype.

var empty_object = {};

var dude = {
 firstName: "Gary",
 lastName: "Shew"
};


var anotherDude = Object.create(dude);


//The prototype link has no effect on updating. 
//When we make changes to an object,
//the object’s prototype is not touched:

anotherDude['firstName'] = 'Mister';
anotherDude['lastName'] = 'Lebowski';
anotherDude.nickname = 'Big';  //is added only to prototype

//The prototype relationship is a dynamic relationship. 
//Add a new property to a prototype, that property will immediately be visible 
//in all of the objects that are based on that prototype:

dude.profession = 'lazy';
anotherDude.profession // 'lazy'

console.log(dude.firstName + " is " + dude.profession);
console.log(anotherDude.nickname + " " + anotherDude.lastName + " is " + anotherDude.profession);


