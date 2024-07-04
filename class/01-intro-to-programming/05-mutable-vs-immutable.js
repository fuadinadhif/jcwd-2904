let identity = {
  name: "John Doe",
  address: "UK",
  age: 45,
  gender: "male",
};

let newIdentity = identity;

console.log(identity);
console.log(newIdentity);

identity.age = 100;

console.log(identity);
console.log(newIdentity);

// Immutable vs Re-assign
const cat = {
  name: "Ucup",
  kaki: 4,
  isSteril: true,
};

// cat = {
//   name: "Acep"
// }

cat.name = "Acep";
cat.kaki = 3;

console.log(cat);
