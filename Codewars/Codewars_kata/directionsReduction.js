function directionsReduction(arr) {
    const opposite = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST',
    };
    const stack = [];

    for (let direction of arr) {
        if (stack.length && stack[stack.length - 1] === opposite[direction]) {
            stack.pop();
        } else {
            stack.push(direction);
        }
    }

    return stack;
}

console.log(directionsReduction(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
// Output: ['WEST']
console.log(directionsReduction(['NORTH', 'SOUTH', 'EAST', 'WEST']));
// Output: []
console.log(directionsReduction(['NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'WEST']));
// Output: ['WEST', 'WEST']