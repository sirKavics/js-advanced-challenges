/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

// 1st Method

const palindrome = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

//2nd Method

const palindrome = (str) => {
  return str.split('').every((char, index) => (
    char === str[str.length -1 -index]
  ));
};

//  This method is inefficient because of duplicate checks, but it is more memory efficient because it does not create a new string.

// To prevent duplicate checks, we can loop over characters in the first half of the string.
// If the character is NOT equal to the character at the opposite index, we can return false immediately. If we finish the loop without finding any mismatches, we can return true.

const palindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex ]) {
      return false;
    }
  }
  return true;
};

module.exports = palindrome;
