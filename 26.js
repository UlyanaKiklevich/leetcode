/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  const SYMBOL = '_'
  let k = 1, i = 0

  for (i; i < nums.length; i++) {
    if (nums[i] === SYMBOL) {
      k = i
      break
    }
    while(i + 1 < nums.length && nums[i] === nums[i + 1]) {
      let j = i + 1
      for (j; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1]

        if (nums[j] === SYMBOL) {
          break
        }
      }

      nums[j] = SYMBOL
    }
  }

  if (i === nums.length) {
    k = nums.length
  }

  return k
}

console.log(removeDuplicates([1,1,2]))
