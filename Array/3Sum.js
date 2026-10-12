// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.



//BRUTE FORCE APPROACH 

var solution=(n,num)=>{
    let st= new Set();
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(num[i]+num[j]+num[k]===0){
                    let temp=[num[i],num[j],num[k]]
                    temp.sort((a,b)=>a-b)
                    st.add(JSON.stringify(temp))
                }
            }
        }
    }
    let ans=[...st].map((items)=>JSON.parse(items))
    return ans
}
console.log(solution(6,[-1,0,1,2,-1,-4]))


// BETTER APPROACH 

var solution2=(n,num)=>{
    let st=new Set()
    for(let i=0;i<n;i++){
        let hashset=new Set()
        for(let j=i+1;j<n;j++){
            let third=-(num[i]+num[j])
            if(hashset.has(third)){
                let temp=[num[i],num[j],third]
                temp.sort((a,b)=>a-b)
                st.add(JSON.stringify(temp))
            }
            hashset.add(num[j])
        }
    }
    return [...st].map(item=>JSON.parse(item))
}
console.log(solution2(6,[-1,0,1,2,-1,-4]))

// OPTIMAL APPROACH 

var solution3=(nums)=>{
    let n=nums.length
    let ans=[]
    //Step 1= sort the array
    nums.sort((a,b)=>a-b)
    for(let i=0;i<n;i++){
        //Skip duplicate element for i
        if(i>0&&nums[i]===nums[i-1]){
            continue
        }
        let j= i+1
        let k=n-1
        while(j<k){
            let sum=nums[i]+nums[j]+nums[k]
            if(sum<0){
                j++
            }
            else if(sum>0){
                k--
            }
            else{
                //tiplet found
                let temp=[nums[i],nums[j],nums[k]]
                ans.push(temp)
                j++
                k--
                //skip the duplicate element for j
                while(j<k&&nums[j]===nums[j-1]){
                    j++
                }
                //skip the duplicate element for k
                while(j<k&&nums[k]===nums[k+1]){
                    k--
                }
            }
            
        }
    }
    return ans
}
console.log(solution3([-1,0,1,2,-1,-4]))
    
