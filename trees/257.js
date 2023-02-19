function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const paths = []
  const t = (node, path, pathLen) => {
    if (!node) {
      return
    }

    path[pathLen] = node.val
    pathLen++

    if (!node.right && !node.left) {
      let r = ''
      for(let i = 0; i < pathLen; i++) {
        if (r) {
          r += '->'
        }
        r += path[i]
      }
      paths.push(r)
    } else {
      t(node.right, path, pathLen)
      t(node.left, path, pathLen)
    }
  }

  t(root, [], 0)

  return paths
}

const root1 = new TreeNode(1, new TreeNode(-2, new TreeNode(1, new TreeNode(-1)), new TreeNode(3)), new TreeNode(-3, new TreeNode(-2), null))
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)))

console.log(binaryTreePaths(root2))
