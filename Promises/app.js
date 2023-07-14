// // 1. Write a function that takes a number and returns a promise that resolves with the
// // square of the number after 1 second.

// // function calculateSquare(number) {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //           const square = number * number;
// //           resolve(square);
// //       }, 1000);
// //     });
// //   }

// // calculateSquare(5).then((val)=>{
// //     console.log(val);
// // })

// // 2. Write a function that takes an array of promises and returns a promise that resolves
// // with an array of the resolved values of each promise.

// // function resolvePromises(promises) {
// //     return Promise.all(promises);
// //   }
  
// //   const promises = [
// //     new Promise((resolve, reject) => setTimeout(() => resolve('Promise 1 resolved'), 1000)),
// //     new Promise((resolve, reject) => setTimeout(() => resolve('Promise 2 resolved'), 2000)),
// //     new Promise((resolve, reject) => setTimeout(() => resolve('Promise 3 resolved'), 3000))
// //   ];
  
// //   resolvePromises(promises)
// //     .then(resolvedValues => {
// //       console.log(resolvedValues);
// //     })
// //     .catch(error => {
// //       console.error(error);
// //     });
  
// // 3. Write a function that takes a URL and returns a promise that fetches the data from the
// // URL and parses it as JSON.

// // function fetchData(url) {
// //     return fetch(url)
// // }
// // const url = 'https://jsonplaceholder.typicode.com/posts';

// // fetchData(url)
// // .then(res => res.json())
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });

// // 4. Write a function that takes two promises and returns a promise that resolves with the
// // sum of the resolved values of both promises.

// // function sumOfPromises(promise1, promise2) {
// //     return Promise.all([promise1, promise2])
// //       .then(([value1, value2]) => value1 + value2);
// //   }

// //   const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(5), 1000));
// // const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));

// // sumOfPromises(promise1, promise2)
// //   .then(sum => {
// //     console.log(sum);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });

// // 5. Write a function that takes a promise and a timeout in milliseconds and returns a
// // promise that rejects with an error if the original promise does not resolve within the
// // timeout.

// // function timeoutPromise(promise, timeout) {
// //     return new Promise((resolve, reject) => {
// //       const timeoutId = setTimeout(() => {
// //         reject(new Error('Promise timed out'));
// //       }, timeout);
  
// //       promise
// //         .then(result => {
// //           clearTimeout(timeoutId); 
// //           resolve(result);
// //         })
// //         .catch(error => {
// //           clearTimeout(timeoutId); 
// //           reject(error);
// //         });
// //     });
// //   }

// //   const originalPromise = new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //       resolve('Promise resolved');
// //     }, 2000);
// //   });
  
// //   timeoutPromise(originalPromise, 1500)
// //     .then(result => {
// //       console.log(result);
// //     })
// //     .catch(error => {
// //       console.error(error);
// //     });
  
  

// // 1. In this exercise, you will create a counter that will output the values in sequence
// // using Promises.
// // a. Set up a Promise that resolves with a value of Start Counting.
// // b. Create a function named counter() that has one argument that gets the value
// // and outputs it into the console.
// // c. Set up the next function in the Promise with four then() instances, which
// // should output a value into the counter function, and return a value which
// // will provide input for the subsequent then() instance. The returned values
// // should be one, then two, then three. The screen output in the console should
// // be the following:

// const startCountingPromise = new Promise((resolve, reject) => {
//     resolve("Start Counting");
//   });
  
//   function counter(value) {
//     console.log(value);
//   }
  
//   startCountingPromise
//     .then(value => {
//       counter(value); 
//       return 1;
//     })
//     .then(value => {
//       counter(value); 
//       return 2;
//     })
//     .then(value => {
//       counter(value); 
//       return 3;
//     })
//     .then(value => {
//       counter(value); 
//     });
  