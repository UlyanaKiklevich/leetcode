function ListNode(val, next) {
  this.val = (val === undefined ? null : val)
  this.next = (next === undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0])
  if (nums.length === 0) return null

  let centerIdx = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[centerIdx])

  let leftSubtree = nums.slice(0, centerIdx)
  root.left = sortedArrayToBST(leftSubtree)

  let rightSubtree = nums.slice(centerIdx + 1, nums.length)
  root.right = sortedArrayToBST(rightSubtree)

  return root
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  if (!head || head.val === null) return null

  const values = [head.val]
  head = head.next

  while (head) {
    values.push(head.val)
    head = head.next
  }

  return sortedArrayToBST(values)
}

/**
 * @param {number[]} arr
 * @return {ListNode}
 */
function createListFromArray(arr) {
  let list = new ListNode(arr[0])
  let current = list
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return list
}

console.log(sortedListToBST(new ListNode()))
console.log(sortedListToBST(new ListNode(0)))
console.log(sortedListToBST(createListFromArray([0, 1, 2, 3, 4, 5])))
