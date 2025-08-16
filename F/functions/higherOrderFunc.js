function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Foysal";
  console.log(callback(name));
}

processUserInput(greet);