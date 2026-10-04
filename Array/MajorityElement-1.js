// Given an integer array nums of size n, return the majority element of the array.

// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.

// Example 1:
// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]

// Output: 7

// Explanation:

// The number 7 appears 5 times in the 9 sized array

// Example 2:
// Input: nums = [1, 1, 1, 2, 1, 2]

// Output: 1

// Explanation:

// The number 1 appears 4 times in the 6 sized array

//Moore's Voting Algorithm finds the majority element in linear time and constant extra space. We maintain a candidate and a count. When the count becomes zero, we choose the current element as the new candidate. If the current element matches the candidate, we increment the count; otherwise, we decrement it. The idea is that every non-majority element can cancel out one occurrence of the majority element, but because the majority element occurs more than n/2 times, it will survive all cancellations. Therefore, the final candidate is the majority element.

// Basic algo flow is - 
// if (count === 0) {
//     candidate = nums[i];
// }

// if (nums[i] === candidate) {
//     count++;
// } else {
//     count--;
// }

    //              START
    //                │
    //                ↓
    //       candidate = 0
    //       count = 0
    //                │
    //                ↓
    //          Traverse nums
    //                │
    //                ↓
    //          count == 0 ?
    //           /        \
    //         YES         NO
    //          │           │
    //          ↓           │
    //  candidate = nums[i] │
    //          │           │
    //          └─────┬─────┘
    //                ↓
    //       nums[i] == candidate?
    //           /          \
    //         YES           NO
    //          │             │
    //          ↓             ↓
    //       count++       count--
    //          │             │
    //          └──────┬──────┘
    //                 ↓
    //           Next element
    //                 │
    //                 ↓
    //               END
    //                 │
    //                 ↓
    //            candidate


//main code 
var solution =(nums)=>{
    let candidate;
    let count=0;
    let n = nums.length;
    
    for(let i=0;i<n;i++){
        if(count==0){
            count=1
            candidate=nums[i]
        }
        else if(nums[i]===candidate){
            count++;
        }
        else{
            count--;
        }
    }
    let count1=0
    for(let i=0;i<n;i++){
        if(nums[i]==candidate){
            count1++;
        }
    }
    if(count1>n/2){
        return candidate;
    }
    return -1;
}

console.log(solution([7,0,0,1,7,7,2,7,7]))