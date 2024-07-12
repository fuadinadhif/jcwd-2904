function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    // Check for subtraction cases (IV, IX, XL, XC, CD, CM)
    if (currentVal < nextVal && i < s.length - 1) {
      result += nextVal - currentVal;
      i++; // Skip the next character since it's already included
    } else {
      result += currentVal;
    }
  }

  return result;
}

// Example usage
const romanNumeral1 = "III";
const romanNumeral2 = "LVIII";
const romanNumeral3 = "MCMXCIV";

console.log(romanToInt(romanNumeral1)); // Output: 3
console.log(romanToInt(romanNumeral2)); // Output: 58
console.log(romanToInt(romanNumeral3)); // Output: 1994
