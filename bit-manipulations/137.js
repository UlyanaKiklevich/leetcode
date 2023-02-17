/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let xy = 0
  for (let i = 0; i < nums.length; i++) {
    xy ^= nums[i]
  }
}

console.log(singleNumber([0,1,0,1,0,1,99]))
