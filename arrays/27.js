/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (val > 50) {
    return nums.length
  }

  let p = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[p] = nums[i]
      p++
    }
  }

  return p
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))
