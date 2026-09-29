// Given an array of integers nums , retun the value of the largest element present in the array
// Example - input - nums = [1,2,3,4,5] output = 5


var solution=(nums)=>{
    let largest=nums[0]

    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            largest=nums[i]
        }
    }
    return largest;
}

console.log(solution([2,4,5,7,8]))
    