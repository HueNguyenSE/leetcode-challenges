/**
 * Problem. Difficulty: Medium
    Given an array of positive integers nums, return the number of distinct prime factors in the product of the elements of nums.

    Note that:
    A number greater than 1 is called prime if it is divisible by only 1 and itself.
    An integer val1 is a factor of another integer val2 if val2 / val1 is an integer.
 */

/**
 * Solution
 */

var findFactors = function (num) {
    let newNum = num;
    const distinctFactors = []
    for (i = 2; i <= newNum; i++) {
        //console.log('i', i)
        // check whether newNum is divisible by i 
        while (newNum % i == 0) {
            //get the output of the division and reassign newNum to the output
            newNum = newNum / i;
            //console.log('newNum', newNum)
            // get the final output
            if (!distinctFactors.includes(i)) {
                distinctFactors.push(i)
                console.log(distinctFactors);
            }
        }
    }
    return distinctFactors;
}

var distinctPrimeFactors = function (nums) {
    const product = nums.reduce((product, num) => product *= num, 1)
    // console.log(product)
    console.log('len', findFactors(product).length);
    return findFactors(product).length
};

/**
 * Test cases
 */
distinctPrimeFactors([2,4,3,7,10,6]);
distinctPrimeFactors([2,4,8,16]);
distinctPrimeFactors([87, 56, 45, 98]);