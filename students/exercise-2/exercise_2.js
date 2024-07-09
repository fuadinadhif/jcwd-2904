//  1.
// const num = 7;
// if (num % 2 > 0) {
//   console.log(`${num} is odd number`);
// } else {
//   console.log(`${num} is even number`);
// }

//  2.
// let isPrime = true;
// let num = 37;

// if (num <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//  3.
// const num = 5;
// let sumN = 0;

// for (let i = 1; i <= num; i++) {
//   sumN += i;
// }
// console.log(sumN)

//  4.
const numF = 6;
let factorialNumber = 1;
for (let i = numF; i > 1; i--) {
  factorialNumber *= i;
  console.log(factorialNumber);
}

//  5.
// const num = 1;
// let fib1 = 1;
// let fib2 = 1;
// let fibN = 0;

// if (num < 0) {
//   console.log("Fibonacci sequence is defined for non-negative integers only.");
// }

// if (num === 0) {
//   console.log(0);
// }

// if (num === 1 || num === 2) {
//   console.log(1);
// }
// for (let i = 3; i <= num; i++) {
//   fibN = fib1 + fib2;
//   fib1 = fib2;
//   fib2 = fibN;
//   console.log(fibN);
// }

//  console.log(fibN);

//  5. Review

// let n = 0;

// if (n < 0) {
//   console.log("Fibonacci sequence is defined for non-negative integers only.");
// } else if (n === 0) {
//   console.log(0);
// } else if (n === 1) {
//   console.log(1);
// }

// let a = 0;
// let b = 1;
// let c;

// for (let i = 2; i <= n; i++) {
//   c = a + b;
//   a = b;
//   b = c;
//   console.log(a, b, c);
// }

// console.log(c);

// function checkFibN(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//   for (let i = 3; i <= num; i++) {
//     fibN = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = fibN;
//     console.log(fibN);
//   }
//   return fibN;
// }

// console.log(checkFibN(15));
