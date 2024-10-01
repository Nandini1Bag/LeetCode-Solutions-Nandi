//Write a function that reverses a string. 
//The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
//1)Solution:-Two Pointer approach
const ReverseString=(arr)=>{
let left=0;
let right=arr.length-1;
let temp='';
while(left<right){
 temp=arr[right];
 arr[right]=arr[left];
 arr[left]=temp;
 left++;
 right--;
}
return arr;
}
console.log(ReverseString([1,2,3,4,5]));
//2. Using Brute force approach
//We will loop through the half of the elements of the given array.
//And then we will swap the element at the first place with last place, 
//second place with second last place and so on.
//We will use array destructuring for swapping the elements
let reverseArray = (arr) => {
    for(let i = 0; i < arr.length / 2; i++){
       //Swap the elements
       [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
  
  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));