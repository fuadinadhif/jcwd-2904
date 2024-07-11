// 1. Object
const studentIdentity = {
  name: "Reza",
  age: 22,
  address: "Indonesia",
  isHandsome: true,
};

// console.log(studentIdentity.name)
// console.log(studentIdentity["address"])
// console.log(typeof studentIdentity)

let key = "age";
// console.log(studentIdentity[key])

// 2. Array
const playlist = [
  "gudang garam jaya",
  "mars perindo",
  "gembyar gembyar",
  2024,
  { name: "Nadhif" },
];
const playlist2 = [];
// console.log(playlist[1+1])
// console.log(playlist2[0])
// console.log(typeof playlist)
// console.log(playlist.length)

// 3. Date
let now = new Date();

// console.log(now)
// console.log(typeof now)
// console.log(now instanceof Date)

console.log(now.getDate());
console.log(now.getHours());
console.log(now.getDay());

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days[now.getDay()]);
