function moveZerosToEnd(arr) {
    let count = 0; // Count of non-zero elements

    // Traverse the array and move non-zero elements to the front
    for (let num of arr) {
        if (num !== 0) {
            arr[count++] = num; // Place non-zero elements in order
        }
    }

    // Fill the remaining positions with zeros
    while (count < arr.length) {
        arr[count++] = 0;
    }

    return arr;
}

// Example usage
const arr = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(arr);
console.log(result); // Output: [1, 3, 12, 0, 0]
