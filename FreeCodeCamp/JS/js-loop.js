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