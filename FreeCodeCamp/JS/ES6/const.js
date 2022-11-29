// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2
s[1] = 5
s[2] = 7
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

// Use Destructuring Assignment to Assign Variables from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


// Use Destructuring Assignment to Assign Variables from Nested Objects

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday2}} = LOCAL_FORECAST;
console.log(lowToday); // 64
console.log(highToday); // 77

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
// return [3, 4, 5, 6, 7, 8, 9, 10]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.078,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0;
console.log(half(stats));
// (stats.max + stats.min) / 2 = 27.664

// Create Strings using Template Literals

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < result.failure.length; i++) {
    failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
/* output [
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
] */

// Write Concise Object Literal Declarations Using Object Property Shorthand

const createPerson = (name, age, gender) => ({name, age, gender})
// output createPerson("Zodiac Hasbro", 56, "male") should return {name: "Zodiac Hasbro", age: 56, gender: "male"}.

// Write Concise Declarative Functions with ES6

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to Define a Constructor Function

// Only change code below this line
class Vegetable {
  constructor(vegetable) {
    this.name = vegetable;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// Use getters and setters to Control Access to an Object

class Thermostat {
  constructor(temp) {
    this.temp = 5/9 * (temp - 32)
  }
  get temperature () {
    return this.temp
  }
  set temperature (updateTemp) {
    this.temp = updateTemp
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius