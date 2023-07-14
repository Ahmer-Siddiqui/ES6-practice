// 1. Create a function called `delayedGreeting` that takes a `name` parameter. The
// function should use `setTimeout` to delay the greeting message by 2 seconds. Use
// `async/await` to make the function asynchronous.

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
  
//   async function delayedGreeting(name) {
//     await delay(2000);
//     console.log(`Hello, ${name}!`);
//   }
  
//  delayedGreeting("Alina");

// 2. Create a function called `fetchData` that simulates an asynchronous API call. The
// function should return a promise that resolves with a data object after 3 seconds.
// Use `async/await` to make the function asynchronous.

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
  
//   async function fetchData() {
//     await delay(3000); 
//     const data = fetch('https://jsonplaceholder.typicode.com/posts');
//     return data;
//   }
  
//   fetchData()
//   .then(res => res.json())
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
  
// 3. Create a function called `fetchUsers` that fetches a list of users from an API. The
// function should return a promise that resolves with the list of users after 4 seconds.
// Use `async/await` to make the function asynchronous.

// async function fetchUsers() {
//     let users = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//     users = await users.json() ; 
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(users)
//         },4000)
//     })
//   }
  
//   fetchUsers()
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
  
// 4. Create a function called `fetchData` that fetches data from an API based on a given
// `id`.

// async function fetchData(id) {
//   let users = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
//   users = await users.json() 
//   return users
// }
// const myId = prompt("Enter Fetch id?");
// fetchData(myId)
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// 5. The function should return a promise that resolves with the fetched data after 5
// seconds. Use `async/await` to make the function asynchronous.

// async function fetchData(id) {
//   let users = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`); 
//   users = await users.json() ; 
//   return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//           resolve(users)
//       },5000)
//   })
// }
// const myId = prompt("Enter Fetch id?");
// fetchData(myId)
//   .then((users) => {
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
// });

// 6. This exercise will demonstrate how to use await to wait on a Promise inside an async
// function. Using await and async, create a counter with timeout(), and increment a
// global counter value.
// a. Create a global value for a counter.
// b. Create a function that takes one argument. Return the result of a new
// Promise, setting a setTimeout() function that will contain the resolve
// instance.
// c. Increment the counter within setTimeout(), adding one every second.
// Resolve the Promise with the value of the counter and the value of the
// variable that was in the function argument.
// d. Create an asynchronous function that outputs into the console the value of
// the global counter and the value of the argument of the function.
// e. Create a variable to capture the returned resolve value from the await
// function. Output that result into the console.
// f. Create a loop to iterate 10 times, incrementing the value and invoking the
// async function, passing the value of the increment variable as the parameter
// in the function.

// let counter = 0;

// function timeout(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       counter++;
//       resolve({ counter, value });
//     }, 1000);
//   });
// }

// async function incrementCounter(value) {
//   const result = await timeout(value);
//   console.log(`x Value ${result.value} Counter: ${result.counter}`);
// }

// async function runLoop() {
//   for (let i = 1; i <= 10; i++) {
//     await incrementCounter(i)
//   }
// }

// runLoop();
