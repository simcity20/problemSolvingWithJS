// Using iiff for creating private scopes in javascript
const counter = function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    value: function () {
      return count;
    },
  };
};
console.log(counter.value());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
