

function countSubArrayProductLessThanK(nums,k){

    if (k<=1) return 0;

    let left=0;
    let product=1;
    let count=0;

    for(let right=0;right<nums.length;right++){
       
       product*=nums[right];
      // Shrink the window from the left until the product is less than K  
       while(product>=k){
         product/=nums[left];
         left++;
       }
    // All subarrays ending at 'right' with products less than K
    count+=right-left+1;
       
    }

    return count;
}

const nums = [10, 5, 2, 6];
const K = 100;
console.log(countSubArrayProductLessThanK(nums, K)); // Output: 8

console.log(countSubArrayProductLessThanK([1, 2, 3, 4], 10));// Output: 7