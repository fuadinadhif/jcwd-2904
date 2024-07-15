// 0.
const arr = [..."abcdefghijklmnopqrstuvwxyz"];

// 1.
function excelColumn(columnName) {
  let result = 0;

  for (let i = 0; i < columnName.length; i++) {
    const charCode = columnName.toLowerCase().charCodeAt(i);
    const charAlphabetPos = charCode - "a".charCodeAt(0) + 1;
    result += charAlphabetPos + 25 * i;
  }

  return result;
}

console.log(excelColumn("A"));
