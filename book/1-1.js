const isUnique = string => {
  let checker = 0

  for (let i = 0; i < string.length; i++) {
    let value = string.charCodeAt(i) - 97
    if ((checker & (1 << value)) > 0) {
      return false
    }

    checker |= 1 << value
  }

  return true
}

const isPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false
  }

 let xor1 = 0, xor2 = 0

  for (let i = 0; i < string2.length; i++) {
    xor1 = xor1 ^ string1.charCodeAt(i)
    xor2 = xor2 ^ string2.charCodeAt(i)
  }

  return xor1 === xor2
}

console.log(isUnique('hello'))
console.log(isPermutation('hello', 'lelob'))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
