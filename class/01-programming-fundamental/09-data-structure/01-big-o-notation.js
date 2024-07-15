/* Big O Notation
1. Time Complexity
2. Space Complexity
*/

function arrayStatistic(array) {
  // Constant Complexity - O(1)
  console.log(array[0]);

  // Linear Complexity - O(n)
  for (let element of array) {
    console.log(element);
  }

  for (let i = 0; i < array.length; i++) {
    console.log("first loop");
    for (let j = 0; j < i; j++) {
      console.log("second loop");
    }
  }
}

// O(2n)
function studentsStatistic(arrStudent) {
  // O(1)
  console.log(arrStudent[0]);

  // O(n)
  for (let i = 0; i < arrStudent.length; i++) {
    console.log("first loop");
  }

  // O(1)
  console.log(arrStudent[0]);
}
