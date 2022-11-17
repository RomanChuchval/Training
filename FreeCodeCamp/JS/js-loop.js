// Iterate with JavaScript While Loops

const myArray = [];
let i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}

//Iterate with JavaScript For Loops

const myArray2 = [];
let t = 1;
    for (t = 1; t < 6; t++) {
    myArray2.push(t);
    }

// myArray should equal [1, 2, 3, 4, 5].

// Iterate Odd Numbers With a For Loop
const myArray3 = [];
let k = 1;
for (k = 1; k < 10; k += 2) {
    myArray3.push(k);
}
// myArray3 should equal [1, 3, 5, 7, 9].

//Count Backwards With a For Loop

const myArray4 = [];
let p = 9;
for (p = 9; p > 0; p -= 2) {
    myArray4.push(p);
}
//myArray4 should equal [9, 7, 5, 3, 1].

// Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6];
let total = 0;
    for (let i = 0; i < myArr.length; i++) {
        total += myArr[i]
}
//Passed: total should equal 20.

//Nesting For Loops

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 1 * 2 * 3 * 4 * 5 * 6 * 7 > output 5040 .

// Iterate with JavaScript Do...While Loops

const myArrayDo = [];
let r = 10;

// Only change code below this line
do {
    myArrayDo.push(r);
    r++;
} while (r < 5)

// Replace Loops using Recursion

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr [n - 1]
    }
}