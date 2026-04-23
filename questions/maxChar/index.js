/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// To solve this problem, we have to use a character map to count the frequency of each character in the string. Then, we can iterate through the character map to find the character with the highest frequency.

// This how we create a character map:
// const str = "Simplified !";
// const charMap = {};

for (let char of str) {
  if (!charMap[char]) {
    charMap[char] = 1;
  } else {
    charMap[char] = charMap[char] + 1;
  }
}

// We can also optimise the code by using the logical OR operator to set the value of the character in the character map:

const str = "Simplified !";
const charMap = {};

for (let char of str) {
  charMap[char] = charMap[char] + 1 || 1;
}

// 1st METHOD
// Junior method

//Steps to solve the problem:
// 1. Create a character map
// 2. Loop over every character in the character map
// 3. If the value of the character is greater than max:
// Set max to the value
// Set maxChar to the character
// 4. Return maxChar

const maxCharacter = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }

    return maxChar;
};

// 2nd METHOD
// Senior top tech method

//For this method we'll use the map object instead of a regular object to create the character map. The rest of the steps are the same as the first method.

const maxCharacter = (str) => {
  const charMap = new Map();
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

// for (let keyAndValue of charMap) {
//   const [key, value] = keyAndValue;
// }
// Here we can use ES6 desctructuring to get the key and value from the map.

  for (const [char, count] of charMap) {
// With ES6 we can use destructuring to get the character and its count directly from the map for of loop in only one line of code.
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxCharacter;
