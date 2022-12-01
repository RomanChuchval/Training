// Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // output > true

// Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

// Ignore Case While Matching

let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result4 = fccRegex.test(myString);

// Extract Matches


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex) // Change this line

//

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line