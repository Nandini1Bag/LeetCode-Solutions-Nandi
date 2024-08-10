//: find all the numbers of k length whose first half sum equals second half sum example 00 11 22 
//5445 
function findEqualSumNumbers(k) {
    const results = [];

    // Handle even lengths only
    if (k % 2 !== 0) {
        console.log("k must be an even number.");
        return results; // Return empty if k is odd
    }

    // Define the range based on the length k
    const start = Math.pow(10, k - 1); // The smallest k-digit number
    const end = Math.pow(10, k) - 1; // The largest k-digit number

    // Loop through each number in the range
    for (let num = start; num <= end; num++) {
        const strNum = num.toString(); // Convert the number to a string
        const halfLength = k / 2; // Determine half length

        // Split the number into two halves
        const firstHalf = strNum.slice(0, halfLength);
        const secondHalf = strNum.slice(halfLength);

        // Calculate the sum of each half
        const firstSum = Array.from(firstHalf).reduce((sum, digit) => sum + Number(digit), 0);
        const secondSum = Array.from(secondHalf).reduce((sum, digit) => sum + Number(digit), 0);

        // Check if the sums are equal
        if (firstSum === secondSum) {
            results.push(strNum); // Store the result as a string
        }
    }

    return results;
}

// Example usage:
const k = 4; // Length of the number
const equalSumNumbers = findEqualSumNumbers(k);
console.log(equalSumNumbers); // Output: All k-length numbers with equal half sums