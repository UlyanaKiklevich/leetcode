function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */


const findDuplicateSubtrees = function(root) {
  const map = new Map(),
        unique = []

  const preOrderTravers = (root, callback) => {
    if (root) {
      callback(root);
      preOrderTravers(root.left, callback);
      preOrderTravers(root.right, callback);
    }
  }

  preOrderTravers(root, (node) => {
    const str = JSON.stringify(node)

    const inMap = map.get(str)
    if (inMap && inMap !== node) {
      unique.push(node)
      map.set(str, null)
      return
    }

    if (!map.has(str)) {
      map.set(str, node)
    }
  })

  return unique
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

let root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4)))
let root1 = new TreeNode(2, new TreeNode(1), new TreeNode(1))

console.log(findDuplicateSubtrees(ArrayToTree([0,0,0,0,null,null,0,null,null,0,0])))
console.log(findDuplicateSubtrees(root))
console.log(findDuplicateSubtrees(root1))
