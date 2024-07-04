class Employee {
    constructor() {
        this.salary = 0;
    }
}

class FulltimeEmployee extends Employee {
    constructor() {
        super();
        this.salaryDay = [];
    }

    addWorkingHourperDay(hour) {
        let salaryHour = 100_000;
        let total = 0;
        if (hour > 6) {
            total = salaryHour * 6;
            salaryHour = 75_000;
            hour -= 6;
            total += salaryHour * hour;
        } else {
            total = salaryHour * hour;
        }
        this.salaryDay.push(total);
    }

    calculateTotalSalary() {
        this.salary = this.salaryDay.reduce(function (a, b) {
            return a + b;
        });
        return this.salary;
    }
}

class ParttimeEmployee extends Employee {
    constructor() {
        super();
        this.salaryDay = [];
    }

    addWorkingHourperDay(hour) {
        let salaryHour = 50_000;
        let total = 0;
        if (hour > 6) {
            total = salaryHour * 6;
            salaryHour = 30_000;
            hour -= 6;
            total += salaryHour * hour;
        } else {
            total = salaryHour * hour;
        }
        this.salaryDay.push(total);
    }

    calculateTotalSalary() {
        this.salary = this.salaryDay.reduce(function (a, b) {
            return a + b;
        });
        return this.salary;
    }
}

const fulltime = new FulltimeEmployee();
fulltime.addWorkingHourperDay(7);
console.log(fulltime.calculateTotalSalary());

const parttime = new ParttimeEmployee();
parttime.addWorkingHourperDay(7);
console.log(parttime.calculateTotalSalary());
