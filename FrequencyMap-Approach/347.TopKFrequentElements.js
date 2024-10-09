// Given an integer array nums and an integer k, return the k most frequent elements. 
//You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

//Solution is combination of a frequency map and a bucket sort approach,
const getMostFrequentElements=(nums,k)=>{
// Step 1: Build the frequency map
    const frequencyMap={};
    for(const num of nums){
        frequencyMap[num]=(frequencyMap[num]||0)+1;
    }
   // Step 2: Create buckets for frequencies
   const buckets = Array.from({ length: nums.length + 1 }, () => []);
   for (const [num, freq] of Object.entries(frequencyMap)) {
       buckets[freq].push(parseInt(num));
   }
    // Step 3: Gather the top k elements from the buckets
    const result = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        if (buckets[i].length > 0) {
            for (const num of buckets[i]) {
                result.push(num);
                if (result.length === k) {
                    return result; // Return early when we have k elements
                }
            }
        }
    }

    return result; // Fallback in case of less than k unique elements
}
const  nums = [1,1,1,2,2,3];
const k = 2;
console.log(getMostFrequentElements(nums,k));
const nums2 = [1];
const k2 = 1;
console.log(getMostFrequentElements(nums2, k2)); // Output: [1]