function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let result = true;
  let stats1 = {};
  let stats2 = {};

  for (item of s) {
    if (!stats1[item]) {
      stats1[item] = 1;
    } else {
      stats1[item] += 1;
    }
  }

  for (item of t) {
    if (!stats2[item]) {
      stats2[item] = 1;
    } else {
      stats2[item] += 1;
    }
  }

  for (key in stats1) {
    if (stats1[key] === stats2[key]) {
      result = true;
    } else {
      return false;
    }
  }

  return result;
}
