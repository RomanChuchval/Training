// Use an Array to Store a Collection of Data

let yourArray = ["string", true, 3, false, 55];

// Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = "R";
console.log(myArray);

// Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));
