function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const numbers = [10, 20, 30, 40, 50];
const targetValue = 40;
const result = linearSearch(numbers, targetValue);
if (result !== -1) {
  console.log(`sucess  ${result} index  `);
} else {
  console.log('failure this project');
}
