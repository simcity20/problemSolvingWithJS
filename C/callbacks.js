// Understanding callback functions in asynchronous programming.
function fetchData(callback) {
  console.log('Fatching data...');
  setTimeout(function () {
    const data = { name: 'foysal', age: 25 };
    callback(data);
  });
}
function showData(user) {
  console.log('Name: ', user.name);
  console.log('Age: ', user.age);
}
fetchData(showData);
