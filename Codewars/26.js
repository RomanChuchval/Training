/* Write a function findNeedle() that takes an array full of junk but containing one "needle" */

function findNeedle(haystack) {
    let needle = haystack.indexOf('needle');
    return 'found the ' + haystack[needle] + ' at position ' + haystack.indexOf('needle');
    }

