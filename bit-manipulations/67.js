/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let i = a.length - 1,
      j = b.length - 1,
      result = '',
      next = 0

  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? a.charAt(i) : 0,
        n2 = j >= 0 ? b.charAt(j) : 0

    i--
    j--

    let tmp = (n1 & 1) + (n2 & 1) + next
    next = 0

    if (tmp === 0 || tmp === 1) {
      result = tmp + result
      continue
    }

    result = (tmp & 1) + result

    if (tmp === 2) {
      result = 0 + result
      next = 1
      continue
    }

    if (tmp === 3) {
      result = 1 + result
      next = 1
    }
  }

  return next ? next + result : result
}

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
  '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))
