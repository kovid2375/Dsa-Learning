// Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.

// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

// Example 1:
// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// Example 2:
// Input: matrix = [[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]
// Output: matrix = [[5, 4, 2, 0], [6, 5, 0, 1], [7, 0, 3, 1], [0, 5, 1, 2]]


var solution=(matrix)=>{
    let n=matrix.length;
    //Transpose of the matrix
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        }
    }
    // Reverse of the matrix
    for(let i=0;i<n;i++){
        matrix[i].reverse()
    }
    return matrix
}
console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))