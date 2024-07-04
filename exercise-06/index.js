const student1 = [
  {
    name: "Jono",
    email: "Jono@gmail.com",
    age: 2001,
    score: 90,
  },
  {
    name: "Eko",
    email: "Eko@gmail.com",
    age: new Date("2002-07-03").getFullYear(),
    score: 80,
  },
  {
    name: "Julius",
    email: "Julius@gmail.com",
    age: new Date("2003-07-03").getFullYear(),
    score: 70,
  },
  {
    name: "Fikri",
    email: "Fikri@gmail.com",
    age: new Date("2004-07-03").getFullYear(),
    score: 82,
  },
  {
    name: "Gobles",
    email: "Gobles@gmail.com",
    age: new Date("2005-07-03").getFullYear(),
    score: 84,
  },
];

const a = new Date("2002-03-09").getFullYear();
console.log(a);

function calculate(arr) {
  const age = [];
  const score = [];
  let scoreAvg = (ageAvg = 0);
  let year = [];

  for (i in arr) {
    score.push(arr[i]["score"]);
    age.push(arr[i]["age"]);
  }

  for (let i = 0; i < age.length; i++) {
    year.push(new Date().getFullYear());
    year[i] = year[i] - age[i];
  }

  for (i in score) {
    scoreAvg += score[i];
    ageAvg += year[i];
  }

  return {
    score: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: scoreAvg / score.length,
    },
    age: {
      highest: Math.max(...year),
      lowest: Math.min(...year),
      average: ageAvg / age.length,
    },
  };
}

console.log(calculate(student1));

// 2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(productName, qty) {
    this.products.push({ productName, qty });
    this.total += productName.price * qty;
    return this.products;
  }

  showTotal() {
    return `Total: ${this.total}`;
  }

  checkout() {
    console.log(`Transaction Finalized`);
    for (let key in this.products) {
      console.log(
        `${this.products[key].productName.name} X ${this.products[key].qty}`
      );
    }
    console.log(`---------------------\nTotal: ${this.total}`);
    this.total = 0;
  }
}

const apple = new Product("Apple", 0.5);
const banana = new Product("Banana", 0.75);

const transaction = new Transaction();
transaction.addToCart(apple, 2);
transaction.addToCart(banana, 3);

console.log(transaction.showTotal());
console.log(transaction.checkout());
