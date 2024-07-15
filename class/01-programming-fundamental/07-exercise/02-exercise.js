function objIntersection(obj1, obj2) {
  const result = {};

  for (let prop in obj1) {
    if (obj2.hasOwnProperty(prop)) {
      if (obj1[prop] === obj2[prop]) {
        result[prop] = obj1[prop];
      }
    }
  }

  return result;
}

const obj1 = { a: 1, b: 2, d: 4 };
const obj2 = { a: 1, b: 2, c: 3 };

console.log(objIntersection(obj1, obj2));
