/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const summarize = (num1, num2) => {
  let result = '',
      i = num1.length - 1,
      j = num2.length - 1,
      add = 0

  while (i >= 0 || j >= 0) {
    let tmp1 = i >= 0 ? (num1.charCodeAt(i) - 48) : 0
    let tmp2 = j >= 0 ? (num2.charCodeAt(j) - 48) : 0

    let t = tmp1 + tmp2 + add
    if (t > 9) {
      add = 1
      t -= 10
    } else {
      add = 0
    }

    result = t + result
    i--
    j--
  }


  return add ? add + result : result
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  let result = '0'

  for (let i = num2.length - 1; i >= 0; i--) {
    let tmp = '',
        multiplier = num2.charCodeAt(i) - 48,
        add = 0

    for (let j = num1.length - 1; j >= 0; j--) {
      let t = (num1.charCodeAt(j) - 48) * multiplier + add
      if (t > 9 && j > 0) {
        add = Math.floor(t / 10)
        t = t % 10
      } else {
        add = 0
      }

      tmp = t + tmp
    }

    for (let k = 0; k < num2.length - 1 - i; k++) {
      tmp += '0'
    }

    result = summarize(tmp, result)
  }

  return result
}

console.log(multiply('123456789', '987654321'))
