function cakesCounter(recipe, available) {
    let maxCakes = Infinity;
    for (let ingredient in recipe) {
        if (recipe.hasOwnProperty(ingredient)) {
            if (available.hasOwnProperty(ingredient)) {
                let cakesPossible = Math.floor(available[ingredient] / recipe[ingredient]);
                maxCakes = Math.min(maxCakes, cakesPossible);
                debugger
            } else {
                return 0;
            }
        }
    }
    return maxCakes;
}

let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

console.log(cakesCounter(recipe, available)) // Output 2

let recipe2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available2 = {sugar: 500, flour: 2000, milk: 2000};

console.log(cakesCounter(recipe2, available2)) //Output 0
