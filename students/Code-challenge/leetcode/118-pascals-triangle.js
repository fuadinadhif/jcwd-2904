/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevArr = result[i - 1];
    const currArr = [];
    for (let j = 0; j <= prevArr.length; j++) {
      if (j === 0 || j === prevArr.length) {
        currArr.push(1);
      } else {
        currArr.push(prevArr[j] + prevArr[j - 1]);
      }
    }
    result.push(currArr);
  }
  return result;
};
