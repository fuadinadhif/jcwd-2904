/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  romanArr = s.split("");
  console.log(romanArr);
  romanArr.forEach((element, index) => {
    console.log(roman[element]);
    if (roman[element] < roman[romanArr[index + 1]]) {
      num -= roman[element];
    } else {
      num += roman[element];
    }
  });
  return num;
};

console.log(romanToInt("MCMXCIV"));
