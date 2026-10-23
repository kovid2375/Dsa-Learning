//  Maximum Product Subarray
//  Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Note that the product of an array with a single element is the value of that element.

 

// ​​​​​​​Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.



//BRUTE FORCE SOLUTION
// Time complexity : O(n^2)
// Space complexity : O(1)
var solution =(nums)=>{
    let n=nums.length;   
    let max=-Infinity
    for(let i=0;i<n;i++){
        let product=1;
        for(let j=i;j<n;j++){
            product*=nums[j]
            if(max<product){
                max=product;
            }
        }
    }
    return max
}
console.log(solution([-2,0,-1]))

//OPTIMAL SOLUTION
// Time complexity : O(n)
// Space complexity : O(1)
var solution2=(nums)=>{
     let maxEnding = nums[0];
    let minEnding = nums[0];
    let ans = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        // Negative number max ko min aur min ko max bana sakta hai
        if (num < 0) {
            [maxEnding, minEnding] = [minEnding, maxEnding];
        }

        maxEnding = Math.max(num, maxEnding * num);
        minEnding = Math.min(num, minEnding * num);

        ans = Math.max(ans, maxEnding);
    }

    return ans;
}

console.log(solution2([2,3,-2,4]))