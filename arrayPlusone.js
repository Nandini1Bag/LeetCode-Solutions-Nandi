// 2. You are given an array of integers, arr = [1,2,3]. It represents a number, n = 123. Your  
// task is to return a new array after doing n + 1. It's guaranteed not to have any leading  
// zeros. 
// • arr = [1,2,9] should be converted to [1,3,0] 
// • arr = [9,9,9] should be converted to [1,0,0,0] 

const plusOne=(arr)=>{

     let number=parseInt(arr.join(''),10);
     number+=1;
    return Array.from(String(number),Number)
}

const arr1 = [1, 2, 9];
const result1 = plusOne(arr1);
console.log(result1); // Output: [1, 3, 0]

const arr2 = [9, 9, 9];
const result2 = plusOne(arr2);
console.log(result2); // Output: [1, 0, 0, 0]