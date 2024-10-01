//: leetcode-560 -find all the numbers of k length whose first half sum 
//equals second half sum example 00 11 22 
//5445 
function subarraySum(nums, k) {
    const sumCount = new Map(); // To store cumulative sums and their counts
    sumCount.set(0, 1); // Base case: a sum of 0 occurs once (no elements)  
    let currentSum = 0; // Cumulative sum
    let count = 0; // Count of subarrays that sum to k

    for (let num of nums) {
        currentSum += num; //Update the cumulative sum
        // Check if there is a cumulative sum that equals currentSum - k
        if (sumCount.has(currentSum - k)) {
            count += sumCount.get(currentSum - k); // Increment count by occurrences of (currentSum - k)
        }
        // Update the map with the current cumulative sum
        sumCount.set(currentSum, (sumCount.get(currentSum) || 0) + 1);
    }
    return count; // Return the total count of subarrays that sum to k
}

// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([-1, -1, 1], 0)); // Output: 1

