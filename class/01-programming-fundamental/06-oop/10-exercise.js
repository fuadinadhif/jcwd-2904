class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = {};
  }

  addToCart(product, qty) {
    if (product.name in this.products) {
      this.products[product.name].qty += qty;
    } else {
      this.products[product.name] = { product, qty };
    }

    console.log(this.products);

    this.total += product.price * qty;
  }

  showTotal() {
    console.log(`Total: $${this.total}`);
  }

  checkout() {
    console.log("Transaction finalized!");

    for (const key in this.products) {
      let productName = key;
      let productQty = this.products[key].qty;
      let productTotalPrice = this.products[key].product.price * productQty;
      console.log(`${productQty} x ${productName} - $${productTotalPrice}`);
    }

    console.log(`Total: $${this.total}`);
  }
}

const apple = new Product("Apple", 5000);
const banana = new Product("Banana", 2000);

console.log(apple);
console.log(banana);

const transaction = new Transaction();
transaction.addToCart(apple, 5);
transaction.addToCart(banana, 5);
transaction.addToCart(apple, 5);
transaction.addToCart({ name: "Pear", price: 1000 }, 5);

transaction.showTotal();
transaction.checkout();
