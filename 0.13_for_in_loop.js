var footballTeam = "Packers";
//for (var i = 0; i < footballTeam.length; i++)
for (var letter in footballTeam) {
	console.log(footballTeam[letter]);
}


//create a for in loop that prints each letter of your fav show
var favShow = "Grand Tour";
for (var letter in favShow) {
	console.log(favShow[letter]);
}

//create a for in loop for your fav food
//then can you count each vowel that occurs in that food?
// 1. we need a for in loop
// 2. use a conditional to check if the letter at an index is a vowel
// 3. ? == "a" || "e" || "i" || "o" || "u"
// 4. vowelCount = 0
var vowelCount = 0;
var favFood = "smoked salmon";
for (var letter in favFood) {
	if (favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u") {
		vowelCount++;
	}
}
console.log("There are " + vowelCount + " vowels in " + favFood);


