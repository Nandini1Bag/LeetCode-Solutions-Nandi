
function containsNearbyDuplicate(nums,k){

 let indexmap= new Map();

 for(let i=0;i<nums.length;i++){

    if(indexmap.has(nums[i])){
      
         // Get the last index of the current element
         let lastindex=indexmap.get(nums[i]);
        // Check if the distance between the current index and last index is within k    
        if(i-lastindex<= k){
            return true;// Found duplicates within the specified distance
        }
    }
      // Update the last index of the current element
    indexmap.set(nums[i],i);
 }
 return false; // No duplicates found within the specified distance
}


// Example usage:
const nums = [1, 2, 3, 1];
const k = 3;
console.log(containsNearbyDuplicate(nums, k)); // Output: true

const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2)); // Output: true

const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;
console.log(containsNearbyDuplicate(nums3, k3)); // Output: false