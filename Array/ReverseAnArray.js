// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.

// Example 1:
// Input: n=5, arr = [1,2,3,4,5]

// Output: [5,4,3,2,1]

// Explanation: The reverse of the array [1,2,3,4,5] is [5,4,3,2,1]

// Example 2:
// Input: n=6, arr = [1,2,1,1,5,1]

// Output: [1,5,1,1,2,1]

// Explanation: The reverse of the array [1,2,1,1,5,1] is [1,5,1,1,2,1].

// DSA Pattern - TWO POINTER PROBLEM SOLUTION
var solution =(nums)=>{
    let left=0;
    let right=nums.length-1
    while(left<right){
        let temp=nums[left]
        nums[left]=nums[right]
        nums[right]=temp
        left++;
        right--;
    }
    return nums;
}

console.log(solution([5,2,3,4,2]))
