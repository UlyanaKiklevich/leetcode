function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function(root) {
  const diff = []
  const t = (root) => {
    if (root) {
      if (root.left?.val) {
        diff.push(Math.abs(root.val - root.left?.val))
      }
      if (root.right?.val) {
        diff.push(Math.abs(root.val - root.right?.val))
      }
      t(root.left)
      t(root.right)
    }
  }

  t(root)

  return Math.min(...diff)
}

/*const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))*/
const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

console.log(minDiffInBST(root))
