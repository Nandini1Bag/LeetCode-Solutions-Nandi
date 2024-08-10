class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
        }
}

function LeftView(root){
    const result=[];
    let maxLevelVisited=-1;

 function helperfun(node,level ){
    if (!node) return;

    if (level > maxLevelVisited)
    {   result.push(node.value);
        maxLevelVisited = level;
     }

    helperfun(node.left,level+1);
    helperfun(node.right,level+1);
 }

    helperfun(root,0);
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

console.log(LeftView(root)); // Output: [1, 2, 4, 7]