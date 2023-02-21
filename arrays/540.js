/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  let l = 0,
      r = nums.length - 1

  while (l <= r) {
    const mid = Math.trunc((l + r) / 2)

    if (mid % 2 && nums[mid] === nums[mid - 1] || !(mid % 2) && nums[mid] === nums[mid + 1]) {
      l = mid + 1
      continue
    }

    if(!(mid % 2) && nums[mid] !== nums[mid + 1] || mid % 2 && nums[mid] !== nums[mid - 1]) {
      r = mid - 1
      continue
    }
  }

  return nums[l]
}

console.log(singleNonDuplicate([1]))
