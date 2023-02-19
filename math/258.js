function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  if (num < 10) {
    return num
  }

  let result = 0
  while (num > 0) {
    result += num % 10
    num = Math.trunc(num / 10)
  }

  return addDigits(result)
}

console.log(addDigits(1295))
