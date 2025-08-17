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
