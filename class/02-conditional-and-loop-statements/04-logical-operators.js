// 1. AND
console.log(10 === 10 && 5 != 5); // false
console.log(10 === 10 && 1 != 5); // true

// 2. OR
console.log(false || true);
console.log(false || false);
console.log(5 === 10 || "A" === "a");

// 3. NEGASI
console.log(!false);
console.log(!(10 === 5));
console.log(!10);
console.log(!0);
console.log(!10 === 10);

// Example in conditional
let name = "Joko";
let age = 40;
let gender = "Female";

if (age === 40 && name === "Joko" && gender === "Male") {
  console.log(`Welcome Joko, you are 40 years old and a man.`);
}

if ((age === 40 && name === "Joko") || gender === "Male") {
  console.log(`Welcome Joko, you are 40 years old and a man.`);
}
