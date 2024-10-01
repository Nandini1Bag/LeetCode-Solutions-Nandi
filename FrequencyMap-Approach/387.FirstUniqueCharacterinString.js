//387.Given a string s, find the first non-repeating character in it and return its index. 
//If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1

const findFirstUniqueChar=(str)=>{
    let charCount={};
    for(let i=0;i<str.length;i++){
     let char=str[i];
     charCount[char]=(charCount[char]||0)+1;
    }
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(charCount[char]===1){
            return i;
        }
    }

    return -1;
}

console.log(findFirstUniqueChar('leetcode'));
console.log(findFirstUniqueChar('loveleetcode'));
console.log(findFirstUniqueChar('aabb'));