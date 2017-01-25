//The delete operator can be used to remove a property from an object.

var dude = {
 firstName: "Gary",
 lastName: "Shew",
 nickname: ""
};
dude.nickname = 'Opie';

var anotherDude = Object.create(dude);

anotherDude['firstName'] = 'Mister';
anotherDude['lastName'] = 'Lebowski';
anotherDude.nickname = 'Big';

// console.log(dude.nickname);
// console.log(anotherDude.nickname);

var name;
for (name in anotherDude) {
 if (typeof anotherDude[name] == 'string') {
 	console.log(name + ': ' + anotherDude[name]);
 }
}

console.log("----------------");

//The delete operator removes a given property from an object.
//On successful deletion, it will return true, else false will be returned

console.log(delete anotherDude.nickname);   // returns true
console.log(delete dude.nickname);   // returns true

// When trying to delete a property that does 
// not exist, true is returned
console.log(delete dude.age);   // returns true

console.log("----------------");

var name;
for (name in anotherDude) {
 if (typeof anotherDude[name] == 'string') {
 	console.log(name + ': ' + anotherDude[name]);
 }
}