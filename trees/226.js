function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) {
    return root
  }

  let tmp = root.left
  root.left = root.right
  root.right = tmp

  invertTree(root.left)
  invertTree(root.right)

  return root
}

const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

console.log(invertTree(root))
