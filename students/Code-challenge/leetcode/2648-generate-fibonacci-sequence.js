var fibGenerator = function* () {
  let fib1 = 0;
  let fib2 = 1;
  while (true) {
    yield fib1;
    let temp = fib2;
    fib2 = fib1 + fib2;
    fib1 = temp;
  }
};

const fib = fibGenerator();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
