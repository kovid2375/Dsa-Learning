// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

// Example 1:
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

// Output: [1, 2, 3, 4, 5, 7]

// Explanation:

// The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// Example 2:
// Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

// Output: [1, 3, 4, 5, 6, 7, 8, 9]

// Explanation:

// The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2



var solution=(nums1,nums2)=>{
    let n1=nums1.length
    let n2=nums2.length
    let a=0
    let b=0
    let union=[]
    while(a<n1 && b<n2){
        if(nums1[a]<=nums2[b]){
            if(union.length == 0 || union[union.length-1]!==nums1[a]){
                union.push(nums1[a])
            }
            a++;
        }
        else {
             if(union.length == 0 || union[union.length-1]!==nums2[b]){
                union.push(nums2[b])
            }
            b++;
        }
    }
    while(b<n2){
        if(union.length == 0 || union[union.length-1]!==nums2[b]){
            union.push(nums2[b])
        }
        b++;
    }
    while(a<n1){
        if(union.length == 0 || union[union.length-1]!==nums1[a]){
            union.push(nums1[a])
        }
        a++;
    }
    return union;

}

console.log(solution([2,3,4,5], [1,2,7]))

