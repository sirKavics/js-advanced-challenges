/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */


const reverseString = (str) => {
    let reversed = '';
    
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    
    return reversed;
};
// 'David' => ['D', 'a', 'v', 'i', 'd']
// 0 - str[i] = 'D', reversed = 'D' + '' = 'D'
// 1 - str[i] = 'a', reversed = 'a' + 'D' = 'aD'
// 2 - str[i] = 'v', reversed = 'v' + 'aD' = 'vaD'
// 3 - str[i] = 'i', reversed = 'i' + 'vaD' = 'ivaD'
// 4 - str[i] = 'd', reversed = 'd' + 'ivaD' = 'divaD'

const reverseString2 = (str) => {
    const arr = str.split('');          // 'David' => ['D', 'a', 'v', 'i', 'd']
}

module.exports = reverseString;
