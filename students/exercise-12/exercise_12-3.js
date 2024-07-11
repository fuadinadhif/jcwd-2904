/*
Given an integer numRows, return the first numRows of Pascal's triangle

in Pascal's triangle, each number is the sum of the two numbers directly above it as shown ->

Example 1:
Input: numRows = 5
Output: [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

function pascalTriangle(n) {
  if (n < 1) return [];
  if (n === 1) return [[1]];

  const result = [[1]];

  for (let i = 1; i < n; i++) {
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
}

console.log(pascalTriangle(5));
