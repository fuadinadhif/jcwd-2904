/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = "";
  while (columnNumber > 0) {
    columnNumber -= 1;
    str = String.fromCharCode((columnNumber % 26) + 65) + str;
  }
  return str;
};

console.log(convertToTitle(28));
