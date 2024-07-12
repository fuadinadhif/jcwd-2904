// // 1. Celcius to Fahrenheit
// let celcius = 60;
// let fahrenheit = (celcius * 9) / 5 + 32;

// console.log(fahrenheit);

// // 2. Even number or odd
// let num1 = 10;
// if (num1 % 2 == 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// // 3. Prime or not
// let isPrime = true;
// console.log(isPrime);
// let num2 = 3;

// if (num2 <= 1) {
//   isPrime = false;
// } else {
//   for (let i = 2; i < num2; i++) {
//     if (num2 % i === 0) {
//       isPrime = false;
//       console.log("Im running");
//       break;
//     }
//   }
// }

// console.log(isPrime);

// // If else version
// if (isPrime) {
//   console.log(`${num2} is prime number`);
// } else {
//   console.log(`${num2} is NOT prime number`);
// }

// // Ternary version
// console.log(
//   isPrime ? `${num2} is prime number` : `${num2} is NOT prime number`
// );

// // 4. Sum of N numbers from 1
// let num3 = 5;
// let result = 0;

// for (let i = 1; i <= num3; i++) {
//   // result = result + i;
//   result += i;
//   console.log(result, i);
// }

// console.log(result);
// console.log((num3 * (num3 + 1)) / 2);

// // 5. Factorial
// let num4 = 4;
// let factorialResult = 1;

// for (let i = 1; i <= num4; i++) {
//   // factorialResult = factorialResult * 1
//   factorialResult *= i;
// }

// console.log(factorialResult);

// 6. Fibbonaci
let num5 = 2;

if (num5 < 0) {
  console.log("Fibonacci sequence is defined for non-negative integers only.");
} else if (num5 === 0) {
  console.log(0);
} else if (num5 === 1) {
  console.log(1);
}

let a = 0;
let b = 1;
let c;

for (let i = 1; i <= num5; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(a, b, c);
}

console.log(c);
