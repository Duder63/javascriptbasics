var names = ["paul", "gavin", "verne", "lisa", "kenn"];
var nums = [1, 2, 3, 4, 5, 6, 4321];
var mixed = ["dog", false, 6, "squirrel", 2];
console.log(names[2]);
console.log(nums[6]);

console.log("------------------")

//can we use a for in loop to iterate and console log each name in names
for (name in names) {
	console.log(names[name]);
}

var candyBars = ["Crunch", "Twix", "Baby Ruth"];
//console.log(candyBars);

//.push will add a new value to the end of the array
candyBars.push("Snickers");
//console.log(candyBars);

//.pop will remove a value found at the end of the array
//candyBars.pop();
console.log(candyBars);
//.slice does not change the actual array but will only return the values up to the last number
console.log(candyBars.slice(0,3));
console.log(candyBars);

//how to remove a specific element of an array
//.indexOf will return the index of where a value is located in the array
console.log(candyBars.indexOf("Twix"));
//.splice will allow us to remove the item from the array 
candyBars.splice(1,1);
console.log(candyBars);
