const str = "Simplified !";
const charMap = {};

for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
};

console.log(charMap);