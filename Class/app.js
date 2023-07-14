// // // 2. Take the following steps to create a person class, and print instances of friends'
// // // names:
// // // a. Create a class for Person including the constructor for firstname and
// // // lastname.
// // // b. Create a variable and assign a value of the new Person object using your
// // // friend's first and last names.
// // // c. Now add a second variable with another friend's name using their first name
// // // and last name.
// // // d. Output both friends into the console with a greeting of hello

// // class Person {
// //     constructor(firstName, lastName) {
// //       this.firstName = firstName;
// //       this.lastName = lastName;
// //     }
// //   }
  
// //   let friend1 = new Person("Ahmer", "Siddiqui");
  
// //   let friend2 = new Person("Alina", "Aziz");
  
// //   console.log("Hello, " + friend1.firstName + " " + friend1.lastName + "!");
// //   console.log("Hello, " + friend2.firstName + " " + friend2.lastName + "!");
  
// // 3. Write a class that represents a person with a name and an age. The class should
// // have a constructor that takes the name and age as parameters, and a method that
// // returns the person’s introduction.

// // class Person {
// //     constructor(name, age) {
// //       this.name = name;
// //       this.age = age;
// //     }
  
// //     introduction() {
// //       return `My name is ${this.name} and I am ${this.age} years old.`;
// //     }
// //   }
  
// //   let person = new Person("Alina", 18);
  
// //   console.log(person.introduction());

// //   4. Write a class that represents a rectangle with a width and a height. The class should
// // have a constructor that takes the width and height as parameters, and two methods
// // that return the area and the perimeter of the rectangle.

// // class Rectangle {
// //     constructor(width, height) {
// //       this.width = width;
// //       this.height = height;
// //     }
  
// //     area() {
// //       return this.width * this.height;
// //     }
  
// //     perimeter() {
// //       return 2 * (this.width + this.height);
// //     }
// //   }
  
// //   let rectangle = new Rectangle(5, 3);
  
// //   console.log("Area:", rectangle.area());
// //   console.log("Perimeter:", rectangle.perimeter());
  
// // 5. Write a class that represents a circle with a radius. The class should have a
// // constructor that takes the radius as a parameter, and three methods that return the
// // diameter, the circumference and the area of the circle.

// // class Circle {
// //     constructor(radius) {
// //       this.radius = radius;
// //     }
  
// //     diameter() {
// //       return 2 * this.radius;
// //     }
  
// //     circumference() {
// //       return 2 * Math.PI * this.radius;
// //     }
  
// //     area() {
// //       return Math.PI * this.radius ** 2;
// //     }
// //   }
  
// //   let circle = new Circle(5);
  
// //   console.log("Diameter:", circle.diameter());
// //   console.log("Circumference:", circle.circumference());
// //   console.log("Area:", circle.area());
  
// // 6. Write a class that inherits from the person class and represents a student with a
// // name, an age and a course. The class should have a constructor that takes the name,
// // age and course as parameters, and a method that overrides the person’s
// // introduction to include the course.

// // class Person {
// //     constructor(name, age) {
// //       this.name = name;
// //       this.age = age;
// //     }
  
// //     introduction() {
// //       return `My name is ${this.name} and I am ${this.age} years old.`;
// //     }
// //   }
  
// //   class Student extends Person {
// //     constructor(name, age, course) {
// //       super(name, age);
// //       this.course = course;
// //     }
  
// //     introduction() {
// //       return `${super.introduction()} I am studying ${this.course}.`;
// //     }
// //   }
  
// //   let student = new Student("Alina", 18, "Computer Science");
  
// //   console.log(student.introduction());
  
// //   7. Write a class that inherits from the rectangle class and represents a square with a
// //   side. The class should have a constructor that takes the side as a parameter, and two
// //   methods that override the area and perimeter of the rectangle to use the side
// //   instead of the width and height.
// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height;
//     }
  
//     perimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   class Square extends Rectangle {
//     constructor(side) {
//       super(side, side);
//       this.side = side;
//     }
  
//     area() {
//       return this.side ** 2;
//     }
  
//     perimeter() {
//       return 4 * this.side;
//     }
//   }
  
//   let square = new Square(5);
  
//   console.log("Area:", square.area());
//   console.log("Perimeter:", square.perimeter());
  