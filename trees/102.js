function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const levels = []

  const getLevels = (node, level) => {
    if(!node) {
      return
    }

    levels[level] = levels[level] ? [ ... levels[level], node.val ] : [ node.val ]

    getLevels(node.left, level + 1)
    getLevels(node.right, level + 1)
  }

  getLevels(root, 0)

  return levels
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

console.log(levelOrder(ArrayToTree([3,9,20,null,null,15,7])))
