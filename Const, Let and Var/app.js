// 1) The value of pi, which will not change. If you try reassigning a value declared with const,
// you will get an error:

// const PI = 3.142;
//PI = 25; // error for try reassigning a value


// 2. Write a function that takes an array of numbers and returns the sum of the squares of
// each number. Use let, const and var to declare variables in different scopes.
// var arr = [1,2,3,4,5];

// let myArr = (arr)=>{
//     const sqrArr = [];   
//     for(let i = 0; i < arr.length; i++){
//         sqrArr.push(arr[i] * arr[i])
//     }
//     return sqrArr
// }
// console.log(myArr(arr));

// 3. Write a loop that iterates over an array of strings and prints the first letter of each
// string. Use let to declare a block-scoped variable inside the loop.
// const names = ["Wasfa","Alina","Wajiha"]
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i].charAt(0));
// }

// 4. Write a function that takes a number n and returns a string with n asterisks. Use const
// to declare a constant string that holds one asterisk.

// const numOfAsterisks = +prompt("Enter number for print Asterisks")
// const generateAsterisks = (n) => {
//     const asterisk = "*";
//     for (let i = 0; i < n; i++) {
//         console.log(asterisk);
//     }
//   };
  
//   console.log(generateAsterisks(numOfAsterisks));

//   5. Write a function that takes an object with name and age properties and returns a
// greeting message. Use var to declare a function-scoped variable that holds the message.

// var greeting = function(person) {
//     var message = "Hello, " + person.name + "! You are " + person.age + " years old.";
//     return message;
//   };
  
//   var person = {
//     name: "Alina",
//     age: 18
//   };
  
//   console.log(greeting(person));

// 6. Write a function that takes an array of numbers and returns the maximum value. Use
// the spread operator (…) to pass the array elements as arguments to the Math.max
// function. Use let to declare a variable that holds the maximum value.

// let findMax = function(numbers) {
//     let max = Math.max(...numbers);
//     return max;
//   };
  
//   let numbers = [5, 9, 2, 1, 8];
//   console.log(findMax(numbers));
  


  
