// // // 1. Function declaration
// // function sayHello(name) {
// //   if (name === "Rafid") {
// //     console.log("Mantap");
// //   } else if (name === "Erfan") {
// //     console.log("Gocap");
// //   } else if (name === "Nabil") {
// //     console.log("Zoom");
// //   } else {
// //     console.log("Tidak ada namanya");
// //   }
// // }
// // // console.log(sayHello("Nabil"));

// // function sum(a, b = 10) {
// //   let result = a + b;
// //   return result;
// // }
// // // console.log(sum(200));

// // // 2. Function expression
// // const sayHi = function () {
// //   console.log("Hi");
// // };
// // // sayHi();

// // // 3. Rest parameters
// // function sayThis(name, age, ...sisaData) {
// //   console.log(`Namaku adalah ${name}`);
// //   console.log(`Umurku adalah ${age}`);
// //   console.log(`Dan ini adalah informasi lain terkat aku ${sisaData}`);
// // }

// // // sayThis("Naufal", 29, "Hobi mancing", "Suka baca", "Benci judol", "Suka makan");

// // // 4.
// // function greeting(name) {
// //   const defaultMessage = "Hello dello";

// //   return function () {
// //     return defaultMessage + " " + name;
// //   };
// // }

// // const greetingDavid = greeting("David");
// // // console.log(greetingDavid());

// // // 5. Currying
// // function multiplier(factor) {
// //   return function (number) {
// //     return number * factor;
// //   };
// // }

// // // const mul3 = multiplier(3);
// // // console.log(mul3(50));
// // // let resultMul5Times10 = multiplier(5)(10);
// // // console.log(resultMul5Times10);

// // // 6. Recursive
// // function countDown(numberFrom) {
// //   console.log(numberFrom);

// //   let nextNumber = numberFrom - 1;

// //   if (nextNumber > 0) {
// //     countDown(nextNumber);
// //   }
// // }
// // countDown(3);

// // // 7. Arrow function
// // function thisIsDeclaration() {}
// // const thisIsExpression = function () {};
// // const thisArrow = () => {};

// // const arrow1 = (a, b) => a + b;
// // const arrow2 = (a, b) => {
// //   return a + b;
// // };
// // console.log(arrow1(10, 20));
// // console.log(arrow2(10, 20));

// const sayHai = function () {
//   console.log("Hi");
// };

// sayHai();

// // const number = 10;
// // number();

// const iniSatu = function () {
//   return "Ini" + " " + "Satu";
// };

// console.log(iniSatu());

function createTrianglePattern(height) {
  let pattern = "";
  let counter = 1;

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      if (counter < 10) {
        pattern = pattern + "0" + counter + " ";
      } else {
        pattern = pattern + counter + " ";
      }
      // counter++;
    }
    pattern += "\n";
  }

  return pattern;
}

console.log(createTrianglePattern(5));
