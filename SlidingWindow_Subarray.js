//Leetcode - 713. Subarray Product Less Than K
// Write a function to find the number of subarrays with products less than K

function countSubArrayProductLessThanK(nums, K) {
    if (K <= 1) return 0; // No valid product can be less than K if K is 1 or less

    let product = 1;
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]; // Expand the window by including nums[right]

        // Shrink the window from the left until the product is less than K
        while (product >= K) {
            product /= nums[left];
            left++;
        }

        // All subarrays ending at 'right' with products less than K
        count += right - left + 1;
    }

    return count;
}

// Example usage
const nums = [10, 5, 2, 6];
const K = 100;
console.log(countSubArrayProductLessThanK(nums, K)); // Output: 8

console.log(countSubArrayProductLessThanK([1, 2, 3, 4], 10));// Output: 7