
function minGoodSubstrings(str,k){

    if(!str) return 0;
    //sort the str
  let sortedstr=  str.split("").sort().join("");
  let groupStart=sortedstr.charCodeAt(0);
  let count=1;

  for(let i=1;i<sortedstr.length;i++){
    if(Math.abs(sortedstr.charCodeAt(i)-groupStart)>k){
          count++;
          groupStart=sortedstr.charCodeAt(i);
    }
  }

  return count;
}

console.log(minGoodSubstrings('acbde',2));