// 1. String
const year = 2024;
const yearInString = String(year);

console.log(typeof year);
console.log(typeof yearInString);

// 2. Number
console.log("3" / "3");
console.log(3 * "3");
console.log(3 + "3");
console.log(3 + "5");
console.log(3 + Number("5"));

// 3. Boolean
// Falsy
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// Truthy
console.log(Boolean(-100));
console.log(Boolean("random"));
console.log(Boolean([]));
