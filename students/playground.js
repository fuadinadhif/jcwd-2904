// const birthday = new Date("2000-01-01");
// console.log(birthday instanceof Date);

// const userId = 10;
// const isVerivied = false;
// const hasPermission = true;
// const permissionLevel = 2;

// if (
//   userId && isVerivied && hasPermission && permissionLevel === 3
//     ? true
//     : permissionLevel === 2
//     ? true
//     : permissionLevel === 1
//     ? true
//     : permissionLevel === 0
//     ? true
//     : false
// ) {
//   console.log("Acess granted");
// }

// sumTwo(10, 5);

// const multiplyTwo = (a, b) => {
//   console.log(a * b);
// };

// multiplyTwo(10, 5);

// function sumTwo(a, b) {
//   console.log(a + b);
// }

// {
//   const car = { brand: "Civic", year: "2020" };
// }

// console.log(car);

// console.log(Boolean(("Z" && 0) || 1 || true));

// const data = [[[{ 1: 1000 }]], 10, 20, 30, [1, 2, 3]];

// console.log(data[0][0][0][1]);

// let num = 1000;
// console.log((num /= num - 10));

// Callback function
// Higher-order function

// function computeCB(callback, a, b) {
//   return callback(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// console.log(computeCB(add, 10, 15));

// const arr = [1, 2, 3, 4, 5];

// const arr2 = [];

// arr.forEach((element) => {
//   arr2.push(element + 1);
// });

// console.log(arr2);

// const arrow = (a, b) => a * b;

// console.log(arrow(2, 5));

// Callback

function greet(name, cb) {
  console.log(`Hai, ${name}!`);

  if (cb) {
    cb();
  }
}

function sayGoodBye() {
  console.log("See you later!");
}

greet("Bejo", function () {
  greet("Tejo", sayGoodBye);
});
