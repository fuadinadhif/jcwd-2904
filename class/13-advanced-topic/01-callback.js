/* -------------------------------------------------------------------------- */
/*                     Write a Function with Multiple Uses                    */
/* -------------------------------------------------------------------------- */
/* -------------------------------- 1. First Way ------------------------------- */
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
/* ------------------------------ End of First Way ----------------------------- */

/* ------------------------------ 2. Callback Way ------------------------------ */
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
/* --------------------------- End of Callback Way -------------------------- */

/* -------------------------------------------------------------------------- */
/*                     Regular Function to Arrow Function                     */
/* -------------------------------------------------------------------------- */
/* -------------------------------- The Forms ------------------------------- */
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
/* ---------------------------- End of The Forms ---------------------------- */

/* -------------------------- Arrow Function in JS -------------------------- */
// const array = [1, 2, 3, 4, 5];

// const result = array.map(function (item) {
//   return item + 1;
// });

// const result = array.map((item) => Math.floor(item + 1));
// result.push(
//   (function returnTen() {
//     return 10;
//   })()
// );
/* ----------------------- End of Arrow Function in JS ---------------------- */

/* ----------- IIFE - Immediate Invoke Function Expression - ()() ----------- */
// console.log((() => 10)());

// (function sumTwo(a, b) {
//   console.log(a + b);
// })(10, 20);
/* -------- End of IIFE - Immediate Invoke Function Expression - ()() ------- */

/* -------------------------------------------------------------------------- */
/*                           Callback Implementation                          */
/* -------------------------------------------------------------------------- */
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

// greet("Bejo", () => {
//   greet("Paijo", () => {
//     greet("Tejo", () => {
//       greet("Tukiyem", sayGoodBye);
//     });
//   });
// });
/* --------------------- End of Callback Implementation --------------------- */

/* -------------------------------------------------------------------------- */
/*                              Function Sequence                             */
/* -------------------------------------------------------------------------- */
// let result;

// function greet(str) {
//   result = str;
// }

// function hello() {
//   greet("hello");
// }

// function arigatou() {
//   greet("arigatou");
// }

// arigatou();
// hello();
// console.log(result);
/* ------------------------ End of Function Sequence ------------------------ */

/* -------------------------------------------------------------------------- */
/*                             Neccessary Callback                            */
/* -------------------------------------------------------------------------- */
/* ----------------------------- Phase 1 - Error ---------------------------- */
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
/* ------------------------- End of Phase 1 - Error ------------------------- */

/* --------------------------- Phase 2 - Solution --------------------------- */
// setTimeout(() => {
//   console.log("I am 0 ms");
// }, 0);

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
/* ------------------------- End of Phase 2 Solution ------------------------ */

/* -------------------------------------------------------------------------- */
/*                        Pyramid Doom || Callback Hell                       */
/* -------------------------------------------------------------------------- */
/* ------------------------------- The Problem ------------------------------ */
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

// function getFavoriteBook(callback) {
//   setTimeout(() => {
//     const book = "Harry Potter";
//     callback(book);
//   }, 1000);
// }

// function getFavoriteFood(callback) {
//   setTimeout(() => {
//     const favoriteFood = "Satay";
//     callback(favoriteFood);
//   }, 1000);
// }

// function getHobbies(callback) {
//   setTimeout(() => {
//     const hobbies = ["reading", "cooking", "sleeping"];
//     callback(hobbies);
//   }, 1000);
// }

// function getBestFriend(callback) {
//   setTimeout(() => {
//     const bestFriend = "Dhika";
//     callback(bestFriend);
//   }, 1000);
// }

// function getBestFriendFavoriteMovie(callback) {
//   setTimeout(() => {
//     const movie = "Godzilla Minus One";
//     callback(movie);
//   }, 1000);
// }

// function greetUser(userInfo, callback) {
//   const name = userInfo.name;
//   const age = userInfo.age;

//   console.log(`Hai, ${name}! You are ${age} years old.`);
//   getCityInfo((city) => {
//     console.log(`${name} lives in ${city} city.`);
//     getFavoriteColor((color) => {
//       console.log(`${name}'s favorite color is ${color.toLowerCase()}.`);
//       getFavoriteBook((book) => {
//         console.log(`${name}'s favorite book is ${book}`);
//         getFavoriteFood((food) => {
//           console.log(`${name}'s favorite food is ${food}`);
//           getBestFriend((bestFriend) => {
//             console.log(`${name}'s best friend is ${bestFriend}.`);
//             getBestFriendFavoriteMovie((movie) => {
//               console.log(`${bestFriend}'s favorite movie is ${movie}.`);
//               callback();
//             });
//           });
//         });
//       });
//     });
//   });
// }

// getUserInfo("Ucup", (userInfo) =>
//   greetUser(userInfo, () => console.log("All done with the nested pyramid!"))
// );
/* --------------------------- End of The Problem --------------------------- */

/* ---------------------- The Solution - Using Promise ---------------------- */
function getUserInfo(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = {
        name: name,
        age: 75,
      };
      resolve(userInfo);
    }, 1000);
  });
}

function getCityInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const city = "Yogyakarta";
      resolve(city);
    }, 1000);
  });
}

function getFavoriteColor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const color = "Red";
      resolve(color);
    }, 1000);
  });
}

function getFavoriteBook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = "Harry Potter";
      resolve(book);
    }, 1000);
  });
}

function getFavoriteFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const favoriteFood = "Satay";
      resolve(favoriteFood);
    }, 1000);
  });
}

function getHobbies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hobbies = ["reading", "cooking", "sleeping"];
      resolve(hobbies);
    }, 1000);
  });
}

function getBestFriend() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const bestFriend = "Dhika";
      resolve(bestFriend);
    }, 1000);
  });
}

function getBestFriendFavoriteMovie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const movie = "Godzilla Minus One";
      resolve(movie);
    }, 1000);
  });
}

function greetUser(userInfo, callback) {
  let name = userInfo.name;
  let age = userInfo.age;
  let bf;

  console.log(`Hai, ${name}! You are ${age} years old.`);
  getCityInfo()
    .then((city) => {
      console.log(`${name} lives in ${city} city.`);
      return getFavoriteColor();
    })
    .then((color) => {
      console.log(`${name}'s favorite color is ${color.toLowerCase()}.`);
      return getFavoriteBook();
    })
    .then((book) => {
      console.log(`${name}'s favorite book is ${book}`);
      return getFavoriteFood();
    })
    .then((food) => {
      console.log(`${name}'s favorite food is ${food}`);
      return getBestFriend();
    })
    .then((bestFriend) => {
      console.log(`${name}'s best friend is ${bestFriend}.`);
      bf = bestFriend;
      return getBestFriendFavoriteMovie();
    })
    .then((movie) => {
      console.log(`${bf}'s favorite movie is ${movie}.`);
    })
    .finally(() => callback());
}

getUserInfo("Ucup").then((userInfo) =>
  greetUser(userInfo, () => console.log("All done with the nested pyramid!"))
);
/* ------------------- End of The Solution - Using Promise ------------------ */
