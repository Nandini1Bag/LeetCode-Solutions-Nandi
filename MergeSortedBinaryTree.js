// //Leetcode 617.Write a function to merge two sorted binary search trees. 

// class TreeNode{
//     constructor(value){
//         this.value= value;
//         this.left=null;
//         this.right=null;
//     }
// }
// const mergeTrees = (t1, t2) => {
//     //when there is null given tree
//     if(!t1 || !t2) return t1 || t2
  
//     //both of trees are not null,
//     //we sum the value, and transform t1,
//     //we can also choose t2, and return t2 at the end
//     t1.value += t2.value
    
//     //recursively traverse left path  
//     t1.left = mergeTrees(t1.left, t2.left)
//     //recursively traverse right path
//     t1.right = mergeTrees(t1.right, t2.right)
    
//     //return merged tree
//     return t1    
      
//   }
//   // Example usage
// const root1 = new TreeNode(2);
// root1.left = new TreeNode(1);
// root1.right = new TreeNode(3);

// const root2 = new TreeNode(4);
// root2.left = new TreeNode(3);
// root2.right = new TreeNode(5);

// // Merge the two BSTs
// const mergedBST = mergeTrees(root1, root2); //[1, 2, 3, 4, 5, 7].
// console.log(mergedBST);


