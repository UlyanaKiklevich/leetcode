/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
  const quicksort = (nums, l, r) => {
    const partition = (nums, l, r) => {
      const p = nums[l]
      while (l <= r) {
        while(nums[l] < p) {
          l++
        }
        while(nums[r] > p) {
          r--
        }
        if (l >= r) {
          break
        }

        nums[l] = nums[l] + nums[r]
        nums[r] = nums[l] - nums[r]
        nums[l] = nums[l] - nums[r]

        l++
        r--
      }

      return r
    }

    if (l < r) {
      let q = partition(nums, l, r)
      quicksort(nums, l, q)
      quicksort(nums, q + 1, r)
    }

    return nums
  }

  return quicksort(nums, 0, nums.length - 1)
}

console.log(sortArray([5,2,3,1]))
