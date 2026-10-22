









//BRUTE FORCE SOLUTION 
var merge = function(arr1, arr2, n, m) {
    let arr3 = new Array(n + m);

    let left = 0;
    let right = 0;
    let index = 0;

    // Merge both sorted arrays
    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++;
            index++;
        } else {
            arr3[index] = arr2[right];
            right++;
            index++;
        }
    }

    // Copy remaining elements from arr1
    while (left < n) {
        arr3[index++] = arr1[left++];
    }

    // Copy remaining elements from arr2
    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    // Copy merged elements back into original arrays
    for (let i = 0; i < n + m; i++) {
        if (i < n) {
            arr1[i] = arr3[i];
        } else {
            arr2[i - n] = arr3[i];
        }
    }

    return arr3;
};
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7, 8, 9];

console.log(merge(arr1, arr2, arr1.length, arr2.length));


//OPTIMAL SOLUTION 1


var merge2 = function(arr3, arr4, n, m) {
    let left = n - 1;
    let right = 0;

    while (left >= 0 && right < m) {
        if (arr3[left] > arr4[right]) {
            [arr3[left], arr4[right]] = [arr4[right], arr3[left]];
            left--;
            right++;
        } else {
            break;
        }
    }

    arr3.sort((a, b) => a - b);
    arr4.sort((a, b) => a - b);
};

let arr3 = [1, 4, 8, 10];
let arr4 = [2, 3, 9];

merge2(arr3, arr4, arr3.length, arr4.length);

console.log(arr3); // [1, 2, 3, 4]
console.log(arr4); // [8, 9, 10]

//OPTIMAL SOLUTION 2

var merge3 = function(nums1 , m , nums2 , n){
    function swapIfGreater(arr1, arr2, ind1, ind2) {
            if (arr1[ind1] > arr2[ind2]) {
                [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
            }
    }

        let len = m + n;
        let gap = Math.ceil(len / 2);

        while (gap > 0) {
            let left = 0;
            let right = left + gap;

            while (right < len) {
                if (left < m && right >= m) {
                    swapIfGreater(nums1, nums2, left, right - m);
                } else if (left >= m) {
                    swapIfGreater(nums2, nums2, left - m, right - m);
                } else {
                    swapIfGreater(nums1, nums1, left, right);
                }

                left++;
                right++;
            }

            if (gap === 1) break;

            gap = Math.ceil(gap / 2);
        }

        // Copy nums2's elements into nums1's unused positions
        for (let i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }

        nums1.sort((a, b) => a - b);
}

let nums1=[1,2,3,4]
let nums2=[5,6,7,8]
console.log(merge3(nums1,4,nums2,4))



