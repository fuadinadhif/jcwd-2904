// 1. First Way
function compute(action, x, y) {
  if (action === "add") {
    return x + y;
  } else if (action === "subtract") {
    return x - y;
  } else if (action === "multiply") {
    return x * y;
  } else if (action === "divide") {
    return x / y;
  } else {
    return "Wrong action!";
  }
}

// console.log(compute("add", 10, 5));
// console.log(compute("divide", 10, 5));
// console.log(compute("modulus", 10, 5));

// 2. Callback Way
// Higher-order function
function computeCB(callback, x, y) {
  return callback(x, y);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// console.log(computeCB(add, 10, 50));
// console.log(computeCB(multiply, 10, 50));
// console.log(computeCB((x, y) => x * y, 10, 50));

// Arrow Function
// Form 1
// function modulus(x, y) {
//   return x % y;
// }

// Form 2
// const modulus = function modulus(x, y) {
//   return x % y;
// };

// Form 3
// const modulus = function (x, y) {
//   return x % y;
// };

// Form 4
// const modulus = (x, y) => {
//   return x % y;
// };

// Form 5
// const modulus = (x, y) => x % y;

// Form 6
// const modulus = x => x % x;

// Arrow Function in JS
const array = [1, 2, 3, 4, 5];

// const result = array.map(function (item) {
//   return item + 1;
// });

// const result = array.map((item) => Math.floor(item + 1));
// result.push(
//   (function returnTen() {
//     return 10;
//   })()
// );

// IIFE - Immediate Invoke Function Expression - ()()
// console.log((() => 10)());

// Callback Implementation
// function greet(name, cb) {
//   console.log(`Hai, ${name}!`);
//   if (cb) {
//     cb();
//   }
// }

// function sayGoodBye() {
//   console.log("See you later!");
// }

// console.log("Hai");

// greet("Bejo", function () {
//   greet("Paijo", function () {
//     greet("Tejo", function () {
//       greet("Tukiyem", sayGoodBye);
//     });
//   });
// });

// Function Sequence
let result;

function greet(str) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();
// console.log(result);

// Neccessary Callback - Phase 1
// function getUserInfo(name) {
//   setTimeout(() => {
//     const userInfo = {
//       name: name,
//       age: 75,
//     };

//     return userInfo;
//   }, 1000);
// }

// function greetUser(userInfo) {
//   console.log(`Hai, ${userInfo.name}! You are ${userInfo.age} years old.`);
// }

// const userInfo = getUserInfo("Ucup");
// greetUser(userInfo);

// Neccessary Callback - Phase 2
// setTimeout(() => {
//   console.log("I am 0 ms");
// }, 2000);

// function getUserInfo(name, callback) {
//   setTimeout(() => {
//     const userInfo = {
//       name: name,
//       age: 75,
//     };

//     callback(userInfo);
//   }, 2000);
// }

// function greetUser(userInfo) {
//   console.log(`Hai, ${userInfo.name}! You are ${userInfo.age} years old.`);
// }

// getUserInfo("Ucup", greetUser);

// console.log("I am first!");

// Pyramid Doom || Callback Hell
// function getUserInfo(name, callback) {
//   setTimeout(() => {
//     const userInfo = {
//       name: name,
//       age: 75,
//     };

//     callback(userInfo);
//   }, 1000);
// }

// function getCityInfo(callback) {
//   setTimeout(() => {
//     const city = "Yogyakarta";
//     callback(city);
//   }, 1000);
// }

// function getFavoriteColor(callback) {
//   setTimeout(() => {
//     const color = "Red";
//     callback(color);
//   }, 1000);
// }

// function getBestFriend(callback) {
//   setTimeout(() => {
//     const bestFriend = "Dhika";
//     callback(bestFriend);
//   }, 1000);
// }

// function getFriendFavoriteMovie(callback) {
//   setTimeout(() => {
//     const movie = "Godzilla Minus One";
//     callback(movie);
//   }, 1000);
// }

// function greetUser(userInfo, callback) {
//   console.log(`Hai, ${userInfo.name}`);

//   getCityInfo((color) => {
//     getFavoriteColor(() => {
//       console.log(`Best frined favorite color is ${color}`);
//       getBestFriend((bestFriend) => {
//         console.log(`${userInfo.name}'s best frined is ${bestFriend}`);
//         getFriendFavoriteMovie((movie) => {
//           console.log(`${userInfo.name}'s favorite movie is ${movie}`);
//         });
//       });
//     });
//   });

//   callback();
// }

// getUserInfo("Ucup", (userInfo) => {
//   greetUser(userInfo, () => console.log("All done with the nested pyramid"));
// });

// Solve the Pyramid Doom Using Promise
// function getUserInfo(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userInfo = {
//         name: name,
//         age: 75,
//       };

//       resolve(userInfo);
//     }, 1000);
//   });
// }

// function greetUser(userInfo) {
//   console.log(`Hai ${userInfo.name}!`);
//   return getCityInfo().then((city) => console.log(city));
// }

// function getCityInfo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const city = "Yogyakarta";
//       resolve(city);
//     }, 1000);
//   });
// }

// getUserInfo("Ucup").then(greetUser);
