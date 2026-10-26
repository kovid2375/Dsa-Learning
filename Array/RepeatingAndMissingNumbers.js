// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.

// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

// Note: You are not allowed to modify the original array.

// Example 1:
// Input: nums = [3, 5, 4, 1, 1]

// Output: [1, 2]

// Explanation:

// 1 appears two times in the array and 2 is missing from nums

// Example 2:
// Input: nums = [1, 2, 3, 6, 7, 5, 7]

// Output: [7, 4]

// Explanation:

// 7 appears two times in the array and 4 is missing from nums.


//Brute Force 

var solution =(nums)=>{
    // find the missing numbers
    let n=nums.length
    let sum=0
    let sumOfNatualnums=(n*(n+1))/2
    console.log(sumOfNatualnums)
    let temp;
    for(let i=0;i<n;i++){
        sum+=nums[i]
        console.log(sum)
        // to find the repeating number
        for(let j=i+1;j<n;j++){
            if(nums[i]===nums[j]){
                temp=nums[i]
            }
        }
    }
    let missing =sumOfNatualnums-(sum-temp)
    return [temp,missing]

}
console.log(solution([1,3,4,5,6,5]))


//Optimal Solution 

var solution2 =(nums)=>{
    let n=nums.length
    let set=new Set()
    let sum=0 
    let sumOfNatualnums=(n*(n+1))/2
    let temp
    for(let i=0;i<n;i++){
        sum+=nums[i]
        if(set.has(nums[i])){
            temp=nums[i]
        }
        set.add(nums[i])
    }
    let missing=sumOfNatualnums-(sum-temp)
    return [temp,missing]
}
console.log(solution2([1,3,4,5,6,5]))