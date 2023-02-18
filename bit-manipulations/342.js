/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
  return n > 0 && !(n & (n - 1)) && (n - 1) % 3 === 0
}

const isPowerOfTwo = function(n) {
  return !(n & (n - 1))
}

console.log(isPowerOfFour(32))
/*console.log(isPowerOfTwo(33))*/

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
