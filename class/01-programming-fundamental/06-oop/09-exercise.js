const students = [
  {
    name: "Fulanah",
    email: "fulanah@gmail.com",
    age: new Date("2000-01-01"),
    score: 100,
  },
  {
    name: "Fulanah",
    email: "fulanah@gmail.com",
    age: new Date("1999-01-01"),
    score: 90,
  },
  {
    name: "Fulanah",
    email: "fulanah@gmail.com",
    age: new Date("1995-01-01"),
    score: 80,
  },
  {
    name: "Fulanah",
    email: "fulanah@gmail.com",
    age: new Date("1991-01-01"),
    score: 75,
  },
  {
    name: "Fulanah",
    email: "fulanah@gmail.com",
    age: new Date("1899-01-01"),
    score: 100,
  },
];

const newStudents = [
  {
    name: "alisa",
    email: "alisa@gmail.com",
    age: new Date("2000-01-01"),
    score: 100,
  },
  {
    name: "angeline",
    email: "angeline@gmail.com",
    age: new Date("1999-01-01"),
    score: 90,
  },
];

function calculateStudentStatistics(students) {
  if (!Array.isArray(students)) {
    throw new Error("Input must be an array of students");
  }

  const scores = students.map((student) => student.score);
  const ages = students.map(
    (student) => new Date().getFullYear() - student.age.getFullYear()
  );

  console.log(scores);
  console.log(ages);

  return {
    Score: {
      Highest: Math.max(...scores),
      Lowest: Math.min(...scores),
      Average: scores.reduce((acc, val) => acc + val, 0) / scores.length,
    },
    Age: {
      Highest: Math.max(...ages),
      Lowest: Math.min(...ages),
      Average: ages.reduce((acc, val) => acc + val, 0) / ages.length,
    },
  };
}

calculateStudentStatistics(newStudents);
