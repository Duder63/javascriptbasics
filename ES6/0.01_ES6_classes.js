// *** ES6 **** //

//Classes are "special functions", and just as you can define function expressions and function declarations,
// the class syntax has two components: class expressions and class declarations.


//HOISTING
//An IMPORTANT difference between function declarations and class declarations
// is that function declarations are hoisted and class declarations are not.
// You first need to declare your class and then access it,
// otherwise code will throw a ReferenceError. EXAMPLE:

// var p = new Rectangle(); // ReferenceError
// class Rectangle {}




//Class declarations

//One way to define a class is using a class declaration.
// To declare a class, you use the class keyword with the name of the class:

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}


//Class expressions

//A class expression is another way to define a class.
// Class expressions can be named or unnamed.
// The name given to a named class expression is local to the class's body.

// unnamed
var myRectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var myNewRectangle = class myNewRectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};








class View {
  constructor(options) {
    this.model = options.model;
    this.template = options.template;
  }

  render() {
    return _.template(this.template, this.model.toObject());
  }
}


class Model {
  constructor(properties) {
    this.properties = properties;
  }

  toObject() {
    return this.properties;
  }
}

var jack = new Model({
  name: 'jack'
});

var view = new View({
  model: jack,
  template: 'Hello, <%= name %>'
});

console.log(view.render());





