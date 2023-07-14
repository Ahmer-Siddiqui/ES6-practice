// 1. Write a function that takes an array of numbers and returns a map that maps each
// number to its square.
// const arr = [1,2,3,4,5];
// function squareMap(numbers) {
//     const squareMap = numbers.map((elem)=>{
//         return elem * elem;
//     })
    
//     return squareMap;
// }
// console.log(squareMap(arr))

// 2. Write a function that takes an array of objects with name and age properties and
// returns a map that maps each name to its corresponding age.

// function mapNamesToAges(arr) {
//     const nameToAgeMap = new Map();
//     arr.forEach(obj => {
//       const name = obj.name;
//       const age = obj.age;
//       nameToAgeMap.set(name, age);
//     });
//     return nameToAgeMap;
//   }
  
//   const people = [
//     { name: 'Alina', age: 18 },
//     { name: 'Ahmer', age: 20 },
//     { name: 'Wasfa', age: 19 }
//   ];
  
//   const result = mapNamesToAges(people);
//   console.log(result);
  
// 3. Write a function that takes a map and a key and returns a boolean value indicating
// whether the map contains the key or not.

// function mapContainsKey(map, key) {
//     return map.has(key);
//   }

// const myMap = new Map();
// myMap.set('name', 'John');
// myMap.set('age', 25);

// console.log(mapContainsKey(myMap, 'name')); 
// console.log(mapContainsKey(myMap, 'city')); 

// 4. Write a function that takes a map and a callback function and returns a new map that
// contains the key-value pairs from the original map that satisfy the callback function.

// function filterMap(map, callback) {
//     const filteredMap = new Map();
//     map.forEach((value, key) => {
//       if (callback(key, value)) {
//         filteredMap.set(key, value);
//       }
//     });
//     return filteredMap;
//   }
  
//   const myMap = new Map();
//   myMap.set('name', 'Alina');
//   myMap.set('age', 18);
//   myMap.set('city', 'New York');
  
//   function isString(value) {
//     return typeof value === 'string';
//   }
  
//   const filtered = filterMap(myMap, isString);
//   console.log(filtered);

  
// 5. Write a function that takes two maps and returns a new map that contains the key value
// pairs from both maps. If there are duplicate keys, the values from the second map
// should overwrite the values from the first map.

// function mergeMaps(map1, map2) {
//     const mergedMap = new Map([...map1, ...map2]);
//     return mergedMap;
//   }

// const map1 = new Map();
// map1.set('name', 'Alina');
// map1.set('age', 18);

// const map2 = new Map();
// map2.set('age', 30);
// map2.set('city', 'New York');

// const merged = mergeMaps(map1, map2);
// console.log(merged);

