function largestOddNumber(s) {
    let largestOdd = ""; // Initialize an empty string to store the largest odd number

    // Iterate through the string from the end to find the largest odd number
    for (let i = s.length - 1; i >= 0; i--) {
        // Check if the current character is an odd digit
        if (s[i] % 2 === 1) {
            // If an odd digit is found, slice the string up to the current index + 1
            largestOdd = s.slice(0, i + 1);
            break; // Exit the loop since we found the largest odd number
        }
    }

    return largestOdd || "No odd number found"; // Return the largest odd number or a message
}

// Example usage
const input = "123456789";
const result = largestOddNumber(input);
console.log(result); // Output: "123456789"
