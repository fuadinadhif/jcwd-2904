/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   const number = Number(BigInt(digits.join(""))) + 1;
//   console.log(digits.join(""));
//   return [...number.toString()].map(Number);
// };

var plusOne = function (digits) {
  let carryOver = 0;
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
  } else if (digits[digits.length - 1] == 9) {
    digits[digits.length - 1] = 0;
    carryOver = 1;
    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i] += 1;
        carryOver = 0;
        break;
      } else {
        digits[i] = 0;
      }
    }

    if (carryOver > 0) {
      digits.unshift(carryOver);
    }
  }

  return digits;
};

console.log(plusOne([5, 8, 7, 8, 8])); //100
