/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

// To solve this problem, we have to use a character map to count the frequency of each character in the string. Then, we can iterate through the character map to find the character with the highest frequency.

// 1st METHOD

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

module.exports = maxCharacter;
