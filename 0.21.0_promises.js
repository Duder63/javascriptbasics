//A promise represents the eventual result of an asynchronous operation.
// It is a placeholder into which the successful result value or reason for failure will materialize.

//A promise can be:

//  • fulfilled - The action relating to the promise succeeded
//  • rejected - The action relating to the promise failed
//  • pending - Hasn't fulfilled or rejected yet
//  • settled - Has fulfilled or rejected

//If a function, such as this example, is asynchronous and needs to look up the current greeting from a web service,
// it may return a promise:
var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    console.log(greeting);    // 'hello world’
});
//other code can continue while the greeting is being fetched


//A promise can also represent a failure.
// If the network goes down and the greeting can’t be fetched from the web service,
// you can register to handle the failure using the second argument to the promise’s then method:
var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    console.log(greeting);    // 'hello world’
}, function (error) {
    console.error('Doh! ', error);   // 'Doh! Something bad happened’
});


//Transforming Future Values

//Allowing you to transform future values by returning a new value from callback function passed to then:

var greetingPromise = sayHello();
greetingPromise.then(function (greeting) {
    return greeting + '!!!!';
}).then(function (greeting) {
    console.log(greeting);    // 'hello world!!!!’
});




