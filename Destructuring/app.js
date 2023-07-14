// 1. Write a function that takes an array of two numbers and returns their sum. Use array
// destructuring to assign the numbers to variables.

// function sumNumbers([a, b]) {
//     return a + b;
// }

// const numbers = [3, 5];
// const result = sumNumbers(numbers);
// console.log(result);

// 2. Write a function that takes an object with name, age and occupation properties and
// returns a string with the person’s information. Use object destructuring to assign the
// properties to variables.

// function getPersonInfo({ name, age, occupation }) {
//     return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
// }

// const person = {
//     name: "Alina",
//     age: 18,
//     occupation: "Software Engineer"
//   };
  
//   const personInfo = getPersonInfo(person);
//   console.log(personInfo);
  
// 3. Write a function that takes an array of objects with name and score properties and
// returns the name of the person with the highest score. Use array destructuring and the
// spread operator (…) to get the first element and the rest of the array.

// function getPersonWithHighestScore(scores) {
//     const [firstPerson, ...restOfScores] = scores;
//     let highestScore = firstPerson.score;
//     let personWithHighestScore = firstPerson.name;
    
//     for (const key of restOfScores) {

//         let { name, score } = key;
         
//       if (score > highestScore) {
//         highestScore = score;
//         personWithHighestScore = name;
//       }
//     }
  
//     return personWithHighestScore;
//   }

//   const scores = [
//     { name: "Wajiha", score: 80 },
//     { name: "Alina", score: 95 },
//     { name: "Wasfa", score: 87 }
//   ];
  
//   const personWithHighestScore = getPersonWithHighestScore(scores);
//   console.log(personWithHighestScore);
    
// 4. Write a function that takes an object with firstName, lastName and middleName
// properties and returns a string with the person’s initials. Use object destructuring with
// default values to assign the properties to variables.

// function getInitials({ firstName, lastName, middleName}) {
//     const firstInitial = firstName[0];
//     const middleInitial = middleName[0];
//     const lastInitial = lastName[0];
  
//     return `${firstInitial}${middleInitial}${lastInitial}`;
//   }

//   const person = {
//     firstName: "Alina",
//     lastName: "Arain",
//     middleName: "Aziz"
//   };
  
//   const initials = getInitials(person);
//   console.log(initials);
  
// 5. Write a function that takes an array of strings and returns an object with two properties:
// first, which is the first element of the array, and last, which is the last element of the array.
// Use array destructuring and shorthand property names to create the object.

// function getFirstAndLast(arr) {
//     const [first, ...rest] = arr;
//     const last = rest.pop();
  
//     return { first, last };
// }

// const strings = ["apple", "banana", "cherry"];

// const result = getFirstAndLast(strings);
// console.log(result);

  

