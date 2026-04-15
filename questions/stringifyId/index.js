/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

// There are two ways of solving this problem. The brute-force way is to loop through the array and add the ID's to a new array if they are not already in it. The more efficient, TOP TECH, way is to use a Set method, which automatically handles duplicates for us.

// We have three steps to solve this problem:
// 1. Convert the Array of objects into an Array of ID's.
// 2. Convert the Array of ID's into an Array of unique ID's.
// 3. Join the Array to create a string of ID's seperated by a comma and a space (", ").

// 1st Method: Brute-force way

const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);
    const uniqueIdArray = [];
    let idString = "";

    for (let id of idArray) {
        if (!uniqueIdArray.includes(id)) {
            uniqueIdArray.push(id);
        }
    }

    for (let i = 0; i < uniqueIdArray.length; i++) {
        if (i !== uniqueIdArray.length -1) {
            idString += `${uniqueIdArray[i]}, `
        }
        else {
            idString += uniqueIdArray[i];
        }
    }

    return idString;
};

// We can simplify the code by using the slice method to remove the last comma and space from the string, instead of checking if we are at the last element of the array.

const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);
    const uniqueIdArray = [];
    let idString = "";

    for (let id of idArray) {
        if (!uniqueIdArray.includes(id)) {
            uniqueIdArray.push(id);
        }
    }

    for (let i = 0; i < uniqueIdArray.length; i++) {
        idString += `${uniqueIdArray[i]}, `;
    }

    return idString.slice(0, idString.length - 2);
};

// We can further simplify the code by using the join method to create the string of ID's, instead of looping through the array and adding the ID's to the string one by one.
//The join method takes an array and joins all the elements into a string, seperated by the specified separator (in this case, ", ").

const stringifyId = (arr) => {
    const idArray = arr.map(obj => obj.id);
    const uniqueIdArray = [];

    for (let id of idArray) {
        if (!uniqueIdArray.includes(id)) {
            uniqueIdArray.push(id);
        }
    }

    return uniqueIdArray.join(", ");
};

// 2nd Method: TOP TECH, Using Set

// The Set method is a built-in JavaScript object that allows you to store unique values of any type. It automatically handles duplicates for us, so we don't have to worry about checking if an ID is already in the array or not.

const stringifyId = (arr) => {
    const idArray = arr.map((obj) => obj.id);
    const uniqueIdArray = [...new Set(idArray)];

    return uniqueIdArray.join(", ");
};

module.exports = stringifyId;
