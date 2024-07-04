// Exercise 8
/*
    Gidhan Bagus Algary 
    @verssache
*/

// Employee Salary
class Employee {
    constructor(name) {
        this.name = name;
        this.totalHours = 0;
    }

    addWorkingHours(hours) {
        this.totalHours += hours;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name);
    }

    calculateSalary() {
        const regularRate = 100000;
        const reducedRate = 75000;
        let totalSalary = 0;

        if (this.totalHours > 6) {
            totalSalary = 6 * regularRate + (this.totalHours - 6) * reducedRate;
        } else {
            totalSalary = this.totalHours * regularRate;
        }

        return totalSalary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name);
    }

    calculateSalary() {
        const regularRate = 50000;
        const reducedRate = 30000;
        let totalSalary = 0;

        if (this.totalHours > 6) {
            totalSalary = 6 * regularRate + (this.totalHours - 6) * reducedRate;
        } else {
            totalSalary = this.totalHours * regularRate;
        }

        return totalSalary;
    }
}

const fullTimeEmp = new FullTimeEmployee("Daffa");
fullTimeEmp.addWorkingHours(8);
console.log(`Total Salary for ${fullTimeEmp.name}: Rp ${fullTimeEmp.calculateSalary().toLocaleString("id-ID")},00`);

const partTimeEmp = new PartTimeEmployee("Rafid");
partTimeEmp.addWorkingHours(8);
console.log(`Total Salary for ${partTimeEmp.name}: Rp ${partTimeEmp.calculateSalary().toLocaleString("id-ID")},00`);

console.log("");

// Shooting Game
class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }

    damage(power) {
        this.health -= power;
    }

    useItem(item) {
        console.log(`Player ${this.name} uses item (Health => ${item.health}, Power => ${item.power})`);
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`Player ${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.floor(Math.random() * 2) * 10;
        const power = Math.floor(Math.random() * 2) * 10;
        return { health, power };
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            player1.showStatus();
            player2.showStatus();

            const item1 = this.getRandomItem();
            player1.useItem(item1);
            const item2 = this.getRandomItem();
            player2.useItem(item2);

            player1.damage(player2.power);
            player2.damage(player1.power);
        }

        if (player1.health > 0 && player2.health <= 0) {
            console.log(`Player ${this.player1.name} wins!`);
        } else {
            console.log(`Player ${this.player2.name} wins!`);
        }
    }
}

const player1 = new Player("Daffa");
const player2 = new Player("Rafid");
const game = new ShootingGame(player1, player2);
game.start();
