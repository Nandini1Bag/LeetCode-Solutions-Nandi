

function removeDuplicatedfromSortedarray(arr){
  
    if(arr.length===0) return 0;
    let uniqueindex=1;
    for(let i=1;i<arr.length;i++){

    if(arr[i]!==arr[i-1]){
      
        arr[uniqueindex]=arr[i];
        uniqueindex++;
    }
    }
    return uniqueindex;
}

const sortedArray = [1, 1, 2, 3, 3, 4, 5, 5, 6];
const newlength=removeDuplicatedfromSortedarray(sortedArray);
console.log(newlength);
console.log(`After removing duplicates: [${sortedArray.slice(0,newlength).join(",")}]`);