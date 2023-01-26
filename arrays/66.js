/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne1 = function(digits) {
  let toNext = 0,
      notAdded = 1,
      i = digits.length - 1

  while ((toNext || notAdded) && i >= 0) {
    const sum = digits[i] + notAdded + toNext
    notAdded = 0
    toNext = +(sum >= 10)
    digits[i] = toNext ? sum - 10 : sum
    i--
  }

  if (toNext) {
    digits.unshift(toNext)
  }

  return digits
};

const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      digits[i]++
      return digits
    }
  }

  digits.push(0)
  digits[0] = 1

  return digits
}

console.log(plusOne([9,9,9,9]))
console.log(plusOne([1,2,3]))
console.log(plusOne([9]))
console.log(plusOne([1]))
