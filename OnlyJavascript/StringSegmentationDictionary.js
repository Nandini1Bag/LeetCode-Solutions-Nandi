function wordSegmentation(s, dictionary) {
    const n = s.length;
    const dp = Array(n + 1).fill(false);//boolean array
    const words = Array(n + 1).fill(null);
    dp[0] = true; // Base case: empty string can be segmented

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.slice(j, i);
            if (dp[j] && dictionary.has(word)) {
                dp[i] = true;
                words[i] = (words[j] ? words[j] + ' ' : '') + word; // Store the segmented words
                break; // No need to check further once found
            }
        }
    }

    return dp[n] ? words[n] : null; // Return the segmented string or null if not possible
}

// Example usage
const dictionary = new Set(['apple', 'pie', 'applepie', 'banana', 'cherry']);
const str = "applepiebanana";
const result = wordSegmentation(str, dictionary);
console.log(result); // Output: "apple pie banana"
