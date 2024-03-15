// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.

const product = {
    name: 'Iphone',
    price: 10000,
    quantity: 500000,
};

const productJSON = JSON.stringify(product);
console.log(productJSON);

// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

const book = {
    "title": "Harry Potter Philosopher's Stone",
    "author": "J. K. Rowling",
    "publishedYear": 1887,
}

const JSONBook = JSON.stringify(book);
const javascriptBook = JSON.parse(JSONBook);

console.log(javascriptBook.author);

// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

let objects = [
    {
        name: 'Franz',
        age: 18,
        city: 'Manila',
    },
    {
        name: 'Bea',
        age: 18,
        city: 'Manila',
    }
]

const jsonObjects = JSON.stringify(objects);
const javascirptObjects = JSON.parse(jsonObjects);
console.log(javascirptObjects);
