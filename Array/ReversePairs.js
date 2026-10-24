// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
 

// Example 1:

// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:

// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1



//Brute Force Solution 

//Time Complexity = O(n^2)
//Space Complexity = O(1)

var solution =(nums)=>{
    let n=nums.length
    let count =0 
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]>2*nums[j]){
                count ++
            }
        }
    }
    return count
}

console.log(solution([1,3,2,3,1]))



//Optimal Soultion 





var solution2=(nums)=>{
    function mergeSort(left, right) {
        if (left >= right) return 0;

        const mid = Math.floor((left + right) / 2);

        let count = 0;

        // Count reverse pairs in left and right halves
        count += mergeSort(left, mid);
        count += mergeSort(mid + 1, right);

        // Count reverse pairs crossing the two halves
        let j = mid + 1;

        for (let i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2 * nums[j]) {
                j++;
            }

            count += j - (mid + 1);
        }

        // Merge both sorted halves
        const temp = [];
        let i = left;
        j = mid + 1;

        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
            }
        }

        while (i <= mid) temp.push(nums[i++]);
        while (j <= right) temp.push(nums[j++]);

        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }

        return count;
    }

    return mergeSort(0, nums.length - 1);
}

console.log(solution2([1,3,2,3,1]))



