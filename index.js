// Declaring an array
var fruits = ['apple', 'banana', 'cherry'];

// Using forEach() to log each fruit
fruits.forEach(fruit => {
    console.log(fruit);

});

// Using map() to create a new array with modified elements
var uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ["APPLE", "BANANA", "CHERRY"]

// Using forEach() to sum the lengths of each fruit's name
var totalLength = 0;
fruits.forEach(fruit => {
    totalLength += fruit.length;
});
console.log(totalLength); // The total length of all fruit names

// Using map() to create a new array where each fruit name is transformed
var fruitInfo = fruits.map(fruit => ({
    name: fruit,
    length: fruit.length
}));
console.log(fruitInfo); 
