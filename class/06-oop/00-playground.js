/* 4 OOP Pillars
1. Encapsulation
2. Inheritance
3. Abstraction
4. Polymorphism
*/

/* Encapsulation */
// Procedular
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

getWage(baseSalary, overtime, rate);

// OOP - Encapsulation
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

/* Factory and Constructor Function */
// Regular Object
let circle11 = {
  radius: 5,
  location: {
    x: 10,
    y: 15,
  },
  draw: function () {
    console.log("draw");
  },
};

circle11.draw();

const circle22 = { ...circle11, radius: 50 };

// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 10,
      y: 15,
    },
    draw() {
      console.log("draw");
    },
  };
}

let circle1 = createCircle(5);
let circle2 = createCircle(10);

circle1.draw();
circle2.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

let circle3 = new Circle(5);
let circle4 = new Circle(10);

/* Abstraction */
function CircleAbs(radius) {
  let defaultDrawing = "Dragon";
  let finalDrawing = `This is final the final drawing: ${defaultDrawing}`;
  this.radius = radius;
  this.location = { x: 1, y: 5 };
  this.draw = function () {
    return defaultDrawing;
  };

  Object.defineProperty(this, "defaultDrawing", {
    get: function () {
      return "defaultDrawing";
    },
    set: function (x) {
      if (typeof x === "number") throw new Error("Tidak boleh angka");
      defaultDrawing = x;
    },
  });
}

let circleAbs = new CircleAbs(5);
console.log(circleAbs.radius);
console.log(circleAbs.location);
console.log(circleAbs.defaultDrawing);
console.log(circleAbs.draw());
circleAbs.defaultDrawing = "Horse";
console.log(circleAbs.defaultDrawing);
circleAbs.radius = "string";
console.log(circleAbs.radius);

/* Polymorphism */
// Base Shape
function BaseShape() {
  this.getArea = function () {
    throw new Error("getArea() not implemented in the base Shape class");
  };
}

let shape = new BaseShape();
// shape.getArea();
console.log(shape);

// Circle Shape
function CircleShape(radius) {
  this.radius = radius;
}

CircleShape.prototype = Object.create(BaseShape.prototype); // Inherit from Shape

CircleShape.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

let circleShape = new CircleShape(10);
console.log(circleShape);
console.log(circleShape.getArea());

/* Object to Class */
// 1.
const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
user1.increment();
console.log(user1.score);

// 2.
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };

  return newUser;
}

// const user2 = userCreator("Will", 3);
// const user3 = userCreator("Tim", 5);

// 3.
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
};

const user4 = userCreator("Will", 3);
console.log(user4);

// 4.
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {
  this.score++;
};

const user5 = new userCreator("Will", 3);
console.log(user5.score);
user5.increment();
user5.increment();
console.log(user5.score);

// 5.
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const user6 = new UserCreator("Will", 3);
console.log(user6.name);
console.log(user6.score);
user6.increment();
user6.increment();
console.log(user6.score);

// ---------------------------
const age = new Date().getFullYear() - new Date("2000-01-01").getFullYear();
console.log(age);
