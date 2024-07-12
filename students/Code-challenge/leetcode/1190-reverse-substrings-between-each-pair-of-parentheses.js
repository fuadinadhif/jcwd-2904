/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [];

  for (item of s) {
    if (item == ")") {
      const portion = [];
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] != "(") {
          portion.push(stack.pop());
        } else {
          break;
        }
      }
      stack.pop();
      stack.push(...portion);
    } else {
      stack.push(item);
    }
  }
  return stack.join("");
};

console.log(reverseParentheses("(abcd)"));
console.log(reverseParentheses("(u(love)i)"));
console.log(reverseParentheses("(ed(et(oc))el)"));
