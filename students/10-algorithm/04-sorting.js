// // Bubble sort
// function bubbleSort(array, asc = true) {
//   if (asc) {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] > array[j]) {
//           let a = array[i];
//           let b = array[j];
//           array[i] = b;
//           array[j] = a;
//         }
//       }
//     }
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] < array[j]) {
//           let a = array[i];
//           let b = array[j];
//           array[i] = b;
//           array[j] = a;
//         }
//       }
//     }
//   }

//   return array;
// }
// // ASC [3, 4, 5, 6, 8]
// console.log(bubbleSort([5, 3, 8, 4, 6, 1], true));
// // DSC [8, 6, 5, 4, 3]
// console.log(bubbleSort([5, 3, 8, 4, 6, 1], false));

// // Insertion sort
// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let numToInsert = array[i];
//     let sortElIndex = i - 1;

//     while (sortElIndex >= 0 && array[sortElIndex] > numToInsert) {
//       array[sortElIndex + 1] = array[sortElIndex];
//       sortElIndex--;
//     }
//     array[sortElIndex + 1] = numToInsert;
//   }

//   return array;
// }

// console.log(insertionSort([5, 3, 8, 4, 6]));
// /*
// array [5, 3, 8, 4, 6]

// loop pertama {
//   i = 1
//   numToInsert = 3
//   sortElIndex = i - 1 = 0

//   while pertama {
//     sortElIndex >= 0 && array[sortElIndex] (5) > numToInsert (3) // true
//     [5, 5, 8, 4, 6]
//     sortElIndex--; = -1 //while stop
//   }

//     array[sortElIndex + 1 (0)] = 3
// }

// return array; [3, 5, 8, 4, 6]

// loop kedua {
//   i = 2
//   numToInsert = 8
//   sortElIndex = 1

//   while pertama {
//     sortElIndex >= 0 && array[sortElIndex] (5) > numToInsert (8) // false
//     while stop
//   }

//   array[2] = 8
// }

// return array; [3, 5, 8, 4, 6]
// */

// // Quick sort
// // recursive
// function quickSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   let piv = array[0];
//   let lArr = [];
//   let rArr = [];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < piv) {
//       lArr.push(array[i]);
//     } else {
//       rArr.push(array[i]);
//     }
//   }

//   return [...quickSort(lArr), piv, ...quickSort(rArr)];
// }

// console.log(quickSort([-6, 20, 8, -2, 4]));

// // non-recursive

// function quickSort2(array) {
//   let piv = array[0];
//   let lArr = [];
//   let rArr = [];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < piv) {
//       lArr.push(array[i]);
//     } else {
//       rArr.push(array[i]);
//     }
//   }

//   console.log(lArr);
//   console.log(rArr);
// }

// console.log(quickSort2([-6, 20, 8, -2, 4]));

// // Selection sort
// function selectionSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[lowest] > array[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       [array[i], array[lowest]] = [array[lowest], array[i]];
//     }
//   }
//   return array;
// }

// console.log(selectionSort([-6, 9, 20, 8, -2, 0, 4]));

// Merge sort
function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
