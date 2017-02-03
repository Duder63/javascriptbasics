// In JS, functions can have methods.
// The 'apply' function is a method on the 'Function.prototype' – the prototype for all JS functions.
// 'apply' makes it possible to use one object’s method in the context of another.

var Person = function (name) {
    this.name = name;
};

Person.prototype.greet = function () {
    return this.name + ' says hi.';
};

// 'apply' can take two arguments: 
// (1) a context for 'this' and 
// (2) an array of arguments that will be applied to the method

var calvin = new Person('Calvin');  
var hobbes = {name: 'Hobbes'};   

// apply the greet method from calvin
// hobbes has a name property

console.log(calvin.greet.apply(hobbes)); //Hobbes says hi.



// A method greetFriends
// has two arguments – two objects with a name property.
Person.prototype.greetFriends = function (friendA, friendB) {
    return this.name + ' says hi to ' + friendA.name + ' and ' + friendB.name + '.';
};

var bill = {name: 'Bill Watterson'};

// two arguments to the apply function: 
// bill as the context for 'this' and an array with two person objects.
// calvin and hobbes become the parameters friendA and friendB in greetFriends.

console.log(calvin.greetFriends.apply(bill, [calvin, hobbes]));
//Bill says hi to Calvin and Hobbes.


