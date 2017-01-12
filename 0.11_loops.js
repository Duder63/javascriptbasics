//indexing  012345678
//to access the index we use [] and the index number inside them
//DRY = Don't Repeat Yourself  --> DRY is good practice (is the goal)!
//WET = Write Everything
var name = "Gary Shew";
// console.log(name.length);
// console.log(name[1]);


var lcv = 0;  //this is a loop control variable
while(lcv < 5) {
	console.log(name.toUpperCase());
	lcv += 1;  //THIS IS CRITICAL!!! NO VAR LEADS TO INFINITY!
}

//create a while loop that starts at zero and ends at 10
//this while loop should print each number of the lcv
//make your lcv var count = 0

var count = 0;
while(count < 10) {
	console.log(count);
	count++;  //++ is equal to count += 1 (plus one)
}

var num = 10;
while(num > 0) {
	console.log(num);
	num -+ 1;  // or num--;
}

var evenCount = 1;
while(evenCount < 20) {
	if(evenCount % 2 == 0) {
		console.log(evenCount + " is even");
	} else {
		console.log(evenCount + " is odd");		
	}
	evenCount++;	
}


var countFive = 0;
while (countFive <= 50) {
	console.log(countFive);
	countFive += 5;
}




