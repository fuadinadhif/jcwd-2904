// 1.
let length1 = 5;
let width1 = 3;
let rectangleArea = length1 * width1;
console.log("Rectangle Area: " + rectangleArea);

// 2.
let length2 = 5;
let width2 = 3;
let rectanglePerimeter = 2 * length2 + 2 * width2;
console.log("Rectangle Perimeter: " + rectanglePerimeter);

// 3.
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * (radius * radius);
console.log(
  `Diameter: ${diameter} | Circumference: ${circumference} | Area: ${area}`
);

// 4.
let angle1 = 80;
let angle2 = 65;
let total_angle = 180;
let angle3 = total_angle - (angle1 + angle2);
console.log(`Third angle: ${angle3}`);

// 5.
let totalDays = 400;
let year = totalDays / 365;
console.log(year);
let monthStep1 = totalDays % 365;
console.log(monthStep1);
let monthStep2 = monthStep1 / 30;
console.log(monthStep2);
let daysStep1 = totalDays % 365;
console.log(daysStep1);
let daysStep2 = daysStep1 % 30;
console.log(daysStep2);
console.log(
  `Years: ${Math.floor(year)} | Months: ${Math.floor(
    monthStep2
  )} | Days: ${Math.floor(daysStep2)}`
);

// 6.
let date1 = new Date("2022-01-20");
console.log(date1);
let date2 = new Date("2022-01-22");
console.log(date2);
let differenceInMs = date2 - date1;
console.log(differenceInMs);
let differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);
console.log(`Days difference: ${differenceInDays}`);
