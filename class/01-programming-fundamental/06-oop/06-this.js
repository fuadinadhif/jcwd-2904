// Basic this
console.log(this);

const person = {
  name: "Hasbi",
  age: 35,
  address: "Jakarta",
  greetHasbi: function () {
    console.log(`Halo, ${this.name}`);
  },
  identityHasbi: () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
  school: "UDINUS",
};

const newPerson = { ...person };
newPerson.name = "Fikri";
console.log(newPerson);
newPerson.greetHasbi();
newPerson.identityHasbi();

// Call, apply, bind
const car = {
  brand: "BMW",
  year: "2023",
  series: "E-46",
  cc: 2000,
  sound: "Brmmm",
};

function carSound() {
  console.log(this.sound);
}

// carSound.apply(car);
// carSound.call(car);
const BMWSound = carSound.bind(car);
BMWSound();
