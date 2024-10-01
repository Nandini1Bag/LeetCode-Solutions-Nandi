//Q)find the indexes of the same objects in
//two arrays of objects in JavaScript

const array1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const array2 = [
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  
  const findMatchingIndexes=(array1,array2)=>{
  const matchingindexes=[];
    array1.forEach((item1,index1) => {
        
        array2.forEach((item2,index2)=>{

            if(item1.id===item2.id){
                matchingindexes.push({arr1Index:index1,arr2Index:index2});
            }
        })
    });
    return matchingindexes;
  }

  const result=findMatchingIndexes(array1,array2);
  console.log(result);