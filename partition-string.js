/**
 * Problem
 * You are given a string s consisting of digits from 1 to 9 and an integer k.

    A partition of a string s is called good if:

    Each digit of s is part of exactly one substring.
    The value of each substring is less than or equal to k.
    Return the minimum number of substrings in a good partition of s. If no good partition of s exists, return -1.

    Note that:

    The value of a string is its result when interpreted as an integer. For example, the value of "123" is 123 and the value of "1" is 1.
    A substring is a contiguous sequence of characters within a string.
 */

/**
 * Solution
 */

var minimumPartition = function (s, k) {
    // console.log('start');
    let output;
    let subStrArray = []

    // if interger of s is less or equal than k, then  the minimum number of substrings in a good partition of s is 1
    if (parseInt(s) <= k) {
        output = 1;
    }

    // if k < 10, the only good partition (if any) is equal to s length
    if (k < 10) {
        if (s.split('').every(e => parseInt(e) <= k)) {
            output = s.length;
        } else {
            output = -1;
        }
    } else {
        let newS = s;
        let kLen = k.toString().length;
        /**
         * step 1: slicing number of kLen first digits of newS
         * step 2: compare it with k
         *  case 1: less than k,
         *      - add the sliced part 
         *      - update the newS
         *      - countinue with step 1
         *  case 2: more than k
         *      - re-slice, this time (kLen-1) first digits of newS 
         *      - add the sliced
         *      - update the newS
         *      - ountinue with step 1
         * the above loop stops when the join of the sliced parts is equal to the original s
         */
        let subStr
        while (subStrArray.join('').length < s.length) {
            // slice
            subStr = newS.slice(0, kLen);
            // console.log('subStr', subStr);
            //compare
            if (parseInt(subStr) <= k) {
                //add the sliced
                subStrArray.push(subStr);
                // console.log('subStrArray', subStrArray);
                // update the new s
                newS = newS.slice(kLen, newS.length)
                // console.log('newS', newS);
            } else {
                // slice again, less than 1 digit
                subStr = newS.slice(0, kLen - 1);
                // add the sliced
                subStrArray.push(subStr);
                // update the newS
                newS = newS.slice(kLen - 1, newS.length)
                // console.log('substr2', subStr);
            }
            // console.log('substring array', subStrArray);    
        }
        output = subStrArray.length;
    }

    console.log('output', output);
    // console.log('end');
    return output;
}

/**
 * Test cases
 */
minimumPartition("51", 52); // output 1, pass
minimumPartition("238182", 5); //output: -1 (no good partition)
minimumPartition("238182", 9); // output: 6
minimumPartition("165462", 60); // ['15', '54', '6', '2'] =>output: 4, pass
minimumPartition("16546288", 60); //['16', '54', '6', '28', '8'] => output: 5, pass
minimumPartition("1654625343", 520); //['165', '462', '53', '43'] => output: 4, pass