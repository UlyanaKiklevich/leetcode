/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0,
      r = nums.length - 1

  while(r >= l) {
    let currentHalf = Math.round((l + r) / 2)

    if (target === nums[currentHalf]) {
      return currentHalf
    } else if (target < nums[currentHalf]) {
      r = currentHalf - 1
    } else {
      l = currentHalf + 1
    }
  }

  return l
}

console.log(searchInsert([1,3,5,6], 2))
