// 1. In this exercise, we will experiment with looping over objects and internal arrays.
// a. Create a simple object with three items in it.
// b. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// c. Create an array containing the same three items. Using either the for loop or
// d. the for in loop, output the values from the array into the console

// a. Create a simple object with three items in it.
// const myObject = {
//     item1: 'Apple',
//     item2: 'Banana',
//     item3: 'Orange'
//   };
  
// b. Using the for in loop, get the properties' names and values from the object
// and output them into the console.
// for (let key in myObject) {
//     console.log(`Property: ${key}, Value: ${myObject[key]}`);
//   }
  
// c. Create an array containing the same three items. Using either the for loop or
// d. the for in loop, output the values from the array into the console

// const myArray = ['Apple', 'Banana', 'Orange'];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }


// 2. Create an object called `person` with properties like `name`, `age`, and `country`.
// Use a `for...in` loop to iterate over the object and log each property name.

// const person = {
//     name: 'Alina',
//     age: 18,
//     country: 'Pakistan'
//   };
  
//   for (let property in person) {
//     console.log(property);
//   }

// 3. Create an array called `numbers` with some numeric values. Use a `for...in` loop to
// iterate over the array and log each index.
// const arr = [2,4,6,8];

// for(let key in arr){
//     console.log(key);
// }

// 4. Create a string called `message` with some text. Use a `for...in` loop to iterate over
// the characters of the string and log each character.

// const message = "Hello, world!";

// for (let index in message) {
//   console.log(message[index]);
// }

// 5. Create a Map called `scores` with keys as names and values as scores. Use a `for...in`
// loop to iterate over the Map and log each name and score pair.
// const scores = new Map();
// scores.set('Alina', 80);
// scores.set('Wasfa', 95);
// scores.set('Wajiha', 75);

// for (let [name, score] of scores) {
//   console.log(`Name: ${name}, Score: ${score}`);
// }


// 6. Create an object called `car` with properties like `brand`, `model`, and `year`. Use a
// `for...in` loop to iterate over the object and log each property value.

// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2021
//   };
  
//   for (let property in car) {
//     console.log(car[property]);
//   }
  