function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  }

  if (!p || !q) {
    return false
  }

  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  return false
}

const root1 = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))
const root2 = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

console.log(isSameTree(root1, root2))

