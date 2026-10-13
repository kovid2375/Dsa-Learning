// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


// BRUTE FORCE APPROACH

var solution = function(nums , target){
    const n = nums.length;
    const res = []
    nums.sort((a , b) => a - b)

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                for(let l=k+1;l<n;l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l]===target){
                        res.push([nums[i],nums[j],nums[k],nums[l]])
                    }
                }
            }
        }
    }
    return res
}

console.log(solution([2,2,2,2,2,2], 8))

// THE ABOVE APPROACH DOES WORK BUT IT'S VERY INEFFICIENT AND IT'S TIME COMPLEXITY IS O(N4)

//Better sloution 
var solution2=(nums,target)=>{
    let n=nums.length
    let st=new Set()
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            let hashset=new Set()
            for(let k=j+1;k<n;k++){
                let sum=nums[i]+nums[j]
                sum+=nums[k]
                let fourth=target-sum
                if(hashset.has(fourth)){
                    let temp=[nums[i],nums[j],nums[k],fourth]
                    temp.sort((a,b)=>a-b)
                    st.add(JSON.stringify(temp)) 
                }
                hashset.add(nums[k])
            }
        }
    }
    return Array.from(st,item=>JSON.parse(item))
}

console.log(solution2([1,0,-1,0,-2,2], 0))

//Optimal Solution 

var solution3=(nums,target)=>{
    let n=nums.length
    let ans=[]
    nums.sort((a,b)=>a-b)
    for(let i=0;i<n;i++){
        if(i>0&&nums[i]===nums[i-1]) continue
        for(let j=i+1;j<n;j++){
            if(j>i+1 && nums[j]===nums[j-1]) continue
            let k=j+1
            let l=n-1
            while(k<l){
                let sum=nums[i]+nums[j]
                sum+=nums[k]
                sum+=nums[l]
                if(sum===target){
                    let temp=[nums[i],nums[j],nums[k],nums[l]]
                    ans.push(temp)
                    k++
                    l--
                    while(k<l&&nums[k]===nums[k-1])k++
                    while(k<l&&nums[l]===nums[l+1])l--
                }
                else if(sum<target)k++
                else l--
            }
        }
    }
    return ans
}

console.log(solution3([1,0,-1,0,-2,2], 0))
console.log(solution3([2,2,2,2,2],8))