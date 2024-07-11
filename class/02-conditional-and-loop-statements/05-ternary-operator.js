const lesson = "JavaScript";
const modules = "intro";

if (lesson === "JavaScript") {
  console.log("You are learning JS");
} else {
  console.log("Why are you not learning JS?");
}

if (lesson === "JavaScript") {
  console.log("You are learning JS");
} else if (modules === "intro") {
  console.log("Something");
} else {
  console.log("Why are you not learning JS?");
}

console.log(
  lesson === "JavaScript"
    ? "You are learning JS"
    : "Why are you not learning JS?"
);
console.log(
  lesson === "avaScript"
    ? "You are learning JS"
    : modules === "intro"
    ? "Something"
    : "Why are you not learning JS?"
);

// Error example
// console.log(
//   if (lesson === "JavaScript") {
//     console.log("You are learning JS")
//   } else {
//     console.log("Why are you not learning JS?")
//   }
// )
