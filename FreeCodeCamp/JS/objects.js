// Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

const myDog = {
    name: 'Nord',
    legs: 4,
    tails: 1,
    friends: ['roma', 'lera']
};

// Accessing Object Properties with Dot Notation

const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;    

// Accessing Object Properties with Bracket Notation

const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj2['an entree'];
const drinkValue = testObj2['the drink'];

//Accessing Object Properties with Variables

const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber]; 

// Updating Object Properties

const myHappyDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.name = 'Happy Coder'

//Add New Properties to a JavaScript Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = 'woof-woof'

//Delete Properties from a JavaScript Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails

//Using Objects for Lookups

function phoneticLookup(val) {
    let lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    let result = lookup[val];
    return result;
    }
    phoneticLookup("charlie");