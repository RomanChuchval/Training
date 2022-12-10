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

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    return arr.map(function (group) {
        return group.reduce(function (prev, current) {
            return current > prev ? current : prev;
        });
    });
}

// Confirm the Ending

function confirmEnding(str, target) {
    let targetLength = target.length;
    if (str.substring(str.length - targetLength) == target) {
        return true;
    }
    return false;
}

// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    let result = [];
    if (num <= 0) {
        return "";
    } else {
        str.split(" ");
        for (let i = 0; i < num; i++) {
            result.push(str);
        }
    }
    return result.join("");
}

repeatStringNumTimes("abc", 3);

// Truncate a String

function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        const string = str.substring(num, 0);
        return string + "...";
    }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 100));

// Finders Keepers

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Boo who

function booWho(bool) {
    return typeof bool === "boolean" ? true : false;
}

booWho(null);

// Title Case a Sentence

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    console.log(arr[2].charAt(0).toUpperCase());
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
