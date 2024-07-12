// Buble Sort - O(n^2)
function bubbleSort(array, asc = true) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (asc ? array[i] > array[i + 1] : array[i] < array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// ASC [3, 4, 5, 6, 8]
console.log(bubbleSort([5, 3, 8, 4, 6], true));
// DSC [8, 6, 5, 4, 3]
console.log(bubbleSort([5, 3, 8, 4, 6], false));

// Insertion Sort - O(n^2)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numToInsert = array[i];
    let sortElIndex = i - 1;
    console.log(numToInsert, array[sortElIndex], sortElIndex);

    while (sortElIndex >= 0 && array[sortElIndex] > numToInsert) {
      array[sortElIndex + 1] = array[sortElIndex];
      sortElIndex--;
    }

    array[sortElIndex + 1] = numToInsert;
    console.log(array);
  }

  return array;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));

// Quick Sort - Worst Case O(n^2) - Avg O(nlogn)
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[Math.floor(array.length / 2)];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < array.length; i++) {
    if (i === Math.floor(array.length / 2)) continue;

    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  console.log(pivot);
  console.log(leftArr);
  console.log(rightArr);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// [-6, -2, 4, 8, 20]
console.log(quickSort([-6, -7, 20, 8, -2, 4]));
console.log(
  quickSort([-7, 20, -Infinity, Infinity, 8, 0, 0, 0, -2, 4, undefined])
);

// Selection - O(n)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([-6, 20, 8, -2, 4]));

// Merge - O(nlogn)
function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];

  console.log(leftArray);
  console.log(rightArray);

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }

    console.log(sortedArray);
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSort([-6, 20, 8, -2, 4]));
// console.log(mergeSort([-6, 20, 8, -2, 4, -Infinity]));
// console.log(mergeSort([-6, 20, 8, -2, 4, 123, 3, 4, 5, 1]));

if (
  userId && isVerified && hasPermission && permissionLevel === 3
    ? true
    : permissionLevel === 2
    ? true
    : permissionLevel === 1
    ? true
    : permissionLevel === 0
    ? true
    : false
) {
}
