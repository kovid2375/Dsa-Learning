// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

 

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

var rearrangeArray = function(nums) {
    let n=nums.length;
    let ans = [];
    let pos=0;
    let neg=1;
    for(let i=0;i<n;i++){
        if(nums[i]<0){
            ans[neg]=nums[i];
            neg +=2;
        }
        else{
            ans[pos]=nums[i];
            pos +=2;
        }
    }
    return ans;

};

console.log(rearrangeArray([3,1,-2,-5,2,-4]))

// alternate question 
//There is an array 'A' of size 'N' with positive and negative elements without altering the relative order of positive and negative numbers , you must return an array of alternatives positive and negative values . 
// note start the array with a positive number. if any of the positive and negative numbers are left , add them at the end without altering the order 

// for example -[1,2,-4,-5] 
//output should be [1,-4,2,-5]

var solution =(nums)=>{
    let pos=[]
    let neg=[]
    let n=nums.length
    for(let i=0;i<n;i++){
        if(nums[i]>0){
            pos.push(nums[i])
        }
        else{
            neg.push(nums[i])
        }
    }
    if(pos.length>neg.length){
        for(let i=0;i<neg.length;i++){
            nums[2*i]=pos[i]
            nums[2*i+1]=neg[i]
        }
        let index=neg.length*2;
        for(let i=neg.length;i<pos.length;i++){
            nums[index]=pos[i]
            index++;
        }
    }
    else{
        for(let i=0;i<pos.length;i++){
            nums[2*i]=pos[i]
            nums[2*i+1]=neg[i]
        }
        let index=pos.length*2;
        for(let i=pos.length;i<neg.length;i++){
            nums[index]=neg[i]
            index++;
        }
    }
    return nums;
}

console.log(solution([1,2,-4,-5]))