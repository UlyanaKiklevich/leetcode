function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function(root) {
  let r = 0

  const getPaths = (node, path, pathLen) => {
    if (!node) {
      return
    }

    path[pathLen] = node.val
    pathLen++

    if (!node.left && !node.right) {
      let sum = 0
      for(let i = 0; i < pathLen; i++) {
        sum *= 10
        sum += path[i]
      }

      r += sum
    } else {
      getPaths(node.left, path, pathLen)
      getPaths(node.right, path, pathLen)
    }
  }

  getPaths(root, [], 0)

  return r
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

console.log(sumNumbers(ArrayToTree([4, 9, 0, 5, 1])))
console.log(sumNumbers(ArrayToTree([1,2,3])))
