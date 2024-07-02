let person = {
  name: "John Doe",
  age: 24,
  address: "Some Street",
};

console.log(Object.keys(person));

delete person.name;

console.log(person);

/* The this */
console.log(this);

let building = {
  address: "Somewhere a long the way",
  floor: 5,
  sayAddress: () => {
    console.log(this.address);
  },
};

building.sayAddress();

/* New keyword */

console.log(typeof "7");
console.log(typeof null);

function maxSumArray(maxLength, ...rest) {
  console.log(maxLength);
  console.log(rest);
}

maxSumArray(5, 1, 2, 3, 4, 5, 6);
