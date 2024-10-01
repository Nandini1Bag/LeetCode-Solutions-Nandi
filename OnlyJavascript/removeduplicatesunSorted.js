

function removeDuplicatesfromUnsorted(arr){

    if(arr.length===0)return 0;
    let uniqueindex=0;
    let uniqueElements=new Set();
    for(let i=0;i<arr.length;i++){

        if(!uniqueElements.has(arr[i])){
             // Add it to the Set
            uniqueElements.add(arr[i]);
             // Place the unique element at the uniqueIndex position
            arr[uniqueindex]=arr[i];
            uniqueindex++;

        }
    }
return uniqueindex;
}

// Example usage:
const unsortedArray = [4, 5, 6, 4, 5, 2, 1, 3, 2];
const newLength = removeDuplicatesfromUnsorted(unsortedArray);
console.log("New length:", newLength); // Output: 6
console.log(`array after removing duplicates[${unsortedArray.slice(0,newLength)}]`);
//array after removing duplicates[4,5,6,2,1,3]