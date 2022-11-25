/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6 */

function sumArray(array) {
    if (array == null || array.length == 1 || array.length == 0) {
        return 0;
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
    let result = array.reduce((a, b) => a + b);
    return result - (max + min);
}
