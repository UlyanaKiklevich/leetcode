/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  let arrays = []

  if (nums.length < 4) return arrays

  nums.sort((a, b) => a - b)

  for (let i = 0 ;i < nums.length - 3; i ++) {
    let sum = nums[i]

    for (let j = i + 1; j < nums.length - 2; j++) {
      let tmpSum = sum + nums[j]

      for (let k = j + 1; k < nums.length - 1; k++) {
        tmpSum = sum + nums[j] + nums[k]

        for (let l = k + 1; l < nums.length; l++) {
          tmpSum = sum + nums[j] + nums[k] + nums[l]
          if (tmpSum > target) break

          if (tmpSum === target) {
            const alreadyContains = arrays.some(array => array[0] === nums[i] && array[1] === nums[j] && array[2] === nums[k] && array[3] === nums[l])
            if (!alreadyContains) {
              arrays.push([nums[i], nums[j], nums[k], nums[l]])
            }
          }
        }
      }
    }
  }


  return arrays
}

const fourSumSolution = (nums, target) => {
  const arrays = []

  if (nums.length < 4) return arrays

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let l = j + 1, r = nums.length - 1

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          arrays.push([nums[i], nums[j], nums[l], nums[r]])
          l++
          r--
          while (l < r && nums[l] === nums[l - 1]) l++
          while (l < r && nums[r] === nums[r + 1]) r--
        } else if (sum < target) {
          l++
        } else {
          r--
        }
      }
    }
  }

  return arrays
}

console.log(fourSumSolution([-1,0,-5,-2,-2,-4,0,1,-2], -9))
