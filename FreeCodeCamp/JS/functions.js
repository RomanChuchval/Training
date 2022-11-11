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