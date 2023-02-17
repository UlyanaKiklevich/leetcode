/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let xy = 0
  for (let i = 0; i < nums.length; i++) {
    xy ^= nums[i]
  }

  return xy
}

console.log(singleNumber([2,2,1]))
