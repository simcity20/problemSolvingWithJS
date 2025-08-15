// ## Time and Space complexity analysis
// ঠিক আছে — আমি বাংলায় ধাপে ধাপে ব্যাখ্যা করব **Big O Notation**, **Time Complexity**, আর **Space Complexity** — সাথে **JavaScript উদাহরণসহ**।

// ---

// ## **1. Big O Notation কী?**

// **Big O Notation** হলো একটি গাণিতিক পদ্ধতি যা দিয়ে আমরা **কোনো অ্যালগরিদম কত সময় ও মেমোরি খরচ করবে** সেটা নির্ধারণ করি, **ইনপুটের সাইজ বাড়ার সাথে সাথে**।

// এটা মূলত **Worst Case Scenario** বোঝায়।

// 📌 সহজ ভাষায়:

// > ইনপুট যত বড় হবে, প্রোগ্রাম কত দ্রুত (বা ধীরে) চলবে, সেটার একটা মাপ।

// ---

// ## **2. Time Complexity (সময় জটিলতা)**

// এটা বোঝায়, ইনপুট সাইজ (`n`) অনুযায়ী **কতবার অপারেশন চলছে**।

// ### সাধারণ Time Complexity-এর ধরনগুলো:

// | Complexity     | নাম               | উদাহরণ                              |
// | -------------- | ----------------- | ----------------------------------- |
// | **O(1)**       | Constant Time     | Array থেকে index দিয়ে element নেওয়া |
// | **O(log n)**   | Logarithmic Time  | Binary Search                       |
// | **O(n)**       | Linear Time       | Array traverse                      |
// | **O(n log n)** | Linearithmic Time | Merge Sort, Quick Sort              |
// | **O(n²)**      | Quadratic Time    | Nested loop                         |
// | **O(2ⁿ)**      | Exponential Time  | Recursive Fibonacci                 |
// | **O(n!)**      | Factorial Time    | Travelling Salesman Problem         |

// ---

// ### **JavaScript উদাহরণ**

// **O(1) – Constant Time**

// javascript
let arr1 = [10, 20, 30, 40];
console.log(arr1[2]);

// সবসময় এক ধাপে কাজ শেষ হবে

// O(n) – Linear Time

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // ইনপুট যত বড় হবে, তত বেশি লুপ চলবে
}
// O(n²) – Quadratic Time**

// ```javascript
let arr3 = [1, 2, 3];
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    console.log(arr3[i], arr3[j]); // Nested loop → O(n²)
  }
}

// #### **O(log n) – Logarithmic Time (Binary Search)**

// ```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 6));

// ## **3. Space Complexity (মেমোরি জটিলতা)**

// এটা বোঝায়, প্রোগ্রাম চালানোর সময় **কত মেমোরি লাগছে**।

// 📌 Space Complexity-এর মধ্যে থাকে:

// * **Variable**
// * **Data Structure**
// * **Function Call Stack**
// * **Recursion**

// ---

// ### **Space Complexity উদাহরণ**

// O(1) – Constant Space

//javascript
function sum(a, b) {
  return a + b; // মেমোরি ফিক্সড
}

// #### **O(n) – Linear Space**

function createArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr; // ইনপুট যত বড় হবে, তত মেমোরি লাগবে
}

// #### **O(n) – Recursion Space**

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); // প্রতিবার ফাংশন কল stack-এ যোগ হচ্ছে
}

// ## **4. Time vs Space Trade-off**

// অনেক সময় **সময় বাঁচাতে বেশি মেমোরি** ব্যবহার করা হয়, আবার **মেমোরি বাঁচাতে বেশি সময়** নেওয়া হয়।

// 📌 উদাহরণ:

// * **Hash Table** → বেশি মেমোরি লাগলেও সার্চ খুব দ্রুত হয় (**O(1)**)
// * **Bubble Sort** → মেমোরি কম লাগে কিন্তু সময় বেশি লাগে (**O(n²)**)

// ---

//5. Common Big O Chart (ইনপুট বাড়লে কেমন গ্রো করে)**

// O(1)         → সবসময় একই সময়
// O(log n)     → ধীরে বাড়ে
// O(n)         → সরলরেখা হারে বাড়ে
// O(n log n)   → মাঝারি হারে বাড়ে
// O(n²)        → খুব দ্রুত বাড়ে
// O(2ⁿ) / O(n!)→ বিস্ফোরকভাবে বাড়ে
// ```

// আমি চাইলে তোমার জন্য **Big O Complexity-এর বাংলা ভিজ্যুয়াল চার্ট** বানিয়ে দিতে পারি, যেখানে প্রতিটি complexity কেমন বাড়ে সেটা গ্রাফ আকারে দেখা যাবে, আর প্রতিটির JavaScript animation example থাকবে।

// তুমি কি চাও আমি সেটা বানিয়ে দিই?
