
//When an error/mishap is detected, your program should throw an exception.

//The throw statement interrupts execution of the function.
//It should be given an exception object
// containing a name property that identifies the type of the exception,
// and a descriptive message property.

var add = function (a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
	throw {
		name: 'TypeError',
		message: 'add needs numbers'
	};
	}
	return a + b;
};
//console.log(add(11,4));



//If an exception is thrown within a try block, control will go to its catch clause.

var addNum = function (a, b) {
	try {
		if (typeof a !== 'number' || typeof b !== 'number') throw "Oops! Numbers are required."
	}
	catch(err){
		console.log(err);
	}
};
addNum("eleven", 4);
