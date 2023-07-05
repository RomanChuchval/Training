function generateHashtag(string) {
    if (!string || /^\s*$/.test(string)) {
        return false;
    }
    const words = string.split(' ');
    const hashtag = '#' + words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return hashtag.length > 140 ? false : hashtag
}

console.log(generateHashtag("Do We have A Hashtag")) //#DoWeHaveAHashtag
console.log(generateHashtag("    Hello World      ")) //#DoWeHaveAHashtag
console.log(generateHashtag("looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooollllllllllllslslslslaldlalsdlasldlasldladlaldlalsdlaasldaasa")) // false