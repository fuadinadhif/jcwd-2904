// 1.
const width = 3;
const length = 5;
area = width * length;
// console.log(area);

// 2.
const l = 5;
const w = 3;
const r = 2 * (l + w);
// console.log(r);

// 3.
const radius = 5;
const diameter = radius * 2;
const PI = 3.14159;
const keliling = 2 * PI * radius;
const luas = (PI * radius * radius).toFixed(2);
// console.log(diameter, keliling, luas);

// 4.
let a = 80;
let b = 65;
let segitiga = 180 - (a + b);
// console.log(segitiga);

// 5.
const dayPerYear = 365;
const year1 = Math.floor(400 / dayPerYear);
const year2 = Math.floor(366 / dayPerYear);
const month1 = Math.floor((400 % dayPerYear) / 30);
const month2 = Math.floor((366 % dayPerYear) / 30);
const day1 = Math.floor((400 % dayPerYear) % 30);
const day2 = Math.floor((366 % dayPerYear) % 30);
console.log(year1, month1, day1);
console.log(year2, month2, day2);

// 6.
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
let date3 = Math.round(Math.abs(date1 - date2) / (1000 * 3600 * 24));
console.log(date3);
