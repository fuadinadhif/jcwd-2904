// Remove all odd numbers in an array and return a new array that contains even numbers only
function reverseArray(array) {
  let evenArray = [];

  for (let index in array) {
    if (array[index] % 2 === 0) {
      evenArray.push(array[index]);
    }
  }

  return evenArray;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseArray(array));
