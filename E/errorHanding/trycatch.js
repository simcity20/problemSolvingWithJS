// try {
//   let result = 10 / 2;
//   console.log(result);
//   let x = y + 5;
// } catch (error) {
//   console.log('akta error gotse:', error.message);
// }
/// custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error('o diye bag kora jay na');
  }
  return a / b;
}
try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.log('Custom Error: ', error.message);
}
