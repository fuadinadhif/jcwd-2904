// BMI Calculator
function BMICalculator(weight = 50, height = 2) {
  const BMI = weight / height ** 2;

  if (BMI < 18.5) {
    return "less wight";
  } else if (BMI < 24.9) {
    return "ideal";
  } else if (BMI < 29.9) {
    return "overweight";
  } else if (39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(BMICalculator(57, 1.72));
console.log(BMICalculator());
