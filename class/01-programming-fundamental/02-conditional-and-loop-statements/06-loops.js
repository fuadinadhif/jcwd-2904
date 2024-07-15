// 1. For Loop
for (let i = 0; i <= 9; i++) {
  console.log(i);
  console.log("AAA");
  console.log("BBB");
}

// 2. While Loop
let i = 0;
while (i < 10) {
  console.log("Inside while loop");
  i++;
}

// 3. Do ... While Loop & Break
let b = 1;
do {
  console.log("Hai");

  if (b === 3) break;

  b++;
} while (b < 5);

// 4. Continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// Pseudocode Example
let result = 1;

for (let i = 1; i <= 6; i++) {
  result = result * i;
}

console.log(result);
