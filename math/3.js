/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let sign = 1,
      result = ''

  if (x < 0) {
    sign = -1
    x *= -1
  }

  while (x > 0) {
    result += x % 10
    x = Math.floor(x /10)
  }

  const number = parseInt(result || '0') * sign
  const maxNumber = Math.pow(2, 31)

  return number > maxNumber || number < maxNumber * -1 ? 0 : number
}

console.log(reverse(0))
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))
console.log(reverse(-2147483648))

