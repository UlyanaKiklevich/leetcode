/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const seenNumbers = new Set([n])

  const getSum = number => {
    let total = 0
    while (number > 0) {
      total += Math.pow(number % 10, 2)
      number = Math.floor(number / 10)
    }

    return total
  }

  while (n > 1) {
    const current = getSum(n)
    if (seenNumbers.has(current)) {
      return false
    }

    seenNumbers.add(current)
    n = current
  }

  return true
}

console.log(isHappy(673))
