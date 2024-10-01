// 2. You are given an array of integers, arr = [1,2,3]. It represents a number, n = 123. Your  
// task is to return a new array after doing n + 1. It's guaranteed not to have any leading  
// zeros. 
// • arr = [1,2,9] should be converted to [1,3,0] 
// • arr = [9,9,9] should be converted to [1,0,0,0] 

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        // Increment the last digit
        if (digits[i] < 9) {
            digits[i]++;
            return digits; // No carry, return the updated array
        }
        // If it's 9, set it to 0 and carry over to the next digit
        digits[i] = 0;
    }
    
    // If we exit the loop, it means we had a carry at the most significant digit
    return [1, ...digits]; // Add 1 in front of the array
}

// Example usage:
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9])); // Output: [1, 0]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); 
//output:[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
