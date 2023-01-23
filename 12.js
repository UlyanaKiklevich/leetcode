/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = number => {
  const Romans = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  const keys = Object.keys(Romans).map(key => parseInt(key))
  const keysSize = keys.length

  let result = ''

  while (number > 0) {
    let parsed = String(number).split('')
    const tmp = parseInt(parsed[0]) * Math.pow(10, parsed.length - 1) // 900

    if(Romans[tmp]) {
      result += Romans[tmp]
      number -= tmp
      continue
    }

    for (let i = 0; i < keysSize; i ++) {
      if (i + 1 < keysSize && keys[i] < tmp && keys[i + 1] > tmp) {
        const next = keys[i + 1]
        const prev = keys[i]

        let diff = next - tmp
        let amountOfDecimals = parseInt(String(diff).split('')[0])
        let addUp = amountOfDecimals !== 1

        if(addUp) {
          diff = tmp - prev
          amountOfDecimals = parseInt(String(diff).split('')[0])
        }

        let prefix = ''

        for (let i = 0; i < amountOfDecimals; i ++) {
          prefix += Romans[diff / amountOfDecimals]
        }

        if (addUp) {
          result += Romans[prev] + prefix
        } else {
          result += prefix + Romans[next]
        }

        break
      }

      if (i + 1 == keysSize) {
        let amountOfDecimals = parseInt(String(number).split('')[0])

        for (let i = 0; i < amountOfDecimals; i ++) {
          result += Romans[tmp / amountOfDecimals]
        }
      }
    }

    number -= tmp
  }

  return result
}

console.log(intToRoman(3))
