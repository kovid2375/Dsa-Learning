// Q- Given an array of integers nums and an integer target , find the smallest index (0 based indexing) where the target appears in the array if the target is not found in the array then return -1

// Example - input -nums=[2,3,4,5,3] target=3 output = 1


   var solution=(nums,target)=>{
        for(let i=0;i<nums.length;i++){
            if(nums[i]===target){
                return i;
            }
        }
        return -1;
    }


let nums=[2,3,4,5,3];
let target=6;
console.log(solution(nums,target))