/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  result = true;
  let check = x.toString();
  for (let i = 0; i < check.length / 2; i++) {
    if (check[i] !== check[check.length - 1 - i]) {
      result = false;
    }
  }
  return result;
};

const checkPalindrome = isPalindrome(121);

console.log(checkPalindrome);
