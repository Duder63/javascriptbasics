//For functions that are not properties on objects, this is bound to the global object. 

//You can overcome this problem by assigning 'this' to a variable in the parent function.


//For methods, this is bound to the object upon invocation:
var person = {
    name: 'Calvin',
    age: 25,
    greet: function () {
        console.log('My name is ' + this.name + '.');
    }
};
person.greet(); //My name is Calvin.


// Add a new method to person
person.calculateAge = function (yearsFromNow) {
    var self = this;

    function yearsOld() {
        return self.age + yearsFromNow;
    }

    console.log('I will be ' + yearsOld() + ' years old ' + yearsFromNow + ' years from now.');
}
person.calculateAge(10); //I will be 35 years old 10 years from now.