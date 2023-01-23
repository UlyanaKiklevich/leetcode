/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = number => {
  const Romans = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  const keys = Object.keys(Romans)
  const keysSize = keys.length
  let result = ''

  for (let i = 0; i < keysSize; i ++) {
    while(number >= Romans[keys[i]]) {
      result += keys[i]
      number -= Romans[keys[i]]
    }
  }

  return result
}

console.log(intToRoman(450))
