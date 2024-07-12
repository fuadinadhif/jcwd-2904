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
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(`${this.name} (Health: ${this.health}, Power: ${this.power})`);
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const random = Math.random();
    return { health: random > 0.5 ? 10 : 0, power: random > 0.5 ? 0 : 10 };
  }

  start() {
    let currentPlayer = this.player1;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("\n--- Turn ---");

      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log("After item pickup:");
      this.player1.showStatus();
      this.player2.showStatus();

      console.log(`${currentPlayer.name} attacks!`);
      this.opponent(currentPlayer).damage(currentPlayer.power);

      currentPlayer =
        currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    const winner = this.player1.health > 0 ? this.player1 : this.player2;
    console.log(`\n--- Game Over ---`);
    console.log(`Winner: ${winner.name}`);
  }

  opponent(player) {
    return player === this.player1 ? this.player2 : this.player1;
  }
}

const player1 = new Player("Alice");
const player2 = new Player("Bob");

console.log(player1);
console.log(player2);

const game = new ShootingGame(player1, player2);
game.start();
