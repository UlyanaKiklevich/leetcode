/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(input) {
  const romanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  const chars = input.split('')
  let number = 0
  const charsSize = chars.length

  for (let i = 0; i < charsSize; i++) {
    if (i < charsSize - 1 && romanMap.get(chars[i]) < romanMap.get(chars[i + 1])) {
      number = number + romanMap.get(chars[i + 1]) - romanMap.get(chars[i])
      i ++
      continue
    }

    number += romanMap.get(chars[i])
  }

  return number
}

console.log(romanToInt('XI'))
