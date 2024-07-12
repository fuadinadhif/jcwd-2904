/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num <= 9) {
    return num;
  }
  a = [...num.toString()].map(Number);
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    b += a[i];
  }
  return addDigits(b);
};

console.log(addDigits(98));
