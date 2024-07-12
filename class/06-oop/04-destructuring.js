// Array Destructure
const arr = [10, "Hallo", 5, [1, 2, 3]];
const a = arr[0];
const b = arr[1];
const c = arr.slice(2, arr.length);
console.log(c);
// const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// Object Destructure
const person = {
  fullName: "John Doe",
  address: {
    street: "St. Sudirman",
    building: "MSIG Tower",
    floor: "12 A",
  },
};
const { address, fullName, country } = person;

console.log(address);
console.log(fullName);
console.log(country);
