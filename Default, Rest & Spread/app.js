// 1. Write a function that takes two numbers and returns their sum. Use default parameters
// to assign 0 as the default value for both numbers.

// function calculateSum(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }

// console.log(calculateSum(1, 3)); 
// console.log(calculateSum(5));    
// console.log(calculateSum());  


// 2. Write a function that takes any number of arguments and returns an array with all the
// arguments. Use rest parameters to collect the arguments into an array.

// function collectArguments(...args) {
//     return args;
// }

// console.log(collectArguments(1, 2, 3));                      
// console.log(collectArguments("apple", "banana", "orange")); 
// console.log(collectArguments(true, false));                 
// console.log(collectArguments());                            

// 3. Write a function that takes an array of numbers and returns the maximum value. Use
// spread operator to pass the array elements as arguments to Math.max function.

// function findMaxValue(numbers) {
//     return Math.max(...numbers);
// }

// console.log(findMaxValue([1, 5, 3, 9, 2]));       

// 4. Write a function that takes two arrays and returns a new array with the elements of
// both arrays concatenated. Use spread operator to combine the arrays.

// function concatenateArrays(arr1, arr2) {
//     return [...arr1, ...arr2];
//   }
// console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));     

// 5. Write a function that takes an object with name, age and occupation properties and
// returns a new object with the same properties but with an additional id property. Use
// spread operator and shorthand property names to create the new object.

// function addIdToObject(person) {
//     const id = 1;
//     return { ...person, id };
//   }

// const person = { name: "Alina", age: 18, occupation: "Software Engineer" };
// const personWithId = addIdToObject(person);
// console.log(personWithId);

  
