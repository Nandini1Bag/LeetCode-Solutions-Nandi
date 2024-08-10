
// Javascript program to find 
// the most frequent element 
// in an array. 
  
function mostFrequent(arr, n) 
{ 
    // Insert all elements in hash. 
    var hash = new Map(); 
    for (var i = 0; i < n; i++) 
    { 
        if(hash.has(arr[i])) 
            hash.set(arr[i], hash.get(arr[i])+1) 
        else
            hash.set(arr[i], 1) 
    } 
  
    // find the max frequency 
    var max_count = 0, res = -1; 
    hash.forEach((value,key) => { 
          
        if (max_count < value) { 
            res = key; 
            max_count = value; 
        } 
  
    }); 
  
    return res; 
} 
  
// driver program 
var arr = [40,50,30,40,50,30,30]; 
var n = arr.length; 
console.log( mostFrequent(arr, n)); 