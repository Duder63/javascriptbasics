//Promises

//then

//All promise instances get a then method which allows you to react to the promise.
// The first then method callback receives the result given to it by the resolve() call:

new Promise(function(resolve, reject) {
  setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
  console.log(result);   // 10
});


//The then callback is triggered when the promise is resolved.
// You can also chain then method callbacks:

new Promise(function(resolve, reject) { 
  // A mock async action using setTimeout
  setTimeout(function() { resolve(10); }, 1000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// the console will print:
// first then:  10
// second then:  20
// last then:  40

//Each then receives the result of the previous then's return value.



//catch

//The catch callback is executed when the promise is rejected:

new Promise(function(resolve, reject) {
  setTimeout(function() { reject('Done!'); }, 4000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// the console will print:
// 'catch: Done!'


