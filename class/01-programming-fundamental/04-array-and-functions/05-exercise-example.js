// Create a function that can create a triangle pattern according to the height we provide
function trianglePattern(height) {
  for (let i = 0; i < height; i++) {
    let pattern = "";
    let counter = 1;

    for (let j = 0; j <= i; j++) {
      pattern += counter;
      counter++;
    }

    console.log(pattern);
  }
}

trianglePattern(5);
