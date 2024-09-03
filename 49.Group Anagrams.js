// Given an array of strings strs, group the anagrams together. 
//You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of 
//a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:Input: strs = [""]  Output: [[""]]
// Example 3:Input: strs = ["a"] Output: [["a"]]

function groupAnagrams(words) {
    const anagramGroups = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        // If the key doesn't exist in the object, create an empty array
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }
        
        // Push the original word into the correct array
        anagramGroups[sortedWord].push(word);
    }
     // Return the values of the object as an array of arrays
     return Object.values(anagramGroups);
}

// Example usage:
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const groupedAnagrams = groupAnagrams(words);

console.log(groupedAnagrams);