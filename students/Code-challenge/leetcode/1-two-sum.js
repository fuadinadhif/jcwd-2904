var twoSum = function (nums, target) {
  let result = [];
  let i = 0;
  while (i < nums.length) {
    let j = 1;
    while (j < nums.length) {
      if (i === j) {
        j++;
      } else if (nums[i] + nums[j] !== target) {
        j++;
      } else {
        result.push(i, j);
        return result;
      }
    }
    i++;
  }
};
