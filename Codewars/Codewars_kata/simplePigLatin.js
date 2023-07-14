function pigIt(str) {
    const words = str.split(" ");
    const pigLatinWords = words.map(word => {
        if (/^[A-Za-z]+$/.test(word)) {
            return word.slice(1) + word[0] + "ay";
        } else {
            return word;
        }
    });
    return pigLatinWords.join(" ");
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !