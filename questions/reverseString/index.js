/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// *** 1st Method ***

// const reverseString = (str) => {
//     let reversed = '';

//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed;
//     }

//     return reversed;
// };

//Another way of making the same result with 'for of' loop from ES6

// const reverseString = (str) => {
//     let reversed = '';

//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// 'David' => ['D', 'a', 'v', 'i', 'd']
// 0 - str[i] = 'D', reversed = 'D' + '' = 'D'
// 1 - str[i] = 'a', reversed = 'a' + 'D' = 'aD'
// 2 - str[i] = 'v', reversed = 'v' + 'aD' = 'vaD'
// 3 - str[i] = 'i', reversed = 'i' + 'vaD' = 'ivaD'
// 4 - str[i] = 'd', reversed = 'd' + 'ivaD' = 'divaD'

// *** 2nd Method ***

// const reverseString = (str) => {
//     const arr = str.split('');          // 'David' => ['D', 'a', 'v', 'i', 'd']
//     const reversedArr = arr.reverse();  // ['d', 'i', 'v', 'a', 'D']
//     return reversedArr.join('')         // 'divaD'
// };

// We can also do it in one line with chaining methods

// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };

// *** 3rd Method ***

// const reverseString = (str) => {
//     return str.split('').reduce((accumulator, currentValue) => {
//         return currentValue + accumulator;
//     }, '');
// };

// We can use ES6 and remove the curlyh braces and the return statement, we can also remove the second parameter of reduce method as it will be set to the first element of the array by default

const reverseString = (str) => {
  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};

// 'David' => ['D', 'a', 'v', 'i', 'd']
// accumulator = '', currentValue = 'D' => return 'D' + '' = 'D'
// accumulator = 'D', currentValue = 'a' => return 'a' + 'D' = 'aD'
// accumulator = 'aD', currentValue = 'v' => return 'v' + 'aD' = 'vaD'
// accumulator = 'vaD', currentValue = 'i' => return 'i' + 'vaD' = 'ivaD'
// accumulator = 'ivaD', currentValue = 'd' => return 'd' + 'ivaD' = 'divaD'

module.exports = reverseString;
