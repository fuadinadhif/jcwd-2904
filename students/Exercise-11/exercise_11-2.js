/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

function singleNum(x) {
  let result = 0;
  const stats = {};

  for (el of x) {
    if (!stats[el]) {
      stats[el] = 1;
    } else {
      stats[el] += 1;
    }
  }

  // console.log(stats)

  for (key in stats) {
    if (stats[key] === 1) {
      result = key;
    }
  }
  return result;
}

console.log(singleNum([2, 2, 1]));
console.log(singleNum([4, 1, 2, 1, 2]));
console.log(singleNum([1]));
