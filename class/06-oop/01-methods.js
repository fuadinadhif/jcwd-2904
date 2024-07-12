const person = {
  name: "Hasbi",
  age: 35,
  address: "Jakarta",
  greetHasbi: function () {
    console.log(`Halo, ${this.name}`);
  },
  identityHasbi() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  school: "UDINUS",
};

person.gender = "Male";

console.log(person);

delete person.address;

console.log(person);

person.greetHasbi();
person.identityHasbi();
