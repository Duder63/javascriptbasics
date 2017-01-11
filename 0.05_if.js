var isOn = true;
var isHot = false;

//1
if(isOn === true) {
	console.log("This light is on. It's too bright, Dude.");
};
if(isOn) {
	console.log("Dude, turn that music off.");
};

// && = and
if(isOn && isHot) {
	console.log("Dude, that music is on, and it is hot.");
};

// || (pipes) = or
if(isOn || isHot) {
	console.log("Dude, that music is on, it's loud, and it is NOT hot.");	
};

// ! (bang) = not (or is the opposite)
if(!isHot) {
	console.log("It is not hot.");	
};
