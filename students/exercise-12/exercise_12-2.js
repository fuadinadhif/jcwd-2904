/*
Create a function to convert roman numeral to integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3

Example 3:
Input: s = "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90, IV = 4
*/

function romToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let arr = s.split("");
  arr.forEach((el, index) => {
    if (roman[el] < roman[arr[index + 1]]) {
      result -= roman[el];
    } else {
      result += roman[el];
    }
  });
  return result;
}

console.log(romToInt("III"));
console.log(romToInt("LVIII"));
console.log(romToInt("MCMXCIV"));
