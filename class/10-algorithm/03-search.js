// Linear Search

// Binary Search
function binarySearch(arr, x) {
  console.log(arr);
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  let lhs = 0;
  let rhs = sorted.length - 1;

  while (lhs <= rhs) {
    let middle = Math.floor((lhs + rhs) / 2);

    if (sorted[middle] === x) return middle;

    if (sorted[middle] < x) {
      lhs = middle + 1;
    } else {
      rhs = middle - 1;
    }
  }

  return -1;
}

console.log(binarySearch([-10, 5, 1, 3, 7], 3));
