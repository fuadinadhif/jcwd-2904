/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const arr1 = s
    .trim()
    .replace(/\s\s+/g, " ")
    .split(" ")
    .map(function (item) {
      return item.trim();
    });
  return arr1[arr1.length - 1].length;
};

const test = lengthOfLastWord("   fly me   to   the moon  ");
console.log(test);
