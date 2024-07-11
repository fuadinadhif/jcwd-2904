/*
Given an array nums of size n, return the majority element. The majority element is the element that appears more than [n/2] times. You mayassume that the majoirty elemet always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

function majorityElement(nums) {
  let counter = 0;
  let majority = 0;
  let stats = {};

  for (element of nums) {
    if (!stats[element]) {
      stats[element] = 1;
    } else {
      stats[element] += 1;
    }
  }

  for (key in stats) {
    if (stats[key] > counter) {
      counter = stats[key];
      majority = Number(key);
    }
  }
  return majority;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([5, 2, 2, 5, 1, 1, 5, 1, 2, 5, 2, 5]));
