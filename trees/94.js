function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const result = []

  const traverse = root => {
    if (!root) {
      return root
    }

    if (root.left) {
      traverse(root.left)
    }

    result.push(root.val)

    if (root.right) {
      traverse(root.right)
    }
  }

  traverse(root)

  return result
}

const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))
const root1 = new TreeNode(1,  null, new TreeNode(3, new TreeNode(2)))

console.log(inorderTraversal(root1))
