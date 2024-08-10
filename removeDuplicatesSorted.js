//Write a program to remove duplicates from a sorted array in place. 
const removeDuplicates=(arr)=>{

if (arr.length===0) return 0;
let uniqueindex=1;

for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
        arr[uniqueindex]=arr[i];
        uniqueindex++;
    }
}
return uniqueindex;
}

// Example Usage
const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 6];
const newLength = removeDuplicates(sortedArray);

console.log(`The number of unique elements is: ${newLength}`);// Output: 6
console.log(`Array after removing duplicates: [${sortedArray.slice(0, newLength).join(', ')}]`);
// Output: [1, 2, 3, 4, 5, 6]
