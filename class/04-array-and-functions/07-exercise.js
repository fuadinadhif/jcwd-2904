// FizzBuzz
function fizzBuzz(input) {
  let result = [];
  let counter = 0;

  while (counter < input) {
    counter++;

    if (counter % 5 === 0 && counter % 3 === 0) {
      result.push("FizzBuzz");
    } else if (counter % 3 === 0) {
      result.push("Fizz");
    } else if (counter % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(counter);
    }
  }

  return result.join(", ");
}

console.log(fizzBuzz(15));
