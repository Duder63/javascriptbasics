var empty_object = {};

var dude = {
 firstName: "Gary",
 lastName: "Shew",
 age: 53
};


var anotherDude = Object.create(dude);

anotherDude['firstName'] = 'Mister';
anotherDude['lastName'] = 'Lebowski';
anotherDude.nickname = 'Big';


var name;
for (name in dude) {
 if (typeof dude[name] !== 'string') {
 	console.log(name + ': ' + dude[name]);
 }
}

console.log("----------------");

var name;
for (name in anotherDude) {
 if (typeof anotherDude[name] !== 'number') {
 	console.log(name + ': ' + anotherDude[name]);
 }
}

