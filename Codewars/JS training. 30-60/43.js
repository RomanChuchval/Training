//Find Multiples of a Number

function findMultiples(integer, limit) {
    let arr = [integer];
    for (i = 2; i < limit * 2; i++) {
        if (integer * i > limit) {
            return arr;
        } else if (integer * i == limit) {
            arr.push(integer * i);
        } else {
            arr.push(integer * i);
        }
    }
    return arr;
}
