/*
 * 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only.
 * Input: [1, 2, 3, 4, 5, 6]
 * Output: [2, 4, 6]
 */
function removeOddNum(array) {
  const result = [];

  for (item of array) {
    if (item % 2 === 0) result.push(item);
  }

  return result;
}

console.log(removeOddNum([1, 2, 3, 4, 5, 6]));

/*
 * 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
 * Input: maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
 * Output: [5, 10, 24, 3, 6]
 */
function maxArray(maxSize, ...elements) {
  const result = [];

  for (let i = 0; i < maxSize; i++) {
    result.push(elements[i]);
  }

  return result;
}

console.log(maxArray(5, 5, 10, 24, 3, 6, 7, 8));

/*
 * 3. Write a function that will combine 2 given array into one array.
 * Input: array1 = [1, 2, 3], array2 =  [4, 5, 6]
 * Output: [1, 2, 3, 4, 5, 6]
 */
function combineArray(array1, array2) {
  return [...array1, ...array2];
}

console.log(combineArray([1, 2, 3], [4, 5, 6]));

/*
 * 4. Write a function to find duplicate values in an array.
 * Input: [1, 2, 2, 2, 3, 3, 4, 5, 5]
 * Output: [2, 3, 5]
 */
function foundDuplicateElement(array) {
  const result = [];
  const stats = {};

  for (item of array) {
    if (!stats[item]) {
      stats[item] = 1;
    } else {
      stats[item] += 1;
    }
  }

  console.log(stats);

  for (key in stats) {
    if (stats[key] > 1) {
      for (let i = 0; i < stats[key]; i++) {
        result.push(key);
      }
    }
  }

  console.log(result);

  return result.reduce((arr, curr) => Number(arr) + +curr);
}

console.log(foundDuplicateElement([10, 20, 40, 10, 50, 30, 10, 60, 10]));

/*
 * 5. Write a function to find the difference in 2 given array.
 * Input: array1 = [1, 2, 3, 4, 5], array2 =  [3, 4, 5, 6, 7]
 * Output: [1, 2, 6, 7]
 */
function differenceInArray(array1, array2) {
  const joinArray = array1.concat(array2);
  const unique = [];

  for (item of joinArray) {
    if (joinArray.filter((element) => element === item).length === 1)
      unique.push(item);
  }

  return unique;
}

console.log(differenceInArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// Igor
function duplicate(array) {
  return array
    .sort((a, b) => a - b)
    .filter((a, i, arr) => arr[i] === arr[i + 1] || arr[i] === arr[i - 1])
    .reduce((a, b) => a + b, 0);
}

console.log(duplicate([20, 10, 20, 40, 10, 50, 30, 10, 60, 10, 10, 10]));
