// 1. Array.toString()
let array1 = ["satu", 2, 3, 4, 5];
console.log(array1.toString());

// 2. Array.join()
let array2 = ["one", "two", "three", "four", "five"];
console.log(array2.join(""));
console.log(array2.join(" | "));
console.log(array2.join(" "));

// 3. Array.pop()
let array3 = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(array3.pop());
console.log(array3);

// 4. Array.push()
let array4 = ["one", "two", "three", "four", "five"];
console.log(array4.push("six"));
console.log(array4);

// 5. Array.shift()
let array5 = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(array5.shift());
console.log(array5);

// 6. Array.unshift()
let array6 = ["one", "two", "three", "four", "five"];
console.log(array6.unshift("zero"));
console.log(array6);

// 7. Array.length
let array7 = ["uno", "dos", "tres"];
console.log(array7.length);

// 8. Array.concat()
let array8 = ["one", "two", "three"];
let array9 = ["four", "five"];
let array9_1 = ["six", "seven", "eight"];
console.log(array8.concat(array9, array9_1));

// 9. Array.splice()
let array10 = ["one", "two", "three", "four", "five"];
console.log(array10.splice(2, 3));
console.log(array10);

// 10. Array.slice()
let array11 = ["one", "two", "three", "four", "five"];
console.log(array11.slice(2, 3));
console.log(array11);

// 11. Array.map()
let array12 = [1, 2, 3, 4, 5];
let array13 = array12.map((el) => {
  return el * 2;
});
console.log(array13);

let array14 = [1, 2, 3, 4, 5];
let array15 = array14.map((el) => {
  if (el % 2 !== 0) {
    el = el * 2;
  }
  return el;
});
console.log(array15);

// 12. Array.filter()
let array16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let array17 = array16.filter((item) => {
  return item % 2 === 0;
});
console.log(array17);

// 13. Array.find()
let array18 = [1, 2, 3, 4, 5, 3, 3];
let array19 = array18.find((item) => {
  return item === 3;
});
console.log(array19);

let array20 = ["Igor", "Rehan", "Ghidan", "Arnold", "Rizal", "Arnold"];
let array21 = array20.find((item) => {
  return item === "Arnold";
});
console.log(array21);

// Example 1
let students = ["Ari", "Joni", "Andin", "Menty", "Manda"];
let exchangeStudent = students.splice(3, 1);
console.log(exchangeStudent);
console.log(students);
