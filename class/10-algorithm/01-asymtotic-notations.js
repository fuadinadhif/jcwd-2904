/* Asymtotic Notations
1. Theta - Best Case
2. Omega - Average Case
3. Big O - Worst Case
*/
let array = [1, 2, 3, 4, 5];
console.log(array.find((item) => item === 5));

// Array - Big O
/*
1. Insert & Remove @ the end - O(1)
2. Insert & Remove @ the start - O(n)
3. slice/splice/concat/join - O(n)
4. map/foreach/find/filter - O(n)
*/
let arr = [1, 2, 3, 4, 5];

// Object - Big O
/*
1. Insert - O(1)
2. Remove - O(1)
3. Search - O(n)
4. Loop - O(n)
*/
let obj = { name: "John", age: 27 };

// Factorial
/*
Question: What is the factorial from a given a integer?

!-1 = throw error
!"string" = throw error
!0 = 1
!1 = 1
!2 = !1 * 2 = 2
!3 = !2 * 3 = 6
!4 = !3 * 4 = 24
!n = (!n - 1) * n 

1. Validating the input, only accept positive integers, else throw error
2. Validating the input, if n = 0 || 1, return 1
3. Create result variable with 2 as default value
4. Make a loop
5. Inside the loop, multiply current integer with counter + 1
6. Store the result of multiply operation
7. If counter less than the given integer, return result variable
*/
// O(1+1+1+n+1) - O(4+n) - O(n)
// n = 10 - O(14)
// n = 100 - O(104)
// n = 1000 - O(1004)
// n = 1000000 - O(1000004)
function factorial(n) {
  // Constant - O(1)
  if (n < 0 || typeof n !== "number") {
    throw new Error("Invalid input!");
  }

  // Constant - O(1)
  if (n === 0 || n === 1) return 1;

  // Constant - O(1)
  let result = 2;

  // Linear - O(n)
  for (let i = 2; i < n; i++) {
    result = result * (i + 1);
  }

  // Constant - O(1)
  return result;
}

// console.log(factorial(-1)); // throw error
// console.log(factorial("one")); // throw error
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 1
console.log(factorial(3)); // 1
console.log(factorial(4)); // 1
console.log(factorial(5)); // 1
console.log(factorial(6)); // 120

// Fibonacci
/*
Question: Given an n integer, find the fibonacci sequence of that integer!

1. Validate the input, only accept positive integers, else throw error
2. If n === 0 || 1, return n
3. Make a default sequence variable, with array [0, 1] as the default value
4. Make a loop as much as the n value
5. Inside the loop, add prev value with current value to get next value
6. If loop ended, return the last element in the sequence array
*/
// O(1+1+1+n+1) - O(4+n) - O(n)
function fibonacci(n) {
  // Constant - O(1)
  if (n < 0 || typeof n !== "number") throw new Error("Invalid input!");
  // Constant - O(1)
  if (n === 0 || n === 1) return n;

  // Constant - O(1)
  let sequence = [0, 1];

  // Linear - O(n)
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  // Constant - O(1)
  return sequence.pop();
}

// console.log(fibonacci(-1)); // throw error
// console.log(fibonacci("one")); // throw error
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 1
console.log(fibonacci(4)); // 2
console.log(fibonacci(10)); // 34

// isPrime
/*
Questions: Given an integer, return true if the integer is prime, else return false!

1. Validate the input, only accept positive integer, throw error
2. If input less than 2, return false
3. Make a loop, with counter start from 2 until counter less than n
4. Check if n modulus counter is equal to 0, if yes, return false
5. If loop was not returned false, return true after it
*/
// O(n)
function isPrime(n) {
  if (n < 0 || typeof n !== "number") throw new Error("Invalid input!");
  if (n < 2) return false;

  // for (let i = 2; i < n; i++)
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(-1)); // throw error
// console.log(isPrime("one")); // throw error
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(5)); // true
console.log(isPrime(10)); // false
console.log(isPrime(11));
console.log(isPrime(35));

// Is Power Of Two
/*
Question: Return true if the given integer is power of two, else return false

1. Validate input, only accept positive integer, else throw error
2. If input less than zero, return false
3. Make a loop to prove this -> 8 / 2 = 4 / 2 = 2 / 2 = 1
4. Stop the loop if n less than 1
5. If n % 2 inside the loopp is not equal to 0, return false
6. If loop ended without returned false, return true
*/
// 1.1 - O(n)
function isPowerOfTwo(n) {
  if (n < 0 || typeof n !== "number") throw new Error("Invalid input");

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }

  return true;
}

// 1.2 - O(1)
function isPowerOfTwoBitwise(n) {
  if (n < 0 || typeof n !== "number") throw new Error("Invalid input");

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(4));
console.log(isPowerOfTwoBitwise(6));
console.log(isPowerOfTwoBitwise(8));
console.log(isPowerOfTwoBitwise(16));
console.log(isPowerOfTwoBitwise(14));
