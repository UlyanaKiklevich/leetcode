/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  let l = 0,
      r = nums.length - 1,
      leftSubarray = l,
      rightSubarray = r,
      detectedIndex = -1

  while (l <= r) {
    let mediana = Math.round((l + r) / 2)
    if (target < nums[mediana]) {
      r = mediana - 1
      rightSubarray = mediana
    } else if (target > nums[mediana]) {
      l = mediana + 1
      leftSubarray = mediana
    }

    if (target === nums[mediana]) {
      detectedIndex = mediana
      l = leftSubarray
      r = mediana

      while (l <= r) {
        mediana = Math.round((l + r) / 2)

        if (mediana > 0 && nums[mediana] === target && nums[mediana - 1] < target || mediana === 0 && nums[mediana] === target) {
          leftSubarray = mediana
          break
        }

        if (target <= nums[mediana]) {
          r = mediana - 1
        } else if (target > nums[mediana]) {
          l = mediana + 1
        }
      }

      l = detectedIndex
      r = rightSubarray

      while (l <= r) {
        mediana = Math.round((l + r) / 2)

        if (mediana < nums.length - 1 && nums[mediana] === target && nums[mediana + 1] > target || mediana === nums.length - 1 && nums[mediana] === target) {
          rightSubarray = mediana
          break
        }

        if (target < nums[mediana]) {
          r = mediana - 1
        } else if (target >= nums[mediana]) {
          l = mediana + 1
        }
      }

      break
    }
  }

  if (detectedIndex < 0) return [-1,-1]
  return [leftSubarray, rightSubarray]
}

console.log(searchRange([1], 1))
console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))
console.log(searchRange([1,1,1,1,1], 1))
console.log(searchRange([1,2,3,4,4,4,5,5,5,5,6,6,6,6,7,8], 5))
console.log(searchRange([1,1,1,2,4,4,4,5,5,5,5,6,7,8,8,9,9,9,9,9,9,10], 9))
