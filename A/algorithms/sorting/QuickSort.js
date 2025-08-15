//  Quick Sort কী?
// Quick Sort একটা Divide and Conquer অ্যালগরিদম।
// মানে এটা বড় অ্যারের সমস্যাকে ছোট ছোট অংশে ভাগ করে কাজ করে।

// ধাপে ধাপে কাজ করার নিয়ম:

// একটা pivot (রেফারেন্স সংখ্যা) বেছে নিতে হবে।

// যেসব সংখ্যা pivot থেকে ছোট, সেগুলো left অ্যারে-তে যাবে।

// যেসব সংখ্যা pivot থেকে বড়, সেগুলো right অ্যারে-তে যাবে।

// এরপর left এবং right অ্যারে-কে আবার একইভাবে sort করতে হবে (Recursive call)।

// শেষে left + pivot + right মিলিয়ে সাজানো অ্যারে পাওয়া যাবে।
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
let numbers = [8, 4, 7, 3, 10, 2];
console.log(quickSort(numbers));
//  ধাপে ধাপে উদাহরণ
// ধরা যাক arr = [8, 4, 7, 3]

// Pivot = 3

// Left = []

// Right = [8, 4, 7]

// তারপর Right অ্যারে আবার sort হবে → [4, 7, 8]

// শেষ ফলাফল: [3, 4, 7, 8]

// ⏱️ Time Complexity
// Best case: O(n log n)

// Worst case: O(n²) (যখন অ্যারে প্রায় sorted থাকে এবং খারাপ pivot বেছে নেওয়া হয়)

// Average case: O(n log n)
