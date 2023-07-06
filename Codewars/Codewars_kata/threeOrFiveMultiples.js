function multOfThreeOrFive(number){
    let sum = 0;
    if (number <= 0) {
        return 0;
    }
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(multOfThreeOrFive(10)) // 23
console.log(multOfThreeOrFive(234)) // 12614
console.log(multOfThreeOrFive(29)) // 195
