//Write Java code to count the number of nodes in a binary tree. 
class TreeNode{
    constructor (value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
const countNodes=(root)=>{
   
    if(root==null){return 0}
     let leftnodes=countNodes(root.left);
     let rightnodes=countNodes(root.right);
     return leftnodes+rightnodes+1;
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(countNodes(root)); // Output: 6