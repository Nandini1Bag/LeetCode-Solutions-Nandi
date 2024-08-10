// Write a recursive function to calculate the height of a binary tree in JavaScript. 

class TreeNode{
    constructor(value){
        this.value= value;
        this.left=null;
        this.right=null;
    }
}

const findHeight=(root)=>{

    if(root===null){return 0};

    let leftHeight=findHeight(root.left);
    let rightHeight=findHeight(root.right);

   return  Math.max(leftHeight,rightHeight)+1;// Add 1 for the current node
}


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Height of the binary tree:", findHeight(root)); // Output: 3
