// 1. Array

// 2. Object

// 3. Set
const set = new Set([1, 2, 3]);

set.add(3);
set.add(2);
set.add(3);
set.add(3);
set.add(4);
set.add({ name: "John" });
set.add({ name: "John" });
set.add("Hallo");
set.delete(5);
// console.log(set.has(4));
// set.clear();
const setArr = [...set];
console.log(setArr[0]);
setArr[0] = 1000;
const arrSet = new Set(setArr);
console.log(arrSet);

for (let item in set) {
  console.log(item);
}

// console.log(set);

// 4. Map
const map = new Map([
  ["name", 10],
  [{}, "Sinarmas MSIG Tower"],
  [5000, {}],
]);

map.set(5000, {});
console.log(map.get(5000));
map.forEach((value, key, map) => {
  console.log(value, key, map);
});
console.log(map.has(5000));

console.log(map);
