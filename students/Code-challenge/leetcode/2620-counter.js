var createCounter = function (n) {
  let counter = n;
  return function () {
    return n++;
  };
};
