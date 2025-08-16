আচ্ছা 👍 এখন আমি তোমাকে First-Class Functions জাভাস্ক্রিপ্টে সহজভাবে বাংলায় বুঝাই।


---

🟢 First-Class Function কী?

জাভাস্ক্রিপ্টে function হচ্ছে first-class citizen। মানে হলো:

ফাংশনকে ভ্যারিয়েবলে রাখা যায়

ফাংশনকে argument হিসেবে অন্য ফাংশনে পাঠানো যায়

ফাংশনকে return করা যায় অন্য ফাংশন থেকে


এটাই হলো First-Class Functions।


---

১. Function কে Argument হিসেবে পাঠানো

// সাধারণ function
function greet(name) {
  return `Hello, ${name}`;
}

// অন্য function যেটা argument হিসেবে function নেয়
function processUserInput(callback) {
  const name = "Foysal";
  console.log(callback(name)); // callback ফাংশনকে কল করা হচ্ছে
}

processUserInput(greet);

🟡 আউটপুট:

Hello, Foysal

👉 এখানে greet ফাংশনকে processUserInput এর ভিতরে argument হিসেবে পাঠানো হয়েছে।


---

২. Function থেকে Function রিটার্ন করা

function multiplier(x) {
  // ভেতরে আরেকটা ফাংশন return করছে
  return function(y) {
    return x * y;
  }
}

// ২ দিয়ে গুণ করার ফাংশন
const double = multiplier(2);

console.log(double(5));  // 10
console.log(double(10)); // 20

🟡 আউটপুট:

10
20

👉 multiplier ফাংশন নতুন একটা ফাংশন return করেছে, যেটা x এর ভ্যালু ধরে রাখে (closure ব্যবহার করে)।


---

🟢 সারাংশ (সহজভাবে)

জাভাস্ক্রিপ্টে function একটা value এর মতো কাজ করে।

আমরা এটাকে ভ্যারিয়েবলে রাখতে পারি, প্যারামিটার হিসেবে পাঠাতে পারি, আবার return করতেও পারি।

এটাই First-Class Functions।



---

চাও কি আমি এগুলোর একটা বাস্তব example দেখাই (যেমন calculator app বা event handler এর মতো) যাতে ভালোভাবে মনে থাকে?

