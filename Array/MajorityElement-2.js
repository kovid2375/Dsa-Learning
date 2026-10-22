// Given an integer array of size n, find all elements that appear more than ⌊n / 3⌋ times.
// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

var solution=(nums)=>{
    let candidate1
    let candidate2
    let count=0
    let count2=0
    let n=nums.length

    for(let i=0;i<n;i++){
        if(count>0&&nums[i]===candidate1){
            count++
        }
        else if(count2>0&&nums[i]===candidate2){
            count2++
        }
        else if(count===0){
            count=1;
            candidate1=nums[i]
        }
        else if(count2===0){
            count2=1
            candidate2=nums[i]
        }
        else{
            count--
            count2--
        }
    }
    count=0
    count2=0
    for(let num of nums){
        if(num===candidate1){
            count++
        }
        else if(num===candidate2){
            count2++
        }
    }
    let ans=[]
    if(count>n/3){
        ans.push(candidate1)
    }
    if(count2>n/3){
        ans.push(candidate2)
    }
    return ans
}

console.log(solution([1]))