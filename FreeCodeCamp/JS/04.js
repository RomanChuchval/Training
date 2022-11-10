/* Assign the contents of a to variable b. */

/* let a;
a = 7;
let b;
b = a; */

// Initializing Variables with the Assignment Operator

let myVar = 0;
let n = 9;

// Declare String Variables

let myFirstName = 'Roman'
let myLastName = 'Chuchval'

/* 
a should be defined and have a final value of 6.
Passed: b should be defined and have a final value of 15.
Passed: c should not contain undefined and should have a final value of the string I am a String!
Passed: You should not change code below the specified comment. */

// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!"

/* 
studlyCapVar should be defined and have a value of 10.
Passed: properCamelCase should be defined and have a value of the string A String.
Passed: titleCaseOver should be defined and have a value of 9000.
Passed: studlyCapVar should use camelCase in both declaration and assignment sections.
Passed: properCamelCase should use camelCase in both declaration and assignment sections.
Passed: titleCaseOver should use camelCase in both declaration and assignment sections. */

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Change the 0 so that sum will equal 20.

const sum = 10 + 10;

/* Subtract One Number from Another with JavaScript
We can also subtract one number from another.

JavaScript uses the - symbol for subtraction. */

const difference = 45 - 33;

// Multiply Two Numbers with JavaScript

const product = 8 * 10;

// Divide One Number by Another with JavaScript

const quotient = 66 / 33;

// Change the code to use the ++ operator on myVar.

let myVariable = 87;

// Only change code below this line
myVariable ++;

// Decrement a Number with JavaScript

let myVar2 = 11;
// Only change code below this line
myVar2 --;

// Create Decimal Numbers with JavaScript

const ourDecimal = 5.7;
// Only change code below this line
let myDecimal = 12.3;

// Multiply Two Decimals with JavaScript

const dec = 2.0 * 2.5;

//Divide One Decimal by Another with JavaScript

const divideDecimals = 4.4 / 2.0;

//Finding a Remainder in JavaScript

const remainder = 11 % 3;

// Convert the assignments for a, b, and c to use the += operator.

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=7;

// Compound Assignment With Augmented Subtraction

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// Convert the assignments for a, b, and c to use the *= operator.

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//Convert the assignments for a, b, and c to use the /= operator.

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
//I am a "double quoted" string inside "double quotes".

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Quoting Strings with Single Quotes

const myString = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings

const threeStrings = "FirstLine\n\t\\SecondLine\nThirdLine"; 
// Output:
// FirstLine
//    \SecondLine
// ThirdLine

// Concatenating Strings with Plus Operator

const myDoubleStr = "This is the start. "+"This is the end.";

// Concatenating Strings with the Plus Equals Operator

let myString2 = 'This is the first sentence. ';
myString2 += 'This is the second sentence.'

//Constructing Strings with Variables

const myName = "Roman";
const myString3 = "My name is " + myName + " and I an well!";

//Appending Variables to Strings

const someAdjective = "cool!";
let myString4 = "Learning to code is ";
myString4 += someAdjective

//Find the Length of a String

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String

// Setup
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line

//Understand String Immutability

// Setup
let myString5 = "Jello World";

// Only change code below this line
myString5 = "Hello World"; // Change this line
// Only change code above this line

//Use Bracket Notation to Find the Nth Character in a String

// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName4[2]; // Change this line

// Use Bracket Notation to Find the Last Character in a String

// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName5[lastName5.length -1]; // Change this line