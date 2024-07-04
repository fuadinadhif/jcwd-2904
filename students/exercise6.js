// Exercise 6
/*
    Gidhan Bagus Algary 
    @verssache
*/

function calculateStudentData(students) {
    function calculateAverage(arr) {
        const sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    }

    const scores = students.map((student) => student.Score);
    const ages = students.map((student) => {
        const ageDiffMs = Date.now() - new Date(student.Age).getTime();
        return new Date(ageDiffMs).getUTCFullYear() - 1970;
    });

    const scoreStats = {
        Highest: Math.max(...scores),
        Lowest: Math.min(...scores),
        Average: calculateAverage(scores),
    };

    const ageStats = {
        Highest: Math.max(...ages),
        Lowest: Math.min(...ages),
        Average: calculateAverage(ages),
    };

    return {
        Score: scoreStats,
        Age: ageStats,
    };
}

const students = [
    { Name: "Gidhan", Email: "gidhan@gmail.com", Age: "2000-01-01", Score: 85 },
    { Name: "Daffa", Email: "daffa@gmail.com", Age: "2001-02-02", Score: 92 },
    { Name: "Rafid", Email: "rafid@gmail.com", Age: "2002-03-03", Score: 78 },
];

console.log(calculateStudentData(students));

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addToCart(product, qty) {
        this.products.push({ product, qty });
        this.total += product.price * qty;
    }

    showTotal() {
        console.log(`Total: $${this.total.toFixed(2)}`);
    }

    checkout() {
        const transactionData = this.products.map((item) => ({
            Name: item.product.name,
            Price: item.product.price,
            Qty: item.qty,
            Subtotal: item.product.price * item.qty,
        }));

        const totalData = {
            Total: this.total,
            Products: transactionData,
        };

        this.products = [];
        this.total = 0;

        return totalData;
    }
}

const apple = new Product("Apple", 10000);
const banana = new Product("Banana", 15000);
const orange = new Product("Orange", 20000);

const transaction = new Transaction();
transaction.addToCart(apple, 3);
transaction.addToCart(banana, 2);
transaction.addToCart(orange, 5);
transaction.showTotal();

const finalTransaction = transaction.checkout();
console.log(finalTransaction);
