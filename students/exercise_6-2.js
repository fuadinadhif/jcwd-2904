// Transaction

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.product = [];
  }

  addToCart(productData, pcs) {
    let found = false;
    for (let key of this.product) {
      if (key.name == productData.name) {
        key.pcs += pcs;
        found = true;
      }
    }
    if ((found = true)) {
      this.product.push({ ...productData, pcs: pcs });
    }
    this.total += productData.price * pcs;
  }

  showTotal() {
    return `Total: $${this.total}`;
  }

  checkout() {
    let str = "Transaction FINALIZED!\n";
    for (let key of this.product) {
      str += `${key.pcs} x ${key.name} - $${key.price}\n`;
    }
    str += `TOTAL: $${this.total}`;

    this.total = 0;
    this.product = [];

    return str;
  }
}

const apple = new Product("Apple", 0.5);
const banana = new Product("Banana", 0.75);
// console.log(banana);

const transaction = new Transaction();
transaction.addToCart(apple, 6);
transaction.addToCart(banana, 2);
console.log(transaction.checkout());
