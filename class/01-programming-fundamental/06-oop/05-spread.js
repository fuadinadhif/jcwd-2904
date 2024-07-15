// Array Spread
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// Object Spread
const person = {
  fullName: "John Doe",
  address: {
    street: "St. Sudirman",
    building: "MSIG Tower",
    floor: "12 A",
  },
};

const newPerson = { ...person, fullName: "Joko Do", gender: "Male" };
console.log(newPerson);
