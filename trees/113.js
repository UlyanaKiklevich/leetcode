function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSumMy = function(root, targetSum) {
  const results = []

  /*const t = (root, targetSum) => {
    if (!root) {
      return false
    }

    if (!root.left && !root.right) {
      return targetSum === root.val
    }

    return t(root.left, targetSum - root.val) || t(root.right, targetSum - root.val)
  }

  t(root, targetSum)
  */
  return results
}

const pathSum = (node, targetValue) => {
  const paths = []

  const t = (node, path, pathLen, targetValue) => {
    if (!node) {
      return
    }

    path[pathLen] = node.val
    pathLen++

    if (!node.left && !node.right && targetValue - node.val === 0) {
      const r = []
      for(let i = 0; i < pathLen; i++) {
        r.push(path[i])
      }
      paths.push(r)
    } else {
      t(node.left, path, pathLen, targetValue - node.val)
      t(node.right, path, pathLen, targetValue - node.val)
    }
  }

  t(node, [], 0, targetValue)

  return paths
}

const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

const root1 = new TreeNode(1, new TreeNode(-2, new TreeNode(1, new TreeNode(-1)), new TreeNode(3)), new TreeNode(-3, new TreeNode(-2), null))

/*console.log(pathSum(root, 11))*/
console.log(pathSum(root1, 2))
