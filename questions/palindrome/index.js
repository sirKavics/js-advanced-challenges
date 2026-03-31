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



module.exports = palindrome;
