/*
Given 2 strings s and t, return true if t is an anagram of s, and false otherwise.

an Anagram is a word or phrase formed by rearranging the letters of a different word or phrase. typically using the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

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
    if (stats1[key] !== stats2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("anagram", "nagaram"));
console.log(anagram("cat", "car"));
console.log(anagram("cat", "act"));
