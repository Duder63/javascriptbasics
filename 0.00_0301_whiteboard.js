// Week 3 - Challenge #1
function myName (first, last){
  console.log(`Hello, my name is ${first} ${last}`);
};

myName("Gary", "Shew");


// Week 3 - Challenge #2
function addNum (a, b){
  var sum = a + b;
  console.log(sum);
  return sum; 
};

addNum(2, 5);


// Week 3 - Challenge #3
var user = {
  username: '',
  password: '',
  loginStatus: ''
}

user.username = "Gary";
user.password = "foo123";
user.loginStatus = true;

function isLoggedIn() {
  if(user.loginStatus === true){
    console.log(user.username + " is logged in."); 
  }else{
    console.log(user.username + " is not logged in.");
  }
}

isLoggedIn(user.username);


// Week 3 - Challenge #3
for (var i = 0; i <= 20; i+= 2){
  console.log(i);
}


// Week 6 - Challenge #1
function doMath(op, num1, num2){
  if(op === 'add') {
    return (num1 + num2);
  }else if (op === 'subtract'){
    return (num1 - num2);
  }else if (op === 'multiply'){
    return (num1 * num2);
  }else if (op === 'divide'){
    return (num1 / num2);
  }else if (op === 'remainder'){
    return (num1 % num2);
  }else {return "Operation is not available"};
};

console.log(doMath('divide', 5, 4));


// Week 6 - Challenge #3

//ES5:
function isRightTriangle(s, b, h){
  return (s*s)+(b*b) === (h*h);
};

//ES6:
isRightTriangle = (s,b,h) => (s*s)+(b*b) === (h*h);

isRightTriangle(5, 6, 7);

