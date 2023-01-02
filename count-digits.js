/**
 * Problem. Difficulty: Easy
    Given an integer num, return the number of digits in num that divide num.

    An integer val divides nums if nums % val == 0.
 */

/**
 * Solution
 */

var countDigits = function(num) {
    // convert num to string
    const num_as_str = num.toString();
    // console.log(num_as_str)
    // split string
    const arr = num_as_str.split('');
    // console.log(arr)
    // convert array of string to array of digits
    const digits = arr.map(d => parseInt(d))
    // console.log(digits)
    // count 
    const num_digits_divide_num = digits.filter(digit => num % digit === 0).length
    // console.log(num_digits_divide_num)
    return num_digits_divide_num
};

/**
 * Test cases
 */

countDigits(5);
countDigits(121);
countDigits(1248);