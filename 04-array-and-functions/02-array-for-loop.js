// 1. For .. of
let array1 = ["unos", "dos", "tres", "cuatro", "cincho"];
for (let element of array1) {
  console.log(`The number is ${element}`);
}

// 2. For .. in
let array2 = ["one", "two", "three", "four", "five"];
for (let index in array2) {
  console.log(index);
}

// ()
function sayHi() {
  console.log("Hi");
}
sayHi();
// []
let string = "";
let newArray = ["satu", "dua", "tiga"];
console.log(newArray[2]);

// {}
let obj = {};
let a = 50;
{
  let a = 10;
  {
    console.log(a);
  } // Earth
} // Bimasakti
