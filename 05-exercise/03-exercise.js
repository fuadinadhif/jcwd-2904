/*
 * 1. Based on the array below write a function that will return primitive data types only.
 * Input: let arr = [1, [], undefined, {}, "string", {}, []]
 * Output: [1, undefined, “string”]
 */
function returnPrimitive(array) {
  const primitive = array.filter((item) => typeof item !== "object");
  return primitive;
}

console.log(returnPrimitive([1, [], undefined, {}, "purwadhika", {}, []]));

/*
 * 2. Write a function from a given array of numbers and return the second smallest number.
 * Input: [5, 3, 1, 7, 2, 6]
 * Output: 2
 */
function secondSmallest(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const result = sortedArray.find((item, index, array) => item > array[0]);
  return result;
}

console.log(secondSmallest([1, 2, 3, 4, 5, 6, 7]));

/*
 * 3. Write a function from a given array of mixed data types and return the sum of all the number
 * Input: mixedArray = ["3", 1, "string", null, false, undefined, 2]
 * Output: 3
 */
function sumNums(array) {
  const arrayNumber = array.filter((item) => typeof item === "number");
  const result = arrayNumber.reduce((curr, acc) => curr + acc);
  return result;
}

console.log(sumNums(["3", 1, "string", null, false, undefined, 2]));

/*
 * 4. Write a function from the given array of number that will return sum of duplicate values.
 * Input: [10, 20, 40, 10, 50, 30, 10, 60, 10];
 * Output: 40
 */
function sumDuplicate(array) {
  const duplicate = [];

  for (item of array) {
    if (array.filter((element) => element === item).length > 1)
      duplicate.push(item);
  }

  const result = duplicate.reduce((curr, acc) => curr + acc);
  return result;
}

console.log(sumDuplicate([10, 20, 20, 40, 10, 50, 30, 10, 60, 10]));

/*
 * 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
 * Example: If you throw a rock as an argument and the function pick a scissor then it will return 'Win'.
 */

function rockPaperScissors(pick) {
  const choices = ["rock", "paper", "scissors"];
  const comPick = choices[Math.floor(Math.random() * choices.length)];
  const playerPick = pick.toLowerCase();

  if (playerPick === comPick) {
    return `Player Choice: ${playerPick}, Computer Choice: ${comPick}, result: Draw!`;
  } else if (
    (playerPick === "rock" && comPick === "scissors") ||
    (playerPick === "paper" && comPick === "rock") ||
    (playerPick === "scissors" && comPick === "paper")
  ) {
    return `Player Choice: ${playerPick}, Computer Choice: ${comPick}, result: Win!`;
  } else {
    return `Player Choice: ${playerPick}, Computer Choice: ${comPick}, result: Lose!`;
  }
}

console.log(rockPaperScissors("paper"));
