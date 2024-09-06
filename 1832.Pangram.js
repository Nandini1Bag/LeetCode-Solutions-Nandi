// 1832. Check if the Sentence Is Pangram
// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true 
// if sentence is a pangram, or false otherwise.

// Example 1:
// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.


function isPangram(str) {

const lowerstr=str.toLowerCase();

const letterset=new Set();

for(const char of lowerstr){
    // Check if the character is a letter
  if(char>='a'&& char<='z'){
    letterset.add(char);
  }
}
return letterset.size===26;
}

const sentence = "the quick brown fox jumps over the lazydog";
console.log(isPangram(sentence)); // Output: true