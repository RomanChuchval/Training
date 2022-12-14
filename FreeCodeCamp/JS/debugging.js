// Use the JavaScript Console to Check the Value of a Variable

let a = 5;
let b = 1;
a++;
// Only change code below this line

console.log(a);
let sumAB = a + b;
console.log(sumAB);

// Understanding the Differences between the freeCodeCamp and Browser Console

let output =
    "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// typeof

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

// Catch Misspelled Variable and Function Names

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Catch Unclosed Parentheses, Brackets, Braces and Quotes

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Catch Mixed Usage of Single and Double Quotes

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);

// Catch Off By One Errors When Using Indexing

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i <= len - 1; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();

//

function zeroArray(m, n) {
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

// Prevent Infinite Loops with a Valid Terminal Condition

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}