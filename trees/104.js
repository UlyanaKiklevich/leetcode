function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (root === null) {
    return 0
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

/*console.log(maxDepth(root))*/

const preOrderTravers = (root, callback) => {
  if (root) {
    callback(root);
    preOrderTravers(root.left, callback);
    preOrderTravers(root.right, callback);
  }
}


const printNode = (current) => {
  console.log(current.val);
}

console.log(preOrderTravers(root, printNode))
