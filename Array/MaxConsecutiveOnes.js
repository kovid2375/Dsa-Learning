//Q- Given a Binary Array nums return the maximum number of consecutive 1s in the array 
//  Example - nums=[1,1,0,0,1,1,1,0] output=3
// if no 1s are present in nums we return 0 


var solution=(nums)=>{
    let count=0;
    let maxcount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++;
            if(count>maxcount){
                maxcount=count;
            }
        }
        else{
            count=0
        }
    }
    return maxcount
}

console.log(solution([1,0,1,1,1,0,1,1]))