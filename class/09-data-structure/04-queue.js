class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}

const queue = new Queue();

queue.enqueue("mengaji");
queue.enqueue("sembahyang");
queue.enqueue("kultum");
console.log(queue.getElements());
queue.dequeue();
console.log(queue.getElements());

let score = 10;
score = 50;
console.log(score);
