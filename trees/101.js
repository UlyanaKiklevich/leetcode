function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if(!root) {
    return true
  }

  const isMirror = (p, q) => {
    if(!p && !q) {
      return true
    }
    if(!p || !q) {
      return false
    }

    return ( p.val === q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left)
  }

  return isMirror(root.left,root.right);
}

const root = new TreeNode(4, new TreeNode(6), new TreeNode(2, new TreeNode(1), new TreeNode(3)))
const root1 = new TreeNode(1, new TreeNode(3, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(2)), new TreeNode(2, new TreeNode(2)))
const root3 = new TreeNode(5, new TreeNode(4, null, new TreeNode(1, new TreeNode(2))), new TreeNode(1, null, new TreeNode(4, new TreeNode(2))))

console.log(isSymmetric(root1))
