//Str="J A V A S C R I P T"
//combine these words without spaces and without using inbuilt function.

let Str = "J A V A S C R I P T";
let combinedStr = "";

// Iterate through each character in the string
for (let i = 0; i < Str.length; i++) {
    // If the character is not a space, add it to the combined string
    if (Str[i] !== ' ') {
        combinedStr += Str[i];
    }
}

console.log(combinedStr); // Outputs: JAVASCRIPT
