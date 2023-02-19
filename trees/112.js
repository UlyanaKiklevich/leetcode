function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSumMy = function(root, targetSum) {
  let sums = []

  const calculate = (root, sum) => {
    if (!root) {
      return
    }

    if (!root.left && !root.right) {
      sums.push(sum + root.val)
      return
    }

    sum += root.val

    calculate(root.left, sum)
    calculate(root.right, sum)
  }

  calculate(root, 0)

  return sums.includes(targetSum)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  if(!root) {
    return false
  }

  if (!root.left && !root.right) {
    return targetSum === root.val
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

console.log(hasPathSum(root, 10))
