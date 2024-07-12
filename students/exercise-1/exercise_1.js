const rectangleLength = 8;
const rectangleWidth = 5;
const rectangleArea = rectangleLength * rectangleWidth;

rectangleArea;

// -------

const rectanglePerimeter = (rectangleLength + rectangleWidth) * 2;

rectanglePerimeter;

// -------

const circleRadius = 5;
const pi = 22 / 7;
const circleDiameter = circleRadius * 2;
const circleCircumference = 2 * pi * circleRadius;
const circleArea = pi * circleRadius * circleRadius;

pi;
circleDiameter;
circleCircumference;
circleArea;

// -------

const a = 80;
const b = 65;
const angle = 180 - a - b;

angle;

// -------

const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const dateDiff = (date2 - date1) / 1000 / 60 / 60 / 24;

dateDiff;

// -------

const numOfDays = 400;
const year = numOfDays / 365;
const month = (numOfDays % 365) / 30;
const date = (numOfDays % 365) % 30;
const YMD = `${year.toFixed(0)} Year, ${month.toFixed(0)} month, ${date.toFixed(
  0
)} day`;

YMD;
