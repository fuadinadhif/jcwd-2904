class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const random = Math.random();
    if (random < 0.5) {
      return { health: 0, power: 10 };
    } else {
      return { health: 10, power: 0 };
    }
  }

  opponent(player) {
    if (player === this.player1) {
      return this.player2;
    } else {
      return this.player1;
    }
  }

  start() {
    let currPlayer = this.player1;
    console.log("-- GAME START! --");

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log("\n-- Turn --");

      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log("\n-- Player use Item --");
      this.player1.showStatus();
      this.player2.showStatus();

      console.log(`${currPlayer.name} attaks!`);
      this.opponent(currPlayer).damage(currPlayer.power);

      if (currPlayer === this.player1) {
        currPlayer = this.player2;
      } else {
        currPlayer = this.player1;
      }
    }

    const winner = this.player1.health > 0 ? this.player1 : this.player2;
    console.log(`\n-- GAME OVER! --`);
    console.log(`Winner: ${winner.name}`);
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
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `Player: ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

const player1 = new Player("Alice");
const player2 = new Player("Steve");

// console.log(player1);
// console.log(player2);

const game = new ShootingGame(player1, player2);
game.start();
