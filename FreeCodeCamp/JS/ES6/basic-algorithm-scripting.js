// Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
convertCtoF(30);

//Reverse a String

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Factorial (Recursion)

function factorialize(num) {
    if (num == 0) {
        return 1;
    } else {
        console.log(num);
        return num * factorialize(num - 1);
    }
}

console.log(factorialize(15));

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let arr = str.split(" ").sort((a, b) => a.length - b.length);
    return arr[arr.length - 1].length;
}
