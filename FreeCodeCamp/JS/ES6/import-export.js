// Use export to Share a Code Block

const uppercaseString = (string) => {
    return string.toUpperCase();
};

const lowercaseString = (string) => {
    return string.toLowerCase();
};

export { uppercaseString, lowercaseString };


//Reuse JavaScript Code Using import

import {uppercaseString, lowercaseString} from './string_functions.js'
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

// Use * to Import Everything from a File


import * as stringFunctions from './string_functions.js'

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");