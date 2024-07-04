class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const randomItem = Math.floor(Math.random() * 2) + 1;
        if (randomItem == 1) {
            return { health: 10, power: 0 };
        } else {
            return { health: 0, power: 10 };
        }
    }

    start() {
        let item, randomItem;
        while (true) {
            console.log(`Status \n ${this.player1.showStatus()} \n ${this.player2.showStatus()}`);

            // Player 1 Turn
            randomItem = this.getRandomItem();
            if (randomItem['health'] == 10) {
                item = 'Health';
            } else {
                item = 'Power';
            }
            console.log(`${this.player1.name} Get ${item} +10`);
            this.player1.useItem(randomItem);
            console.log(`${this.player1.name} Shooting ${this.player2.name}`);
            this.player2.damage(this.player1.power);
            if (this.player2.health <= 0) {
                console.log(`${this.player1.name} Win!!!`);
                break;
            }

            console.log(`Status \n ${this.player1.showStatus()} \n ${this.player2.showStatus()}`);

            // Player 2 Turn
            randomItem = this.getRandomItem();
            if (randomItem['health'] == 10) {
                item = 'Health';
            } else {
                item = 'Power';
            }
            console.log(`${this.player2.name} Get ${item} +10`);
            this.player2.useItem(randomItem);
            console.log(`${this.player2.name} Shooting Player 1`);
            this.player1.damage(this.player2.power);
            if (this.player1.health <= 0) {
                console.log(`${this.player2.name} Win!!!`);
                break;
            }
        }
    }
}

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
        if (item['health'] == 10) {
            this.health += 10;
        } else {
            this.power += 10;
        }
    }

    showStatus() {
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
}

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
const game = new ShootingGame(player1, player2);
game.start();
