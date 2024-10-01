// Given a multi-dimensional array arr and a depth n,
// return a flattened version of that array.

// Please solve it without the built-in Array.flat method.

const flat=(arr,depth=1)=>{
 let result=[];
    for(let i=0;i<arr.length;i++){
      if (Array.isArray(arr[i]) && depth>0){
        const flattened=flat(arr[i],depth-1);
        for (item of flattened){
           result.push(item);
        }
      }else{
        result.push(arr[i]);
      }  
    }
    return result;
}

const multiDimArray = [1, [2, [3, 4]], 5, [[6]]];
console.log(flat(multiDimArray, 2));