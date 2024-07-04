// 1. Falsy
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// 2. Truthy
console.log(Boolean(-10));
console.log(Boolean(0.005));
console.log(Boolean([]));
console.log(Boolean({ name: "Nadhif" }));
console.log(Boolean("A word"));
console.log(Boolean(new Date()));
