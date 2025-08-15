// Merge Sort কীভাবে কাজ করে?
// Merge Sort হলো একটা Divide and Conquer অ্যালগরিদম:
// Divide (ভাগ করো) → অ্যারেটাকে মাঝ থেকে দুই ভাগে ভাগ করো

// Conquer (রিকারশন দিয়ে সলভ করো) → দুইভাগের ওপর আবার Merge Sort চালাও যতক্ষণ না অ্যারের সাইজ ১ হয়

// Merge (জোড়া লাগাও) → দুইভাগকে সাজানো অবস্থায় একসাথে জোড়া লাগাও
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}
console.log(mergeSort([2, 33, 3, 33, 343, 67, 55, 6]));
