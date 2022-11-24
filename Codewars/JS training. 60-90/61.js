// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks) {
    let sum = 0;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}
