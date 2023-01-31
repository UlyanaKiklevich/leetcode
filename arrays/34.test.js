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

describe('Search range test', () => {
  test('Test 1', () => {
    expect(searchRange([1], 1)).toStrictEqual([0, 0])
  })

  test('Test 2', () => {
    expect(searchRange([5,7,7,8,8,10], 6)).toStrictEqual([-1, -1])
  })

  test('Test 3', () => {
    expect(searchRange([], 0)).toStrictEqual([-1, -1])
  })

  test('Test 4', () => {
    expect(searchRange([1,1,1,1,1], 1)).toStrictEqual([0, 4])
  })

  test('Test 5', () => {
    expect(searchRange([1,2,3,4,4,4,5,5,5,5,6,6,6,6,7,8], 5)).toStrictEqual([6, 9])
  })

  test('Test 6', () => {
    expect(searchRange([1,1,1,2,4,4,4,5,5,5,5,6,7,8,8,9,9,9,9,9,9,10], 9)).toStrictEqual([15, 20])
  })
})
