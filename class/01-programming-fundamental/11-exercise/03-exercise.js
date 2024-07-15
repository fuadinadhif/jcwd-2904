function isAnagram(s, t) {
  // Handle edge cases: Different lengths or empty strings
  if (s.length !== t.length || !s || !t) {
    return false;
  }

  // Create a character count object to store frequencies
  const charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if all characters in t have matching frequencies in charCount
  for (const char of t) {
    if (!charCount[char] || charCount[char] === 0) {
      return false;
    }
    charCount[char]--; // Decrement count for characters in t
  }

  // If all characters match, return true
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagarom"));
