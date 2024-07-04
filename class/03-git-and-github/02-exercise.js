// 1. Swap the case of each character from string
// 1.1
let sentence = "The QuiCk BrOwN Fox";
let swapSentence = "";

for (let i = 0; i < sentence.length; i++) {
  // if (str[i] === str[i].toUpperCase())
  if (sentence[i].charCodeAt() > 97) {
    swapSentence += sentence[i].toUpperCase();
  } else {
    swapSentence += sentence[i].toLowerCase();
  }
}

console.log(swapSentence);

// 1.2
let sentence2 = [...sentence]
  .map((word) =>
    word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
  )
  .join("");

console.log(sentence2);

// 2. Find the largest of two given integers
// 2.1
let num1 = 10;
let num2 = 5;

console.log(num1 > num2 ? num1 : num2);

// 2.2
let maxNum = Math.max(num1, num2);

console.log(maxNum);

// 3. Sort three numbers
let number1 = 18;
let number2 = 20;
let number3 = 5;
let numbersArray = Array.from([number1, number2, number3]);
console.log(numbersArray);

console.log(numbersArray.sort((a, b) => a - b));

// 4. Shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let input = NaN;
let typeOfInput = typeof input;

if (typeOfInput === "string") {
  console.log(1);
} else if (typeOfInput === "number") {
  console.log(2);
} else {
  console.log(3);
}

// 5. Change every letter "a" into * from a string of input
let input2 = "An apple a day keeps the doctor away";
// 5.1 With replace
let replaceResult = input2.toLowerCase().replace(/a/g, "*");
console.log(replaceResult);

// 5.2 With loop
let loopResult = "";

for (let i = 0; i < input2.length; i++) {
  loopResult += input2[i].toLowerCase() === "a" ? "*" : input2[i];
}

console.log(loopResult);
