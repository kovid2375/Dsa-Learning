// Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.

// Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in any order.

// Example 1:
// Input: nums = [1, 6, 2, 10, 3], target = 7

// Output: [0, 1]

// Explanation:

// nums[0] + nums[1] = 1 + 6 = 7

// Example 2:
// Input: nums = [1, 3, 5, -7, 6, -3], target = 0

// Output: [1, 5]

// Explanation:

// nums[1] + nums[5] = 3 + (-3) = 0

var solution =(nums,target)=>{
    let i=0;
    let n=nums.length;
    while(i<n){
        let j=i+1;
        while(j<n){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
            j++;
        }
        i++;
    }
}
console.log(solution([1, 6, 2, 10, 3], 7));


var solution1=(nums,target)=>{
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

    return [];
}
console.log(solution1([2,7,11,15], 26));