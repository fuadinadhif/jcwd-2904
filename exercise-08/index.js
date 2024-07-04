class Employee {
  // Public Variable
  maxWorkingHour = 6;
  total = 0;

  constructor(title, salary) {
    this.title = title;
    this.salary = salary;
  }

  workingHour(hour) {
    return (this.hour = hour);
  }

  totalSalary() {
    if (this.title === "full-time") {
      this.total += this.salary * this.maxWorkingHour;
      if (this.hour > 6) {
        this.hour -= this.maxWorkingHour;
        this.total += this.hour * 75_000;
      }
      return this.total;
    } else {
      this.total += this.salary * this.maxWorkingHour;
      if (this.hour > 6) {
        this.hour -= this.maxWorkingHour;
        this.total += this.hour * 50_000;
      }
      return this.total;
    }
  }
}

class FulltimeEmployee extends Employee {
  constructor() {
    super("full-time", 100_000);
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super("part-time", 50_000);
  }
}

const agus = new FulltimeEmployee();
console.log(agus.workingHour(8));
console.log(agus.totalSalary());

const joko = new ParttimeEmployee();
console.log(joko.workingHour(8));
console.log(joko.totalSalary());

class ShootingGame {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  randomItem() {
    const health = Math.floor(Math.random() * 2) * 10;
    const power = Math.floor(Math.random() * 2) * 10;
    return { health, power };
  }

  start() {
    while (this.p1.health > 0 && this.p2.health > 0) {
      this.p1.showStatus();
      this.p2.showStatus();

      const p1Item = this.randomItem();
      const p2Item = this.randomItem();

      this.p1.useItem(p1Item);
      this.p2.useItem(p2Item);

      this.p1.damage(this.p2.power);
      this.p2.damage(this.p1.power);
    }

    if (this.p1.health === 0) {
      console.log(`${this.p2.name} Wins`);
    } else {
      console.log(`${this.p1.name} Wins`);
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
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

const p1 = new Player("fikri");
const p2 = new Player("gobles");
console.log(p2.showStatus());

const game = new ShootingGame(p1, p2);
game.start();
