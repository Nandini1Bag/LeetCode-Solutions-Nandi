//242.Given two strings s and t, return true if t is an anagram
//  of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram =(s, t) =>{
      let str1=s.toLowerCase();
      let str2=t.toLowerCase();
      str1=str1.split("").sort().join("");
      str2=str2.split("").sort().join("");
      return str1===str2;   
};

console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));