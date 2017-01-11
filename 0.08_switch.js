/*
switch Caseswitch(expression) {
	case n:
		code block
		break;
	case n:
		code block
		break;
	default:
		default code block
}
*/

var marginOfPackersSuperBowlWins = 17;
var result

switch (marginOfPackersSuperBowlWins) {
	case 3:
		result = "Cool, that will be a good game"
		break;
	case 7:
		result = "CI like it. Just close enough"
		break;
	case 10:
		result = "That's what I'm taking about"
		break;
	case 17:
		result = "Sweet, we're awesome"
		break;
	default:
		result = "mmmm... getting there"
};
console.log("Switch Result: " + result);