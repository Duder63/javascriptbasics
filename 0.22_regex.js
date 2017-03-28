//A regular expression is an object that describes a pattern of characters.

//Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.

//Modifiers
// Modifiers are used to perform case-insensitive and global searches:
i : Perform case-insensitive matching
g : Perform a global match (find all matches rather than stopping after the first match)
m : Perform multiline matching



//Creating a regular expression
//Can either be constructed with the RegExp constructor
// or
// written as a literal value by enclosing the pattern in forward slash (/) characters
var re1 = new RegExp("abc");
var re2 = /abc/;


//A question mark makes a part of a pattern “optional”,
// meaning it may occur zero or one time. 
//In the following example, the u character is allowed to occur,
// but the pattern also matches when it is missing.

var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true



//MORE:
//  http://eloquentjavascript.net/09_regexp.html