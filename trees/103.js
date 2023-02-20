function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  const result = []
  let direction = false

  const t = (node, level) => {
    direction = level & 1

    if (!node) {
      return
    }

    result[level] = result[level] ? (direction ? [ node.val, ...result[level]] : [ ...result[level], node.val]) : [ node.val ]

    level ++

    t(node.left, level)
    t(node.right, level)
  }

  t(root, 0)

  return result
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))

console.log(zigzagLevelOrder(root))
