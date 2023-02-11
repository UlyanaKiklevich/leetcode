/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let result = n & 1, i = 0
  n = n >>> 1

  while (i < 31) {
    result <<= 1
    result |= n & 1
    n >>>= 1
    i++
  }

  return result >>> 0
}

console.log(reverseBits(4294967293))
