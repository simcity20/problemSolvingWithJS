// Binary Search কী?
// Binary Search হলো এমন একটি searching algorithm যা sorted array তে খুব দ্রুত কোনো element খুঁজে বের করতে পারে।

// এটি বারবার array কে দুই ভাগে ভাগ করে search করে।

// Time Complexity: O(log n)

// শর্ত: Array অবশ্যই ascending order (বা descending order) এ sort করা থাকতে হবে।

// 📌 ধাপে ধাপে কাজের প্রক্রিয়া
// শুরু: array এর প্রথম index (low) এবং শেষ index (high) ঠিক করো।

// মাঝখান: mid = Math.floor((low + high) / 2) বের করো।

// যদি arr[mid] == target → element পেয়ে গেছি।

// যদি arr[mid] < target → element ডানদিকে আছে → low = mid + 1 করো।

// যদি arr[mid] > target → element বামদিকে আছে → high = mid - 1 করো।

// এভাবে low <= high থাকা পর্যন্ত লুপ চলবে।

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
  }
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
  return -1;
}
let numbers = [1, 3, 5, 7, 9, 11, 13];
let target = 7;
let result = binarySearch(numbers, target);
if (result !== -1) {
  console.log(`element ${target} paoya gese index ${result} a`);
} else {
  console.log(`Element ${target} paoya jay ni`);
}
