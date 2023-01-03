/**
 * Project. Difficulty level: Hard
    Given two positive integers left and right, find the two integers num1 and num2 such that:

    left <= nums1 < nums2 <= right .
    nums1 and nums2 are both prime numbers.
    nums2 - nums1 is the minimum amongst all other pairs satisfying the above conditions.
    Return the positive integer array ans = [nums1, nums2]. If there are multiple pairs satisfying these conditions, return the one with the minimum nums1 value or [-1, -1] if such numbers do not exist.

    A number greater than 1 is called prime if it is only divisible by 1 and itself.
 */

/**
 * Pseudo code

      1. Find all prime numbers between left and right withinPrimes = [];
      2. If withinPrimes.length >= 0 and < 2, then return [-1, -1] (such numbers do not exist)
      3. Else (or withinPrimes.length > 1) then return the first two elements of the sorted array. 

      How to find all prime numbers between left and right?
      1.1 check whether a number is prime
      function isPrime (num) {
         loop through starting from 2 to num / 2 represented by x
            if at least x existed such that num % x === 0, then num is not prime
      }
      1.2 loop through the left (as the beginning) to the right (as the end) to get prime numbers
      function allPrimes (left, right) {
         let withinPrimes = [];
         for (let i = left; i <= right; i++) {
            if isPrime(i) === true then withinPrimes.push(i)
         }
         return withinPrimes;
      }

 */
var isPrime = function (num) {
   let isPrime;
   if (num < 2) {
      isPrime = false;
   } else {
      let possibleFactors = []

      for (let i = 2; i <= num / 2; i++) {
         possibleFactors.push(i);
      }
      //console.log('possible factors', possibleFactors);
      isPrime = possibleFactors.every(factor => num % factor > 0);
      //console.log('is prime',isPrime);
   }

   return isPrime;
}

var allPrimes = function (left, right) {
   let withinPrimes = [];
   for (let i = left; i <= right; i++) {
      if (isPrime(i) === true) {
         withinPrimes.push(i)
      }
   }
   //console.log('within primes', withinPrimes);
   return withinPrimes;
}

var closestPrimes = function (left, right) {

   let output;
   const withinPrimes = allPrimes(left, right);

   if (withinPrimes.length > 1) {
      output = withinPrimes.slice(0, 2)
   } else {
      output = [-1, 1]
   };
   //console.log('closet primes', output);
   return output;
};

/**
 * Test cases
 */

closestPrimes(1, 3); //closet primes (2) [2, 3]
closestPrimes(4, 6); //closet primes (2) [-1, 1]
closestPrimes(10, 19) //closet primes (2) [11, 13]