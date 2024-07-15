/*
 * 1. Write a function to get the lowest, highest, and average value in the array without and with sort function.
 * Input: [10, 5, 50, 100, 10]
 * Output: {highest: 100, lowest: 5, average: 35}
 */
// 1.1 Without sort function
function getArrayStats(array) {
  let highest = (lowest = array[0]);
  let sum = 0;

  for (item of array) {
    if (item > highest) highest = item;
    if (item < lowest) lowest = item;
    sum += item;
  }

  const average = sum / array.length;
  return { highest, lowest, average };
}

console.log(getArrayStats([10, 5, 50, 100, 10]));

// 1.2 With sort function
function getArrayStatsWithSort(array) {
  const arrayLength = array.length;
  const sortedArray = array.sort((a, b) => a - b);
  const highest = sortedArray[sortedArray.length - 1];
  const lowest = sortedArray[0];
  const average = sortedArray.reduce((curr, acc) => curr + acc) / arrayLength;
  return { highest, lowest, average };
}

console.log(getArrayStatsWithSort([10, 5, 50, 100, 10]));

/*
 * 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 * Input: ["apple", "banana", "orange", "grape"]
 * Output: "apple, banana, orange, and grape."
 */
function arrayToSentence(array) {
  const firstPart = array.slice(0, -1);
  const lastPart = array.pop();
  console.log(firstPart);
  console.log(lastPart);
  const result = `${firstPart.join(", ")}, and ${lastPart}.`;
  return result;
}

console.log(arrayToSentence(["apple", "banana", "orange", "grape"]));

/*
 * 3. Write a fun-ction from a given array of mixed data types and return the sum of all the number.
 * Input: mixedArray = ["3", 1, "string", null, false, undefined, 2]
 * Output: 3
 */
function findAndSumNum(array) {
  let num = 0;

  for (item of array) {
    if (typeof item === "number" && !isNaN(item)) num += item;
  }

  return num;
}

console.log(findAndSumNum(["3", 1, "string", null, false, undefined, 2, NaN]));

/*
 * 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
 * Input: [1, 2, 3], [3, 2, 1]
 * Output: [4, 4, 4]
 */
function sumTheSameIndex(array1, array2) {
  const result = array1.map((item, index) => {
    return item + array2[index];
  });

  return result;
}

console.log(sumTheSameIndex([1, 2, 3], [3, 2, 1]));

/*
* 5.Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
* Example 1: 
* Input: arr = [1, 2, 3, 4], newElement = 4
* Output: [1, 2, 3, 4]

* Example 2:
* Input: arr = [1, 2, 3, 4], newElement = 7
* Output: [1, 2, 3, 4, 7]
*/
function addItemIfUnique(array, newItem) {
  const findItem = array.find((item) => item === newItem);
  if (!findItem) array.push(newItem);
  return array;
}

console.log(addItemIfUnique([1, 2, 3, 4], 4));
console.log(addItemIfUnique([1, 2, 3, 4], 7));
