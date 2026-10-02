// Given two sorted arrays, nums1 and nums2, return an array containing the intersection of these two arrays. Each element in the result must appear as many times as it appears in both arrays; that is, if an element appears x times in nums1 and y times in nums2, it should appear min(x, y) times in the result.

// The intersection of two arrays is an array where all values are present in both arrays.

// Example 1:
// Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]

// Output: [1, 2]

// Explanation:

// The elements 1, 2 are the only elements present in both nums1 and nums2

// Example 2:
// Input: nums1 = [1, 2, 2, 3, 3, 3], nums2 = [2, 3, 3, 4, 5, 7]

// Output: [2, 3, 3]

// Explanation:

// The element 2 appears in both arrays only one time.

// The element 3 appears in both arrays two times so we add element 3 equal to its number of occurrences.


var solution =(nums1,nums2)=>{
    let i=0;
    let j=0;
    let ans=[]
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] <nums2[j]){
            i++;
        }
        else if(nums2[j]<nums1[i]){
            j++;
        }
        else{
            ans.push(nums1[i])
            i++;
            j++;
        }
    }
    return ans
}
console.log(solution([1,2,2,3,5],[1,2,7]))


// another if the solution doesnt want duplicate elements 

var solution2= (nums1,nums2)=>{
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] < nums2[j]) {
            i++;
        }
        else if (nums2[j] < nums1[i]) {
            j++;
        }
        else {
            if (ans.length === 0 || ans[ans.length - 1] !== nums1[i]) {
                ans.push(nums1[i]);
            }

            i++;
            j++;
        }
    }

    return ans;
}
console.log(solution2([1,2,2,3,5],[1,2,7]))