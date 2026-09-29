// Q - Given an array of integers nums , return the 2nd largest element in the array , if the second largest element doest not exists ,return -1 
// Example - input -nums=[8,8,7,6,5] output = 7

var solution=(nums)=>{
    let largest=nums[0];
    let secondLargest=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            secondLargest=largest
            largest=nums[i]
        }
        else if(nums[i]<largest&&nums[i]>secondLargest){
            secondLargest=nums[i]
        }
    }
    if(secondLargest===-Infinity){
        return -1
    }
    return secondLargest
}

console.log(solution([8,8,7,6,5]))