function maxProfit(prices) {
  let minPrice = Infinity; // Initialize minimum price to positive infinity
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price); // Update minimum price seen so far
    maxProfit = Math.max(maxProfit, price - minPrice); // Calculate potential profit
  }

  return maxProfit;
}

// Example usage
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log("Max profit in", prices1, ":", maxProfit(prices1)); // Output: 5
console.log("Max profit in", prices2, ":", maxProfit(prices2)); // Output: 0
