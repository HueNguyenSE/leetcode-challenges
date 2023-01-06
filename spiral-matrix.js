/**
 * Problem. Difficulty: Medium
 * 
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */

/**
 * Break down problem
 * 
 * - find a pattern of one cycle
 * - when the loop is terminated
 * - 
 */

/**
 * Pseudo code
 * 
 * loop Math.ceil(matrix.length/2) times
 * - get a new matrix of :
 *      + first array of the originalmatrix, 
 *      + an array of all last elements from child arrays of matrix
 *      + last array of the original matrix,
 *      + an array of all first elements from child arrays of matrix;
 * - update the base matrix
 * - repeat
 */

/**
 * Solution
 */

var spiralOrder = function (matrix) {

    let baseMatrix = matrix;

    let loops = Math.ceil(baseMatrix.length / 2);

    let newMatrix = [];


    for (let i = 0; i < loops; i++) {
        let topArray = baseMatrix.splice(0, 1).flat();
        let rightArray = baseMatrix.map(arr => arr.splice(arr.length - 1, 1)).flat();
        // reverse the bottom and left array after flattening.
        let bottomArray = baseMatrix.splice(baseMatrix.length - 1).flat().reverse();
        let leftArray = baseMatrix.map(arr => arr.splice(0, 1)).flat().reverse();

        newMatrix.push(topArray, rightArray, bottomArray, leftArray);
        // console.log('new matrix', newMatrix);
        // console.log('current base matrix', baseMatrix);
    }
    console.log(newMatrix.flat());
    return newMatrix.flat();
};

/**
 * Test cases
 */
spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
spiralOrder([[1,2,3,4,5,6], [7,8,9,10,11,12], [13,14,15,16,17,18], [19,20,21,22,23,24], [25,26,27,28,29,30], [31,32,33,34,35,36]]);
spiralOrder([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24]]);
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])
