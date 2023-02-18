function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBSTMy = function (root) {
  const diff = []
  const t = (root) => {
    if (root) {

      t(root.left)
      console.log(root.val)
      if (root.left) {
        diff.push(Math.abs(root.val - root.left.val))
      }
      if (root.right) {
        diff.push(Math.abs(root.val - root.right.val))
      }

      t(root.right)
    }
  }

  t(root)

  console.log(diff)

  return Math.min(...diff)
}
/*
  **
  * @param {TreeNode} root
  * @return {number}
  */
const minDiffInBST = function (root) {
  let res = 100000, pre = -1

  const t = (root) => {
    if (root.left) {
      t(root.left)
    }
    if (pre >= 0) {
      res = Math.min(res, root.val - pre)
    }

    pre = root.val

    if (root.right) {
      t(root.right)
    }
  }

  t(root)

  return res
}

/*const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))*/
const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))

const root1 = new TreeNode(90, new TreeNode(69, new TreeNode(49, undefined, new TreeNode(52)), new TreeNode(89)))

console.log(minDiffInBST(root1))
