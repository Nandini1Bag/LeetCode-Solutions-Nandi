// 1. find the minimum number of substrings we can split a string into, considering the  
// following rules: 
// • The string only contains lowercase English letters. 
// • A substring is considered "good" if the absolute difference between the ASCII  
// • codes of any two characters within it is less than or equal to a given value k. 
// • In simpler terms, all characters in a good substring should be "close" in their  
// • ASCII values. 
// • We need to minimize the number of good substrings required to cover the entire  
// • original string. 

const minGoodSubstrings=(s,k)=>{

    if (!s) return 0; 
     //Sort the string
     const sortedS = s.split("").sort().join("");
     let count=1;
     let groupStart=sortedS.charCodeAt(0);

   for (let i=1;i<sortedS.length;i++){
    if(Math.abs(sortedS.charCodeAt(i)- groupStart)>k){
        count++;
        groupStart=sortedS.charCodeAt(i);//Update group start
    }
   } 
   return count; // Return the total count of good substrings
}

// Example Usage
const s = "abcde";
const k = 2;
console.log(minGoodSubstrings(s, k));

// Example: For the input string "abcde" and 𝑘=2

// The substrings would be "abc", "de" because:

// "abc": min=97 (a), max=99 (c) -> max - min = 2 ≤ 2
// "de": min=100 (d), max=101 (e) -> max - min = 1 ≤ 2

// Thus, the output would be 2 substrings in this case.