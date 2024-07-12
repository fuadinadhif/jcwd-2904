class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  push(element) {
    if (this.#isFull()) {
      // console.log("Stack overflow!");
      throw new Error("Stack overflow!");
    } else {
      this.#container.push(element);
    }
  }

  pop() {
    if (this.#isEmpty()) {
      console.log("Stack underflow!");
      return;
    }

    this.#container.pop();
  }

  getElements() {
    return this.#container;
  }
}

const stack = new Stack(5);
console.log(stack.getElements());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.getElements());
stack.pop();
console.log(stack.getElements());
stack.push(4);
stack.push(5);
stack.push(6); // Stack overflow!
console.log(stack.getElements());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.getElements());
