// 
// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

var solution =(rowIndex)=>{
    let ans=1
    let ansRow=[]
    ansRow.push(1);
    for(let col=1;col<rowIndex;col++){ // if 0-index the col<=rowIndex and rowIndex+1-col
        ans=ans*(rowIndex-col)
        ans=ans/col
        ansRow.push(ans)
    }
    return ansRow
}
console.log(solution(3));