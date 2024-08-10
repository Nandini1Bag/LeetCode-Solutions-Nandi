class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function leftView(root) {
    // Initializes an empty array result to store the left view 
    const result = [];
    //Defines a recursive helper function dfs that takes a node and its level as parameters.
    function dfs(node, level) {
        // Base case: if the node is null, return
        if (!node) return;

         // If this is the first time we've visited this level, add the node's value
         if (result.length === level) {
            result.push(node.value);
        }
        // First recurse for the left subtree, then the right subtree
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0); // Start DFS with level 0
    return result;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);

console.log(leftView(root)); // Output: [1, 2, 4, 7]