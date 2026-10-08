// Given an M * N matrix, print the elements in a clockwise spiral manner.

// Return an array with the elements in the order of their appearance when printed in a spiral manner.

// Example 1:
// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Explanation:

// The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// Example 2:
// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]

// Output: [1, 2, 3, 4, 8, 7, 6, 5]

// Explanation:

// The elements in the spiral order are 1, 2, 3, 4 -> 8, 7, 6, 5


// Optimal solution

var solution =(matrix)=>{
    let n= matrix.length;
    let m = matrix[0].length;
    let left=0;
    let right=m-1;
    let top=0;
    let bottom=n-1;
    let ans=[];

    while(top<=bottom&&left<=right){
        //right
        for(let i=left;i<=right;i++){
            ans.push(matrix[top][i])
        }
        top++;

        //down 
        for(let i=top;i<=bottom;i++){
            ans.push(matrix[i][right])
        }
        right--;

        //left
        if(top<=bottom){
            for(let i=right;i>=left;i--){
                ans.push(matrix[bottom][i])
            }
            bottom--;
        }

        //top

        if(left<=right){
            for(let i=bottom;i>=top;i--){
                ans.push(matrix[i][left])
            }
            left++

        }
        
    }
    return ans;
}

console.log(solution([[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]));