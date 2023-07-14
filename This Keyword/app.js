// 1. Create an object called `person` with a `name` property and a `greet` method. The
// `greet` method should log a greeting message with the person's name.

// const person = {
//     name: "Alina",
//     greet: function() {
//       console.log("Hello, " + this.name + "!");
//     }
//   };
  
//   person.greet();
  
// 2. Create a constructor function called `Car` that has `brand` and `speed` properties.
// Add a method called `accelerate` that increases the speed of the car by a given
// value. Add a method called `print Speed` that logs the current speed of the car.

// class Car {
//     constructor(brand) {
//       this.brand = brand;
//       this.speed = 0;
//     }
  
//     accelerate(value) {
//       this.speed += value;
//     }
  
//     printSpeed() {
//       console.log(`Current speed: ${this.speed} km/h`);
//     }
//   }
  
//   const myCar = new Car("Toyota");
  
//   myCar.printSpeed();
//   myCar.accelerate(50);
//   myCar.printSpeed();
  
//   myCar.accelerate(30);
//   myCar.printSpeed();

// 3. Create an object called `calculator` with a `value` property and three methods: `add`,
// `subtract`, and `multiply`. Each method should take a number as a parameter and
// update the `value` property accordingly. Add a method called `printValue` that logs
// the current value.

// const calculator = {
//     value: 0,
  
//     add: function(number) {
//       this.value += number;
//     },
  
//     subtract: function(number) {
//       this.value -= number;
//     },
  
//     multiply: function(number) {
//       this.value *= number;
//     },
  
//     printValue: function() {
//       console.log("Current value: " + this.value);
//     }
//   };
  
//   calculator.printValue();
//   calculator.add(5);
//   calculator.printValue();
  
//   calculator.subtract(2);
//   calculator.printValue(); 
  
//   calculator.multiply(4);
//   calculator.printValue();
    
// 4. Imagine you have an object called book with properties like title, author, and pages.
// How would you define a method called printInfo that logs a message displaying the
// book's title, author, and number of pages using this keyword?

// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     pages: 218,
//     printInfo: function() {
//       console.log(`Title: ${this.title}`);
//       console.log(`Author: ${this.author}`);
//       console.log(`Number of Pages: ${this.pages}`);
//     }
//   };
  
//   book.printInfo();
  
// 5. You have a constructor function called Person that creates person objects with
// properties like name and age. How would you define a method called introduce that
// logs a greeting message including the person's name and age, using this keyword?

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     introduce() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   const person = new Person("Alina", 18);
  
//   person.introduce();
  
// 6. Consider an object called counter with a property count and two methods:
// increment and reset. How would you define the increment method so that it
// increases the count property by 1 using this keyword?

// const counter = {
//     count: 0,
  
//     increment: function() {
//       this.count += 1;
//     },
  
//     reset: function() {
//       this.count = 0;
//     }
//   };
  
//   counter.increment();
//   console.log(counter.count);
//   counter.increment();
//   console.log(counter.count); 
//   counter.reset();
//   console.log(counter.count); 
  
// 7. Let's say you have an object called product with properties like name, price, and
// discount. How would you define a method called calculateDiscountedPrice that
// calculates and returns the discounted price of the product using this keyword?

// const product = {
//     name: "Example Product",
//     price: 100,
//     discount: 0.2,
  
//     calculateDiscountedPrice: function() {
//       const discountedPrice = this.price - (this.price * this.discount);
//       return discountedPrice;
//     }
//   };
  
//   const discountedPrice = product.calculateDiscountedPrice();
//   console.log(discountedPrice); 

// 8. Imagine you have a function called play which is defined inside an object called
// game. How would you call the play function from within the object using this
// keyword?

// const game = {
//     play: function() {
//       console.log("Play Func");
//     },
    
//     start: function() {
//         console.log("Start Func");
//       this.play();
//     }
//   };
  
//   game.start(); 
