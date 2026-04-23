/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

// To solve this problem, we can create a character map for each string and then compare the maps. The character map will count the occurrences of each character in the string, ignoring spaces and case. If the maps are identical, then the strings are anagrams of each other.

const anagrams = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (charMapA.size !== charMapB.size) {
    return false;
  }

  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return false;
    }
  }
  return true;
};

const buildCharMap = (str) => {
  const charMap = new Map();

  for (const char of removeSpacesAndLowerCase(str)) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  return charMap;
};

const removeSpacesAndLowerCase = (str) => {
  return str.toLowerCase().replaceAll(" ", "");
};

// There's also a more consise way of solving this problem with the .sort() method. We can clean the strings by removing spaces and converting to lower case, then split them into arrays of characters, sort the arrays, and join them back into strings. If the cleaned and sorted strings are equal, then the original strings are anagrams.

// Set both string to lower case
// Remove all the spaces
// Converrt the string to an array of characters
// Sorting the strings
// Join the sorted array back into a string

const anagrams = (strA, strB) => {
    return cleanString(strA) === cleanString(strB);
};

const cleanString = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("");
}

module.exports = anagrams;
