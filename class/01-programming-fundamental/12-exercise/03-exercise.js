function generatePascalTriangle(numRows) {
  const triangle = [];

  // Base case: First row is always [1]
  triangle.push([1]);

  // Build subsequent rows using dynamic programming
  for (let i = 1; i < numRows; i++) {
    const row = [];
    row.push(1); // First element in each row is always 1

    // Calculate inner elements using sum of elements above
    for (let j = 1; j < i; j++) {
      const element = triangle[i - 1][j - 1] + triangle[i - 1][j];
      row.push(element);
    }

    row.push(1); // Last element in each row is always 1
    triangle.push(row);
  }

  return triangle;
}

// Example usage
const numRows1 = 5;
const numRows2 = 1;

console.log(generatePascalTriangle(numRows1)); // Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(generatePascalTriangle(numRows2)); // Output: [[1]]
