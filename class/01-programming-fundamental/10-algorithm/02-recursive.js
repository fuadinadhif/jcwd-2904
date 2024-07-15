/* RECURSIVE */
// Fibonacci - O(?)
let counter = 0;
function fibonacciRecursive(n) {
  console.log(++counter);
  if (n < 0 || typeof n !== "number") throw new Error("Invalid input!");
  if (n === 0 || n === 1) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(-1)); // throw error
// console.log(fibonacciRecursive("one")); // throw error
// console.log(fibonacciRecursive(0)); // 0
// console.log(fibonacciRecursive(1)); // 1
// console.log(fibonacciRecursive(2)); // 1
// console.log(fibonacciRecursive(3)); // 1
// console.log(fibonacciRecursive(4)); // 2
// console.log(fibonacciRecursive(10)); // 34

// Factorial - O(n)
function factorialRecursive(n) {
  if (n === 0 || n < 0 || typeof n !== "number")
    throw new Error("Factorial error");
  if (n === 1) return 1;

  return n * factorialRecursive(n - 1);
}

// console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(6));
