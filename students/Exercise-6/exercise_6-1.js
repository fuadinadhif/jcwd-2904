/* Expected return
object with values: {
  score: {
  highest,
  lowest,
  average,
  },
  age: {
  oldest,
  youngest,
  averages,
  }
}

*/

function studentData(param) {
  const result = {};
  const scoreResult = {};
  const ageResult = {};

  let scoreHighest = 0;
  let scoreLowest = Infinity;
  let scoreAverage = 0;

  let ageOldest = 0;
  let ageYoungest = Infinity;
  let ageAverage = 0;

  //check score (highest, lowest , & average)
  for (let key in param) {
    if (param[key].score > scoreHighest) {
      scoreHighest = param[key].score;
    }
    if (param[key].score < scoreLowest) {
      scoreLowest = param[key].score;
    }
    scoreAverage += param[key].score / param.length;
  }
  scoreResult.highest = scoreHighest;
  scoreResult.lowest = scoreLowest;
  scoreResult.average = scoreAverage;
  result.score = scoreResult;

  //check age (highest, lowest , & average)
  for (let key in param) {
    let checkAge = Math.floor(
      (new Date() - param[key].age) / 1000 / 3600 / 24 / 365
    );

    if (checkAge > ageOldest) {
      ageOldest = checkAge;
    }
    if (checkAge < ageYoungest) {
      ageYoungest = checkAge;
    }
    ageAverage += checkAge / param.length;
  }
  ageResult.oldest = ageOldest;
  ageResult.youngest = ageYoungest;
  ageResult.average = ageAverage;
  result.age = ageResult;

  //return object (score, age)
  return result;
}

const input = studentData([
  {
    name: "Joko",
    email: "joko@gmail.com",
    age: new Date("2000-05-22"),
    score: 100,
  },
  {
    name: "Linda",
    email: "linda@gmail.com",
    age: new Date("2000-01-01"),
    score: 99,
  },
  {
    name: "Tejo",
    email: "tejo@gmail.com",
    age: new Date("1998-07-03"),
    score: 60,
  },
  {
    name: "Udin",
    email: "udin@gmail.com",
    age: new Date("2002-06-12"),
    score: 50,
  },
]);

console.log(input);
