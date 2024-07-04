//1
const arr = [
    { name: 'Fulan', email: 'student1@mail.com', age: new Date('1981-01-01'), score: 80 },
    { name: 'Daniel', email: 'student2@mail.com', age: new Date('1985-01-01'), score: 85 },
    { name: 'Andi', email: 'student3@mail.com', age: new Date('1988-01-01'), score: 90 },
    { name: 'Dina', email: 'student4@mail.com', age: new Date('1994-01-01'), score: 82 },
    { name: 'Sifa', email: 'student5@mail.com', age: new Date('1998-01-01'), score: 87 },
];
function calculate(arr) {
    let minScore = Infinity;
    let maxScore = -Infinity;
    let avgScore = 0;
    let minAge = Infinity;
    let maxAge = -Infinity;
    let avgAge = 0;

    for (let i of arr) {
        let getAge = Math.floor((new Date() - new Date(i['age']).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
        if (getAge < minAge) minAge = getAge;
        if (getAge > maxAge) maxAge = getAge;
        avgAge += getAge;
        if (i['score'] < minScore) minScore = i['score'];
        if (i['score'] > maxScore) maxScore = i['score'];
        avgScore += i['score'];
    }

    avgScore /= arr.length;
    avgAge /= arr.length;

    return {
        score: {
            highest: maxScore,
            lowest: minScore,
            average: avgScore,
        },
        age: {
            highest: maxAge,
            lowest: minAge,
            average: avgAge,
        },
    };
}

console.log(calculate(arr));

//2
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

    addToCart(productData, qty) {
        let found = false;
        for (let i of this.product) {
            if (i['name'] == productData['name']) {
                i['qty'] += qty;
                found = true;
            }
        }
        if (!found) {
            this.product.push({ ...productData, qty: qty });
        }
        this.total += productData['price'] * qty;
    }

    showTotal() {
        return `Total: $${this.total}`;
    }

    checkout() {
        let str = 'Transaction finalized! \n';
        for (let i of this.product) {
            str += `${i['qty']} x ${i['name']} - $${i['price']}\n`;
        }
        str += `Total: ${this.total}`;

        this.total = 0;
        this.product = [];

        return str;
    }
}

const apple = new Product('Apple', 0.5);
const banana = new Product('Banana', 0.75);

const transaction = new Transaction();
transaction.addToCart(apple, 2);
transaction.addToCart(banana, 3);

console.log(transaction.showTotal());
console.log(transaction.checkout());
console.log(transaction.showTotal());
