// // understading closures, lexical scoping , and their use cases in Javascript.
// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw: function (amount) {
//       balance -= amount;
//       return balance;
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };
// }
// const account = createBankAccount(1000);
// console.log(account.deposit(500));
// console.log(account.withdraw(200));
// console.log(account.getBalance());
// console.log(account.deposit(1900));
// -------------------------------------------------------------------
// function multiplier(factor) {
//   return function (num) {
//     return num * factor;
//   };
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5));
// console.log(triple(5));
// ----------------------------------------------------------------------------
function greet(name) {
  setTimeout(function () {
    console.log('hello, ' + name);
  }, 2000);
}
greet('foysal ahmed sorker');
