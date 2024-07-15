const person = {
  fullName: "John Doe",
  address: {
    street: "St. Sudirman",
    building: "MSIG Tower",
    floor: "12 A",
  },
};

/* Accessing Keys*/
// 1. Object.keys
console.log(Object.keys(person.address));

// 2. For .. in
for (let key in person) {
  console.log(key);
}
