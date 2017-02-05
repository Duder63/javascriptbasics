// Functions can be invoked with the 'new' prefix.
// As a result, 'this' is bound to the new object.
// The resulting object is created with a link to the hidden prototype property of the function.
// Functions that are designed to be called with the 'new' prefix are by definition constructors.


var Person = function (name) {
    this.name = name;
};

Person.prototype.greet = function () {
    return this.name + ' says hi.';
};

// The greet function uses 'this' to access the name property. 
// 'this' is bound to Person.

console.log(new Person('Calvin').greet()); //Calvin says hi.


