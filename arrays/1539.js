/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositiveMy = function(arr, k) {
  let l = 0,
      r = arr.length - 1
  let border = -1
  let lastNumber = -1

  while (l <= r) {
    let m = Math.trunc(l + (r - l) / 2)
    let currentNumber = arr[m]
    let missingAmountOfElements = currentNumber - m - 1
    if (missingAmountOfElements < k) {
      const numberRight = arr[m + 1]
      if (numberRight - m - 2 < k) {
        l = m + 2
      } else {
        l = m + 1
      }
      continue
    } else {
      const numberLeft = arr[m - 1]
      if (!numberLeft) {
        break
      }
      if (numberLeft - m < k) {
        border = m - 1
        break
      } else {
        r = m - 1
      }
    }
  }

  if (border < 0) {
    const lastIndex = arr.length - 1
    lastNumber = arr[lastIndex]
    let firstNumber = arr[0]
    const amountOfGaps1 = lastNumber - lastIndex - 1
    const amountOfGaps2 = firstNumber - 1
    if (k > amountOfGaps1) {
      k -= amountOfGaps1
      while (k > 0) {
        lastNumber ++
        k--
      }
    } else {
      lastNumber = firstNumber
      k = amountOfGaps2 - k
      while(k >= 0) {
        lastNumber --
        k--
      }
    }
  }

  return lastNumber > 0 ? lastNumber : k + border + 1
}

const findKthPositive = function(arr, k) {
  let l = 0, r = arr.length, m

  while (l < r) {
    m = Math.trunc((l + r) / 2);
    if (arr[m] - 1 - m < k)
      l = m + 1;
    else
      r = m;
  }
  return l + k;
}

console.log(findKthPositive([1,2,3,4,5], 1))
console.log(findKthPositive([1,2,3,4,5,7,8,9,10], 1))
console.log(findKthPositive([6, 10], 1))
console.log(findKthPositive([3, 10], 2))
console.log(findKthPositive([2], 1))
console.log(findKthPositive([2,3,4,7,11], 5))
console.log(findKthPositive([1, 3, 5, 7, 9, 11, 13], 5))
