// Employee Salary

class Employee {
  constructor(type) {
    this.type = type;
    this.baseSalary = 0;
    this.otSalary = 0;
    this.workingHour = 0;

    if (this.type == "full-time") {
      this.baseSalary = 100_000;
      this.otSalary = 75_000;
    } else if (this.type == "part-time") {
      this.baseSalary = 50_000;
      this.otSalary = 30_000;
    } else {
      throw new Error(
        "Please input 'full-time' or 'part-time' as employee type."
      );
    }
  }

  addWorkingHour(hour) {
    this.workingHour = hour;
  }

  salary() {
    let total = 0;
    if (this.workingHour > 6) {
      total += this.baseSalary * 6 + this.otSalary * (this.workingHour - 6);
    } else {
      total += this.baseSalary * this.workingHour;
    }
    return total;
  }
}

class FulltimeEmployee extends Employee {
  constructor() {
    super("full-time");
  }
}

class ParttimeEmployee extends Employee {
  constructor() {
    super("part-time");
  }
}

const Joko = new FulltimeEmployee();
Joko.addWorkingHour(7);
console.log(Joko.salary());

const Bob = new ParttimeEmployee();
Bob.addWorkingHour(7);
console.log(Bob.salary());
