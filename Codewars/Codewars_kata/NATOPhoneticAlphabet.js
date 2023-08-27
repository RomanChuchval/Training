

const LETTERS = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    H: 'Hotel',
    I: 'India',
    L: 'Lima',
    E: 'Echo',
    N: 'November'
}
function nato(word) {
    const alphabet = LETTERS
    const firstWordsLetters = word.toUpperCase().split('')
    const resultWordsArray = firstWordsLetters.map( (char) => alphabet[char])
    return resultWordsArray.join(' ')
}

console.log(nato('hi')) // "Hotel India"
console.log(nato('abc')) // "Alpha Bravo Charlie"
console.log(nato('Banana')) // "Bravo Alpha November Alpha November Alpha"


