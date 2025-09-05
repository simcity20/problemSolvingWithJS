// Understading for of for in creating customer iterators and generators.
// function makeIterator(array) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < array.length) {
//         return { value: array[index++], done: false };
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//   };
// }
// const numbers = [10, 20, 30];
// const iterator = makeIterator(numbers);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// ===============================
// const arr = [10, 20, 30];
// for (let value of arr) {
//   console.log(value);
// }
// ==========================================
// const person = { name: 'Foysal', age: 24, city: 'Dhaka' };
// for (let key in person) {
//   console.log(key, ';', person[key]);
// }
// =====Example : Simple Generator ===================
// function* numberGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = numberGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// ================ Example: Generator with for of
function* conutUpto(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}
for (let value of conutUpto(5)) {
  console.log(value);
}
