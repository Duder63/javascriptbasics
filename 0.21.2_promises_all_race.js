//Promises

//Promise.all
//There are times when you trigger multiple async interactions
// but only want to respond when all of them are completed.  
//The Promise.all method takes an array of promises
// and fires one callback once they are all resolved:

Promise.all([promise1, promise2]).then(function(results) {
  // Both promises resolved
})
.catch(function(error) {
  // One or more promises was rejected
});



//firing off multiple AJAX (via fetch) requests at one time:

var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
  // Both promises done!
});



//If any promise is rejected the catch fires for the first rejection:

var req1 = new Promise(function(resolve, reject) { 
  setTimeout(function() { resolve('First!'); }, 4000);
});

var req2 = new Promise(function(resolve, reject) { 
  setTimeout(function() { reject('Second!'); }, 3000);
});

Promise.all([req1, req2]).then(function(results) {
  console.log('Then: ', results);
}).catch(function(err) {
  console.log('Catch: ', err);
});

// the console will print:
// Catch: Second!





//Promise.race
//instead of waiting for all promises to be resolved or rejected,
// Promise.race triggers as soon as any promise in the array is resolved or rejected:

var req1 = new Promise(function(resolve, reject) { 
  setTimeout(function() { resolve('First!'); }, 8000);
});

var req2 = new Promise(function(resolve, reject) { 
  setTimeout(function() { resolve('Second!'); }, 3000);
});

Promise.race([req1, req2]).then(function(one) {
  console.log('Then: ', one);
}).catch(function(one, two) {
  console.log('Catch: ', one);
});

// the console will print:
// Then: Second!

