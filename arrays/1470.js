/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  let j = n

  for (let i = 0; i < n; i++) {
    const number = nums[j]

    for (let k = j; k >= i + 1 + j - n; k--) {
      nums[k] = nums[ k - 1]
    }

    nums[i + 1 + j - n] = number
    j++
  }

  return nums
}

console.log(shuffle([2,5,1,3,4,7], 3))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))
console.log(shuffle([1,1,2,2], 2))
