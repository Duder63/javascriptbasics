//Closures

//1. A closure gives you access to variable set in a function
//   after a function has completed and returned
//2. Help keep variables from getting pushed into the global scope.
//3. Degree of protection. Variable cannot be overwritten unless we
//   deliberately do so.

var james = {};

var setAge = function(myAge) {
	var birthday = "7/13/1980";

	return {
		getAge : function() {
			return myAge;
		},
		getBirthday : function(){
			return birthday;
		}
	}
}

james.age = setAge(36);
console.log(james.age);
console.log(james.age.getAge());
console.log(james.age.getBirthday());