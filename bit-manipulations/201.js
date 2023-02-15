/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function(left, right) {
  let result = left
  for (let i = left + 1; i <= right; i++) {
    if (result === 0) {
      return 0
    }
    result &= i
  }

  return result
}

console.log(rangeBitwiseAnd(5, 7))
console.log(rangeBitwiseAnd(0, 0))
console.log(rangeBitwiseAnd(1, 2147483647))
