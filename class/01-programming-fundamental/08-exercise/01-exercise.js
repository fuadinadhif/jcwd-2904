class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }

  addWorkingHours(hours) {
    this.workingHours += hours;
  }

  calculateSalary() {
    throw new Error("This method must be implemented in a child class");
  }
}

class FullTimeEmployee extends Employee {
  constructor(name) {
    super(name);
    this.baseRate = 100000;
    this.overtimeRate = 75000;
  }

  calculateSalary() {
    let salary = 0;
    if (this.workingHours <= 6) {
      salary = this.workingHours * this.baseRate;
    } else {
      salary = 6 * this.baseRate + (this.workingHours - 6) * this.overtimeRate;
    }
    return salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(name) {
    super(name);
    this.baseRate = 50000;
    this.overtimeRate = 30000;
  }

  calculateSalary() {
    let salary = 0;
    if (this.workingHours <= 6) {
      salary = this.workingHours * this.baseRate;
    } else {
      salary = 6 * this.baseRate + (this.workingHours - 6) * this.overtimeRate;
    }
    return salary;
  }
}

const fullTimeEmployee = new FullTimeEmployee("Alice");
fullTimeEmployee.addWorkingHours(8);

const partTimeEmployee = new PartTimeEmployee("Bob");
partTimeEmployee.addWorkingHours(5);

console.log(
  `Full-time employee salary: IDR ${fullTimeEmployee.calculateSalary()}`
);
console.log(
  `Part-time employee salary: IDR ${partTimeEmployee.calculateSalary()}`
);
