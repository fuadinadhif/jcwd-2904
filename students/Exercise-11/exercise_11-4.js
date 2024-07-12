const climbStairs = function (n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let temp = 0;
  let fib1 = 1;
  let fib2;

  for (let i = 1; i <= n; i++) {
    fib2 = temp + fib1;
    temp = fib1;
    fib1 = fib2;
  }
  return fib2;
};

console.log(climbStairs(10));
