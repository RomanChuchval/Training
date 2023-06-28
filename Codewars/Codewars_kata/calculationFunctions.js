const zero = (action) => action ? action(0) : 0
const one = (action) => action ? action(1) : 1
const two = (action) => action ? action(2) : 2
const three = (action) => action ? action(3) : 3
const four = (action) => action ? action(4) : 4
const five = (action) => action ? action(5) : 5
const six = (action) => action ? action(6) : 6
const seven = (action) => action ? action(7) : 7
const eight = (action) => action ? action(8) : 8
const nine = (action) => action ? action(9) : 9

const plus = (x) => (y) => y + x;
const minus = (x) => (y) => y - x;
const times = (x) => (y) => y * x;
const dividedBy = (x) => (y) => y / x;

//output
console.log(three(times(five()))) // 15
console.log(nine(dividedBy(two()))) // 4.5
console.log(six(minus(two()))) // 4
console.log(four(plus(seven()))) // 11