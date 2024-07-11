/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const legend = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (legend[stack.pop(s[i])] !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("(()"));
