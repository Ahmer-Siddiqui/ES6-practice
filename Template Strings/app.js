// 1. Write a function that takes a person’s name and age and returns a greeting message
// using template strings.

// function greeting(name, age){
//     return `My name is ${name} and my age is ${age}`;
// }
// console.log(greeting("Alina", 18));


// 2. Write a function that takes an array of numbers and returns a string with the sum and
// the average of the numbers using template strings.

// function sumAndAverage(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
    
//     let average = sum / numbers.length;
    
//     let message = `Sum: ${sum}, Average: ${average.toFixed(2)}`;
//     return message;
//   }
  
// let numbers = [2, 4, 6, 8, 10];
// let result = sumAndAverage(numbers);
// console.log(result);

// 3. Write a function that takes a tag name and some text and returns an HTML element
// with that tag and text using template strings.

// function createHTMLElement(tagName, text) {
//     let element = `<${tagName}>${text}</${tagName}>`;
//     return element;
// }
  
// document.write(createHTMLElement("h1", "Hello, world!"))

// 4. Write a function that takes an object with name, price and quantity properties and
// returns a string with the product information using template strings.

// function productInformation(product) {
//     let information = `Product: ${product.name}\nPrice: $${product.price}\nQuantity: ${product.quantity}`;
//     return information;
// }

// let product = {
//     name: "Handfree",
//     price: 19.99,
//     quantity: 5
// };
// console.log(productInformation(product))

// 5. Write a function that takes a date object and returns a string with the date formatted as
// dd/mm/yyyy using template strings.

// function formatDate(date) {
//     let day = date.getDate().toString().padStart(2, "0");
//     console.log(day);
//     let month = (date.getMonth() + 1).toString().padStart(2, "0");
//     let year = date.getFullYear().toString();
//     let formattedDate = `${day}/${month}/${year}`;
//     return formattedDate;
//   }
  
// let date = new Date();
// let formattedDate = formatDate(date);
// console.log(formattedDate);

