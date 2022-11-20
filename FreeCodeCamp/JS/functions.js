// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.

function functionWithArgs(n, i) {
    console.log(n + i)
}
functionWithArgs(1,2);
functionWithArgs(7,9);

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(number) {
    return number * 5;
}
timesFive(5)
timesFive(2)
timesFive(0)

// Global Scope and Functions

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
oopsGlobal = 5
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
        }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
        }
console.log(output);
}

// Local Scope and Functions

function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
    } 
myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions

const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = 'sweater'
    return outerWear;
}
console.log(myOutfit());

// Understanding Undefined Value returned from a Function

let sum = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum += 5;
}
addThree();
addFive();

// Assignment with a Returned Value

let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

/* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(item);
}

let testArr = [1, 2, 3, 4, 5];

// Display code
console.log(nextInLine([2], 1))

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
    return true; // Change this line
}

//Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
    return "Yes, that was true"
    } 
    return "No, that was false"
}

// Comparison with the Equality Operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
        return "Not Equal";
}

testEqual(10);

// Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) { 
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

// Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
    if (typeof 'a' === b) { 
        return "Equal";
    }
    return "Not Equal";
    }
compareEquality(10, "10");

// Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val != 99) { 
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// Comparison with the Strict Inequality Operator

function testStrictNotEqual(val) {
    if (val !== 17) { 
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

// Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    } if (val > 10) {  // Change this line
        return "Over 10";
    }
    return "10 or Under";
}
    testGreaterThan(10);

// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }
    if (val >= 10) {  // Change this line
        return "10 or Over";
    }
    return "Less than 10";
}
testGreaterOrEqual(10);

//Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }
    if (val < 55) {  // Change this line
        return "Under 55";
    }
    return "55 or Over";
    }
testLessThan(10);

// Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

// Comparisons with the Logical And Operator

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
    }
testLogicalAnd(10);

// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
    } 
testLogicalOr(15);

// Introducing Else Statements

function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// Introducing Else If Statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if  (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

// Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);

// Chaining If Else Statements

function testSize(num) {
    if (num <= 4) {
        return "Tiny"
    } else if (num <= 8) {
        return "Small"
    } else if (num <= 14) {
        return "Medium"
    } else  if (num <= 17){
        return "Large"
    } else {
        return "Huge";
    }
}
testSize(7);

// Golf Code
/* Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!" */

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par -2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if ( strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names [6]
    }
}
golfScore(5, 4);

// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    switch(val) {
        case 1:
        answer = 'alpha';
        break;
        case 2:
        answer = 'beta';
        break;
        case 3:
        answer = 'gamma';
        break;
        case 4:
        answer = 'delta';
        break;
    }
    return answer;
}
caseInSwitch(1);

// Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    let answer = "";
    switch(val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;
    }
}

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
        case 1:
        case 2:
        case 3:
        answer = 'Low';
        break;
        case 4:
        case 5:
        case 6:
        answer = 'Mid';
        break;
        case 7:
        case 8:
        case 9:
        answer = 'High';
        break;
    }
    return answer;
}
sequentialSizes(1);   

// replacing if else statement to switch

function chainToSwitch(val) {
    let answer = "";
    switch(val) {
        case 'bob':
            answer = 'Marley';
            break;
        case 42:
            answer = 'The Answer';
            break;
        case 1:
            answer = 'There is no #1';
            break;
        case 99:
            answer = 'Missed me by this much!';
            break;
        case 7:
            answer = 'Ate Nine';
            break;
    }
    return answer;
}
chainToSwitch(7);

//Returning Boolean Values from Functions
function isLess(a, b) {
    return a < b
}
isLess(10, 15);

// Return Early Pattern for Functions

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

//Counting Cards
let count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1;
            break;
        case 7:
        case 8:
        case 9:
            count += 0;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count -= 1;
            break;
        } if (count > 0) {
            return count + ' Bet'
        } else {
            return count + " Hold";
    }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// return random number 0 > 0.99

const randomNumber = () => Math.random()
console.log(randomNumber);

// Generate Random Whole Numbers with JavaScript

function randomWholeNum() {
    return Math.floor(Math.random()*10);
}

// Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str)
}
convertToInteger("56");

// Use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");

// Ternary operator

function checkEqual (a, b) {
    return a == b ? 'Equal' : 'Not Equal'
}

//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return (num > 0) ? 'positive'
        : (num < 0) ? 'negative'
        : 'zero'
}
    checkSign(10);

// Recursion

function countdown(n){
    if (n < 1) {
        return []
    } else {
        const coundownArr = countdown(n - 1)
        coundownArr.unshift(n)
        return coundownArr;
    }
}