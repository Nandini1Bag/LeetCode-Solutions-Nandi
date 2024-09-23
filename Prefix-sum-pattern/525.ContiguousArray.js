//525.Given a binary array nums, return the maximum length of a 
// contiguous subarray with an equal number of 0 and 1.
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
//solution:- see https://www.youtube.com/watch?v=9ZyLjjk536U

const findMaxLength=(nums)=>{
    const map=new Map();
    map.set(0,-1);// Initialize for handling subarrays starting at index 0
    let maxLength=0;
    let count=0;// This will track the cumulative sum

    for(let i=0;i<nums.length;i++){
    // Convert 0 to -1
    count +=(nums[i]===1)? 1 : -1;

   // Check if this cumulative count has been seen before
   if(map.has(count)){
    // Calculate length of the subarray
    maxLength = Math.max(maxLength, i - map.get(count));
   }else{
    // Store the first occurrence of this cumulative sum
    map.set(count, i);
   }
  }
  return maxLength;
}

//Example usage:
const nums = [0, 1, 0, 1, 1, 0];
console.log(findMaxLength(nums)); // Output: 6