// Given an integer array nums, find the subarray with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

//BRUTE FORCE SOLUTION 

var solution =(nums)=>{
    let n=nums.length;
    let max=-Infinity
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let sum =0
            for(let k=i;k<=j;k++){
                sum+=nums[k]
                max=Math.max(max,sum);
                
            }
        }
    }
    return max;
}
console.log(solution([-2,-3,4,-1,-2,1,5,-3]));

// BETTER SOLUTION 

var solution2=(nums)=>{
    let n=nums.length
    let max=-Infinity
    for(let i=0;i<n;i++){
        let sum=0
        for(let j=i;j<n;j++){
            sum+=nums[j]
            max=Math.max(max,sum)
        }
    }
    return max
}
console.log(solution2([-2,-3,4,-1,-2,1,5,-3]))

// OPTIMAL SOLUTION 


var solution3=(nums)=>{
    let n=nums.length
    let sum=0
    let max=-Infinity
    for(let i=0;i<n;i++){
        sum+=nums[i]
        if(sum>max){
            max=sum
        }
        if(sum<0){
            sum=0
        }
    }
    return max 
}
console.log(solution3([-2,-3,4,-1,-2,1,5,-3]))