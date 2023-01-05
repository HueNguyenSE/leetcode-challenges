/**
 * Problem. Difficulty: Easy
 * 
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits. 
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 */

/**
 * Pseudo code
 * 
 * - Split the number into an array of digits
 * - Calculate the sum of the squares of the digits
 * - Reassign the number to the sum
 * - Repeat the above till
 *      + case 1: sum === 1, return true and break
 *      + case 2: detect a replicate (?)
 * 
 *  Notes: the sum of each digit's square could not be infinite (given the number is finite)
 */

/**
 * Solution
 */
var isHappy = function (num) {
    let output = false

    if (num > 0) {
        let newNum = num;
        // a collection of newNum
        const allNewNums = [];
        while (true) {
            // split a number into an array of digits
            let numsArray = newNum.toString().split('').map(num => parseInt(num));
            //console.log(numsArray);

            // reassign the sum to the newNum
            newNum = numsArray.reduce((sum, num) => sum += num ** 2, 0)
            //console.log(newNum);

            if (newNum === 1) {
                output = true;
                break;
            }

            // if any found newNum that is already existed in the array, this is a start of replicated loop
            if (allNewNums.includes(newNum)) {
                break;
            } else {
                allNewNums.push(newNum)
            }
        }
        //console.log('allNewNums', allNewNums);
    }
    return output;
}

/**
 * Test cases
 */
console.log('19 is happy:', isHappy(19));
console.log('1 is happy:', isHappy(1));
console.log('2 is happy:', isHappy(2));
console.log('5 is happy:', isHappy(5));
console.log('0 is happy:', isHappy(0));
console.log('11111111 is happy:', isHappy(11111111));
console.log('1111111 is happy:', isHappy(1111111));