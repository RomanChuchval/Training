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