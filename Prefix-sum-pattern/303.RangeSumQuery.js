//  Example 1:Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]
// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

//To achieve the best time complexity for the "Range Sum Query - Immutable" problem (LeetCode 303),
// you should use a prefix sum array. This allows you to compute range sums in constant time 
//𝑂(1) after an initial setup time of 𝑂(𝑛).

const  createNumArray=(nums)=>{

    const prefixSum = new Array(nums.length + 1);
    prefixSum[0] = 0;

   // Build the prefix sum array
   for (let i = 1; i <= nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }
   return function sumRange(left ,right){
     // Calculate sum using the prefix sum array
     return prefixSum[right + 1] - prefixSum[left];
   }
    
}
// Example usage:
const nums = [-2, 0, 3, -5, 2, -1];
const sumRange = createNumArray(nums);
console.log(sumRange(0, 2)); // Output: 1
console.log(sumRange(2, 5)); // Output: -1
console.log(sumRange(0, 5)); // Output: -3