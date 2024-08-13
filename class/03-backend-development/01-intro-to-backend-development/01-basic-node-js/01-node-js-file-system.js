const fs = require("fs");

// Write file
fs.writeFileSync("./notes.txt", "Not first Node.js code!\nI'm button");

// Read file
const content = fs.readFileSync("./notes.txt", "utf-8");
console.log(content);
