class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function rightSideView(root) {
    const result = [];
    const dfs = (node, level) => {
        if (!node) return;

        // If this is the first time we've visited this level, add the node's value
        if (result.length === level) {
            result.push(node.value);
        }

        // First, go to the right child, then the left child
        dfs(node.right, level + 1);
        dfs(node.left, level + 1);
    };

    dfs(root, 0); // Start DFS with level 0
    return result;
}

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

const rightView = rightSideView(root);
console.log("Right Side View of the Binary Tree:", rightView); // Output: [1, 3, 4]