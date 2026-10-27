// Given an integer array nums. Return the number of inversions in the array.

// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

// It indicates how close an array is to being sorted.
// A sorted array has an inversion count of 0.
// An array sorted in descending order has maximum inversion.
// Example 1:
// Input: nums = [2, 3, 7, 1, 3, 5]

// Output: 5

// Explanation:

// The responsible indexes are:

// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3

// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3

// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3

// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4

// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5

// Example 2:
// Input: nums = [-10, -5, 6, 11, 15, 17]

// Output: 0

// Explanation:

// nums is sorted, hence no inversions present. 

// Brute Force Solution 
var solution =(nums)=>{
    let n=nums.length
    let count=0 
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]>nums[j]){
                count++
            }
        }
    }
    return count
}

//Optimal Solution Using Merge sort

function merge(nums, low, mid, high) {
    let temp = [];

    let left = low;
    let right = mid + 1;

    let cnt = 0;

    // Merge both sorted halves
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);

            // Count inversions
            cnt += mid - left + 1;

            right++;
        }
    }

    // Copy remaining elements from the left half
    while (left <= mid) {
        temp.push(nums[left]);
        left++;
    }

    // Copy remaining elements from the right half
    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }

    // Copy sorted elements back into the original array
    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }

    return cnt;
}

function mergeSort(nums, low, high) {
    if (low >= high) return 0;

    let mid = Math.floor((low + high) / 2);

    let cnt = 0;

    cnt += mergeSort(nums, low, mid);
    cnt += mergeSort(nums, mid + 1, high);
    cnt += merge(nums, low, mid, high);

    return cnt;
}




class Solution {
    numberOfInversions(nums) {
         return mergeSort(nums, 0, nums.length - 1);
   }
}
