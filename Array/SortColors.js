// Sort an array of 0's 1's and 2's
// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order.

// The sorting must be done in-place, without making a copy of the original array.

// Example 1:
// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// Explanation:

// The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// Example 2:
// Input: nums = [0, 0, 1, 1, 1]

// Output: [0, 0, 1, 1, 1]

// Explanation:

// The nums array in sorted order has 2 zeroes, 3 ones and zero twos

//BRUTE FORCE APPROACH

var solution=(nums)=>{
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    return nums 
}
console.log(solution([0,1,2,0,1,2,1,2,0,0,0,1]));


// BETTER SOLUTION 

var solution2=(nums)=>{
    let n=nums.length
    let count0=0
    let count1=0
    let count2=2

    for(let i=0;i<n;i++){
        if(nums[i]===0)count0++
        if(nums[i]===1)count1++
        if(nums[i]===2)count2++

    }
    for(let i=0;i<count0;i++){
        nums[i]=0
    }
    for(let i=count0;i<count0+count1;i++){
        nums[i]=1
    }
    for(let i=count0+count1;i<n;i++){
        nums[i]=2
    }
    return nums
}
console.log(solution2([0,1,2,0,1,2,1,2,0,0,0,1]));

// OPTIMAL SOLUTION

var solution3=(nums)=>{
    let n=nums.length
    let low=0
    let mid=0
    let high=n-1
    while(mid<=high){
        if(nums[mid]===0){
            [nums[low],nums[mid]]=[nums[mid],nums[low]]
            low++
            mid++
        }
        else if(nums[mid]===1){
            mid++
        }
        else{
            [nums[mid],nums[high]]=[nums[high],nums[mid]]
            high--
        }
            
    }
    return nums
}
console.log(solution3([0,1,2,0,1,2,1,2,0,0,0,1]));