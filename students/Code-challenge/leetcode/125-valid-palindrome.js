/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  str = "";
  for (let i = 0; i < s.length; i++) {
    if (
      (s.toLocaleLowerCase().charCodeAt(i) >= 97 &&
        s.toLocaleLowerCase().charCodeAt(i) <= 122) ||
      (s.toLocaleLowerCase().charCodeAt(i) >= 48 &&
        s.toLocaleLowerCase().charCodeAt(i) <= 57)
    ) {
      str += s[i].toLocaleLowerCase();
    }
  }

  let isPalindrome = true;
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};

const s = "A man, a plan, a canal: Panama";
const x = "123P";
const y = "121";
console.log(isPalindrome(s));
console.log(isPalindrome(x));
console.log(isPalindrome(y));
