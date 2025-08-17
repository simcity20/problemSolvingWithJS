// understanding the greedy approach in solving optimization problems
function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let result = [];
  let i = 0;
  while (amount > 0 && i < coins.length) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      result.push(coins[i]);
    } else {
      i++;
    }
  }
  return result;
}
console.log(coinChange([1, 2, 5, 10], 18));
// ==================================================
function coinChange(coins, amount) {
  // Step 1: কয়েনগুলো বড় থেকে ছোট করে সাজাও
  coins.sort((a, b) => b - a);

  let result = []; // এখানে কয়েনগুলো রাখা হবে
  let i = 0; // কয়েনের index

  // Step 2: যতক্ষণ না amount শূন্য হচ্ছে
  while (amount > 0 && i < coins.length) {
    // যদি বর্তমান কয়েন amount এর চেয়ে ছোট বা সমান হয়
    if (coins[i] <= amount) {
      amount -= coins[i]; // amount থেকে কয়েন বাদ দাও
      result.push(coins[i]); // কয়েন result এ যোগ করো
    } else {
      i++; // অন্যথায় পরের ছোট কয়েন এ চলে যাও
    }
  }

  return result; // চূড়ান্ত কয়েন লিস্ট রিটার্ন করো
}
