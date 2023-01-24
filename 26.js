/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  let p = 0

  for (let i = 1; i < nums.length; i ++) {
    if (nums[p] !== nums[i]) {
      nums[p + 1] = nums[i]
      p++
    }
  }

  return p + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
