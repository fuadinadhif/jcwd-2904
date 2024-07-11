// 1. Display the multiplication table of a given integer
let num = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 2. Palindrome
let word = "racecar";
let reversedWord = "";

for (let i = 6; i >= 0; i--) {
  reversedWord = reversedWord + word[i];
}

console.log(reversedWord);

if (word.toLowerCase() === reversedWord.toLowerCase()) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

// 3. Centimeter to meter
let centimeter = 100000;
let kilometer = centimeter / 100000;

console.log(`${kilometer} km`);

// 4. Format number/price to IDR currency
let price = 1000;
let IDRCurrency = price.toLocaleString("en-ID", {
  style: "currency",
  currency: "SGD",
});

console.log(IDRCurrency);

// 5.Remove the first occurence of the given string
// 5.1 Using Regex
let sentence = "Hello worellld";
let eraseWord = "ell";
const regex = new RegExp(eraseWord, "g");

console.log(sentence.replace(regex, ""));

// 5.2 Using indexOf
let index = sentence.indexOf(eraseWord);
console.log(index);
let step1 = sentence.slice(0, index);
console.log(step1);
console.log(eraseWord.length);
let step2 = sentence.slice(index + eraseWord.length);
console.log(step2);
let newSentence = step1 + step2;
console.log(newSentence);

// 6. Capitalize the first letter of each word
// 6.1
let words = "helo world everybody";
let capitalizeWords = words.charAt(0).toUpperCase();

for (let i = 1; i < words.length; i++) {
  if (words[i - 1] === " ") {
    capitalizeWords += words[i].toUpperCase();
  } else {
    capitalizeWords += words[i];
  }
}

console.log(capitalizeWords);

// 6.2
let a = "hello world everyone in here!";
let b = a.split(" ");
let c = "";

for (let i = 0; i < b.length; i++) {
  console.log(b[i].substring(1));
  b[i] = b[i][0].toUpperCase() + b[i].substring(1);
  c = b.join(" ");
}

console.log(c);

// 6.3
let wordReg = "hello regex!";
let result = wordReg.replace(/\b\w/g, (x) => x.toUpperCase());

console.log(result);
