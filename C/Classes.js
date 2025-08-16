// Object-oriented programming with classses and inheritance in javascript
// basic class syntax
// ============================================================
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`hello, my name is ${this.name}, my age ${this.age} year old`);
//   }
// }
// const person1 = new Person('foysal ahmed sorker ', 25);
// person1.greet();
// =================================================================
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} kono sound korche`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} geo geo korse`);
  }
}
const dog1 = new Dog('Tommy', 'German Shepherd');
dog1.makeSound();
dog1.bark();
