// 1. Create a function called `counter` that returns another function. The returned
// function should increment a counter variable and log its value. Use a closure to keep
// track of the counter variable.

// function counter() {
//     let count = 0;
  
//     return function() {
//       count++;
//       console.log("Counter value: " + count);
//     };
//   }
// const incrementCounter = counter();
// incrementCounter();  
// incrementCounter(); 
// incrementCounter();  
    

// 2. Create a function called `createMultiplier` that takes a number as a parameter. The
// function should return another function that multiplies a given number by the number
// passed to `createMultiplier`. Use a closure to access the number parameter.

// function createMultiplier(num) {
//     return function(givenNumber) {
//       return givenNumber * num;
//     };
// }

// const multiplyByTwo = createMultiplier(2);
// console.log(multiplyByTwo(5));
    

// 3. Create a function called `secretMessage` that takes a string as a parameter. The
// function should return another function that logs the secret message along with the
// provided string. Use a closure to access the string parameter.

// function secretMessage(message) {
//     return function() {
//       console.log("Secret message: " + message);
//     };
// }

// const showSecretMessage = secretMessage("Hello, world!");
// showSecretMessage();


// 4. Create a function called `calculate` that takes two numbers as parameters. The
// function should return an object with two methods: `add` and `multiply`. The `add`
// method should add the two numbers, and the `multiply` method should multiply
// them. Use a closure to access the number parameters.

// function calculate(num1, num2) {
//     return {
//       add: function() {
//         return num1 + num2;
//       },
//       multiply: function() {
//         return num1 * num2;
//       }
//     };
//   }
//   const calc = calculate(3, 4);
//   console.log(calc.add());       
//   console.log(calc.multiply());  
    