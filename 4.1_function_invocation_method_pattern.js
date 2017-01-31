// A method is a function stored as a property of an Object.

//If an invocation expression contains a refinement 
// (that is, a . dot expression or [subscript] expression),
// it is invoked as a method:

var shape = {
	width: 600,
	height: 400,
	getArea: function() {
		return this.width * this.height;
		//refers to shape, and is same as writing,
		// the following:
		//return shape.width * shape.height; 
	}
};



// The foloowing object has a value and an increment method.
// The increment method takes an optional parameter.
// If the argument is not a number,
//  then 1 is used as the default.

var myObject = {
	value: 0,
	increment: function (inc) {
	this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment( );
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3


