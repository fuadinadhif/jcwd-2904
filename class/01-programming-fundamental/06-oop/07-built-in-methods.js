// Object.assign
const target = { a: 1, b: 2 };
const source = { b: 5, c: 3, d: 10, e: 9 };

console.log(Object.assign(target, source));

// Object.create
const originalObj = { name: "Original" };
const duplicateObj = Object.create(originalObj);
const spreadObj = { ...originalObj };
const cloneObj = originalObj;

console.log(originalObj);
console.log(duplicateObj);
console.log(originalObj === duplicateObj);
console.log(originalObj === cloneObj);

cloneObj.name = "Clone";
console.log(originalObj);

duplicateObj.name = "Duplicate";
console.log(originalObj);

originalObj.name = "Original";
console.log(duplicateObj);

// Object.entries
const car = {
  brand: "BMW",
  year: "2023",
  series: "E-46",
  cc: 2000,
  sound: "Brmmm",
};

const carKeyValue = Object.entries(car);
console.log(carKeyValue);
console.log(carKeyValue[0]);

for (let [key, value] of Object.entries(car)) {
  // console.log(`The key is: ${item[0]} and the value is ${item[1]}`);
  console.log(`The key is: ${key} and the value is ${value}`);
}
