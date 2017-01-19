//Objects are passed around by reference - they are never copied

var empty_object = {};

var dude = {
 firstName: "Gary",
 lastName: "Shew"
};


//nm is 'Duder' because x and dude
//are references to the same object
var x = dude;
x.nickName =  "Duder";
var nm = dude.nickName;




// these each refer to a different empty object
var car {}, automobile {}, horselessCarriage {};

//these all refer to the same empty object
car = automobile = horselessCarriage = {};

