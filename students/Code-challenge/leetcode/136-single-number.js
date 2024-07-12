/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  const stats = {};

  for (item of nums) {
    if (!stats[item]) {
      stats[item] = 1;
    } else {
      stats[item] += 1;
    }
  }

  for (key in stats) {
    if (stats[key] === 1) {
      result = key;
    }
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));

// const obj = {
//   //key: value
//   a: 1,
//   b: 2,
//   c: 3,
// }

// const arr = [1, 2, 3, 4]

// const arrObj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
// }

// for (key in obj) {
//   console.log(key)
//   console.log(obj[key])
// }

// for (key of arr) {
//   console.log(key)
//   console.log()
// }
