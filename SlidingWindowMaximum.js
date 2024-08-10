function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // This will store indices of the elements in nums

    for (let i = 0; i < nums.length; i++) {
        // Remove elements that are out of this window
        if (deque.length && deque[0] < i - k + 1) {
            deque.shift(); // Remove the element from the front
        }

        // Remove elements that are less than the current element
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop(); // Remove from the back
        }

        // Add current element's index to the deque
        deque.push(i);

        // The first element in the deque is the largest element for the current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maxSlidingWindow(nums, k)); // Output: [3, 3, 5, 5, 6, 7]