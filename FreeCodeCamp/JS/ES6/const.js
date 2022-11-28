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