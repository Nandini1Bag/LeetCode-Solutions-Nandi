function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    const extendedHeights = [...heights, 0]; // Add a sentinel value

    for (let i = 0; i < extendedHeights.length; i++) {
        while (stack.length && extendedHeights[i] < extendedHeights[stack[stack.length - 1]]) {
            const height = extendedHeights[stack.pop()];
            const width = stack.length ? i - stack[stack.length - 1] - 1 : i; // Determine width
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
}

// Example usage
const histogram = [2, 1, 5, 6, 2, 3];
const result = largestRectangleArea(histogram);
console.log(result); // Output: 10
