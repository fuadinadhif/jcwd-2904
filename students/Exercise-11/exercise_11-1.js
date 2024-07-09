/*
Create a function to convert Excel sheet column title to its correspondin column number.

example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

INPUT: AB
OUTPUT: 28
*/

function columnConverter(x) {
  const str = x.toUpperCase();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result *= 26;
    result += str[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }

  return result;
}

let str = "AAA";
console.log(columnConverter(str));
