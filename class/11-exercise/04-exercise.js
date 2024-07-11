function climbStairs(n) {
  // Base cases: 1 step for 1 stair, 1 or 2 steps for 2 stairs
  if (n === 1) return 1;
  if (n === 2) return 2;

  // Create a dynamic programming array to store results
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  // Iteratively calculate the number of ways for each step
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // Sum of ways to reach the previous two steps
  }

  return dp[n];
}

// Example usage
const n = 3;
const result = climbStairs(5);
console.log(`Number of ways to climb ${n} stairs:`, result);
