//In JS, functions are objects.
//As a result, functions can be passed as arguments
// to other functions and can also be returned by other functions.

//A function that takes other functions as arguments or returns functions as its result
// is called a higher-order function, and the function that is passed as an argument
// is called a callback function.
// It’s named “callback” because at some point in time it is “called back” by the higher-order function.


//Callbacks have many everyday usages.
// One of them is when we use the setTimeout() and setInterval() methods of the browser’s window object
// – methods that accept and execute callbacks:

function showMessage(message){
  setTimeout(function(){
    // alert(message);
    console.log(message);  //using console.log here so it will 'display' without needing a browser
  }, 3000);  
}

showMessage('Function called 3 seconds ago');




//The callback can be an existing function:

function fullName(firstName, lastName, callback){
  console.log("My name is " + firstName + " " + lastName);
  callback(lastName);
}

var greeting = function(ln){
  console.log('Welcome Mr. ' + ln);
};

fullName("James", "Rockford", greeting);




//or it can be an anonymous function, which we create 
// when we call the higher-order function, as shown below: 

function fullName(firstName, lastName, callback){
  console.log("My name is " + firstName + " " + lastName);
  callback(lastName);
}

fullName("Angel", "Martin", function(ln){console.log('Welcome Mr. ' + ln);});



