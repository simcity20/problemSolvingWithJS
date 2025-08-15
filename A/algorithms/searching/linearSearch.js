// Linear Search কী?

// Linear Search (বা Sequential Search) হচ্ছে একটা সাধারণ সার্চ পদ্ধতি, যেখানে আমরা একটা লিস্ট (array) এর প্রতিটি এলিমেন্ট একে একে চেক করি যতক্ষণ না আমাদের কাঙ্ক্ষিত মান (target) পাওয়া যায় বা লিস্ট শেষ হয়ে যায়।

// এটা অনেকটা বইয়ের প্রতিটি পৃষ্ঠা একে একে পড়ে নির্দিষ্ট শব্দ খোঁজার মত।

// কাজের ধাপ (Algorithm Steps)

// প্রথম থেকে অ্যারের প্রতিটি এলিমেন্ট একে একে পরীক্ষা করো।

// যদি এলিমেন্ট == খুঁজতে থাকা মান (target), তাহলে index রিটার্ন করো।

// যদি পুরো অ্যারে শেষ হয়ে যায় কিন্তু কিছু না পাওয়া যায়, তাহলে -1 রিটার্ন করো।

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
