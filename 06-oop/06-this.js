// Basic this
console.log(this);

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

const newPerson = { ...person };
newPerson.name = "Fikri";
console.log(newPerson);
console.log(newPerson.greetHasbi());

// Call, apply, bind
