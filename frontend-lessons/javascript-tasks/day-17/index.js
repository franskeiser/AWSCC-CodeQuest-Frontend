// Working with Arrays in JavaScript - Day 17: Assignment

// Task 1: Array Basics

// 1. Create an array named `cities` containing the names of five cities.
// 2. Access and print the third city in the `cities` array.
// 3. Modify the second city in the array to a different city of your choice.

let cities = ['Manila', 'Makati', 'Quezon', 'Malabon', "Cavite"];
console.log(cities[2]);
cities[1] = 'Pasay';

// Task 2: Array Operations

// 4. Create an array named `fruits` with at least three different fruits.
// 5. Add a new fruit to the end of the `fruits` array using the `push()` method.
// 6. Remove the last fruit from the array using the `pop()` method.
// 7. Use a loop to iterate through the `fruits` array and print each fruit to the console.

let fruits = ['Banana', 'Mango', "Apple", 'Grapes', 'Orange', 'Pineapple', 'Dragonfruit'];
fruits.push('Kiwi');
fruits.pop();

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Task 3: Advanced Array Techniques

// 8. Create an array named `numbers` with five numeric values.
// 9. Use the `map()` method to create a new array where each number is multiplied by 2.
// 10. Use the `filter()` method to create a new array containing only the numbers greater than 5 from the original `numbers` array.

let numbers = [1, 2, 3, 4, 5];
let timesTwo = numbers.map(function(number) {
    return number * 2;
})

console.log(timesTwo);

let greaterThanFive = numbers.filter(function(number) {
    return number > 5;
})

console.log(greaterThanFive);

// Task 4: Array Manipulation

// 11. Create an array named `colors` with at least four different colors.
// 12. Add a new color to the beginning of the `colors` array using the `unshift()` method.
// 13. Remove the first color from the array using the `shift()` method.
// 14. Use the `slice()` method to create a new array containing the second and third colors from the original array.

let colors = ['red', 'blue', 'yellow', 'orange', 'violet', 'green'];
colors.unshift('brown');
colors.shift();
let newColors = colors.slice(1, 3);


// Task 5: Array Splicing

// 15. Create an array named `characters` with at least six characters (strings).
// 16. Use the `splice()` method to insert two new characters at index 2 of the `characters` array.
// 17. Use the `splice()` method to remove three characters starting from index 4 of the `characters` array.

let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
characters.splice(2, 0, 'z', 'y');
characters.splice(4, 3);
console.log(characters);

// These tasks will help you strengthen your understanding of working with arrays in JavaScript. Arrays are powerful tools for managing and manipulating collections of data. Good luck! 🚀
