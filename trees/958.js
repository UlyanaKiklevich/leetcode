function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isCompleteTree = function(root) {
  if (!root) return true

  let nullNodeFound = false
  const queue = [ root ]

  while (queue.length) {
    const node = queue.shift()

    if (node === null) {
      nullNodeFound = true
    } else {
      if (nullNodeFound) {
        return false
      }
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return true
}

const ArrayToTree = arr => {
  if (arr.length === 0) {
    return null
  }
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

console.log(isCompleteTree(ArrayToTree([1,2,3,4,5,6])))
console.log(isCompleteTree(ArrayToTree([1,2,3,4,5,null,7])))
