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

    path[pathLen] = node
    pathLen++

    if (!node.right && !node.left) {
      let r = ''
      for(let i = 0; i < pathLen; i++) {
        if (r) {
          r += '->'
        }
        r += path[i].val
      }
      paths.push(r)
    } else {
      t(node.right, path, pathLen)
      t(node.left, path, pathLen)
      t(node.right, [], 0)
      t(node.left, [], 0)
    }
  }

  t(root, [], 0)

  return paths
}

const ArrayToTree = (arr) => {
  if (arr.length === 0) return null
  const root = new TreeNode(arr[0])
  const queue = [root]
  let i = 1
  while (i < arr.length) {
    const node = queue.shift()
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    i++
    if (arr[i] !== null) {
      node.right = new TreeNode(arr[i])
      queue.push(node.right)
    }
    i++
  }
  return root
}

const root1 = new TreeNode(1, new TreeNode(-2, new TreeNode(1, new TreeNode(-1)), new TreeNode(3)), new TreeNode(-3, new TreeNode(-2), null))
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)))

console.log(binaryTreePaths(ArrayToTree([1,2,3,4,null,null,5,null,null,6,7])))
