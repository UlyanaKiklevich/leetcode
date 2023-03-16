/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
  s = s.trim()
  const signs = {
    '-': -1,
    '+': 1
  }
  let number = 0,
      i = 0,
      decs = 10,
      mecs = 1,
      counter = 1

  let multiplier = 1
  if (Object.keys(signs).includes(s.charAt(0))) {
    multiplier = signs[s.charAt(0)]
    s = s.substring(1, s.length)
  }

  while ( i < s.length) {
    if (s.charAt(i) === '.') {
      decs = 1
      mecs = .1
      i++
      continue
    }


    const code = s.charAt(i) - '0'
    if (isNaN(code) || code == ' ') {
      return number * multiplier
    }

    number *= decs
    number += code * mecs

    i++
  }

  return number * multiplier
}


describe('String to Integer (atoi)', () => {
  test('Test 1', () => {
    expect(myAtoi('42')).toStrictEqual(42)
  })

  test('Test 2', () => {
    expect(myAtoi('-42')).toStrictEqual(-42)
  })

  test('Test 3', () => {
    expect(myAtoi('    -42')).toStrictEqual(-42)
  })


  test('Test 4', () => {
    expect(myAtoi('     -42 hello')).toStrictEqual(-42)
  })

  test('Test 5', () => {
    expect(myAtoi('9.6')).toStrictEqual(9.6)
  })

  test('Test 6', () => {
    expect(myAtoi('    -9.6')).toStrictEqual(-9.6)
  })

  test('Test 7', () => {
    expect(myAtoi('-21474836480')).toStrictEqual(-2147483648)
  })

  test('Test 8', () => {
    expect(myAtoi('21474836481')).toStrictEqual(2147483647)
  })

  test('Test 9', () => {
    expect(myAtoi('    -9.65')).toStrictEqual(-9.65)
  })

  test('Test 10', () => {
    expect(myAtoi('9.65')).toStrictEqual(9.65)
  })

  test('Test 10', () => {
    expect(myAtoi('91.65')).toStrictEqual(91.65)
  })
})
