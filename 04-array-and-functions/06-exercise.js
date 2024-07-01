// Create a function that can create a triangle pattern according to the height we provide
function createTrianglePattern(height) {
  let counter = 1;

  for (let i = 0; i < height; i++) {
    let pattern = "";

    for (let j = 0; j <= i; j++) {
      pattern += counter < 10 ? `0${counter} ` : `${counter} `;
      counter++;
    }

    console.log(pattern.trim());
  }
}

createTrianglePattern(2);
