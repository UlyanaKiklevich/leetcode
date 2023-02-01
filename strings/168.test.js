/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
  const letters = []
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCharCode(i + 65))
  }

  let result = ''

  while (columnNumber > 0) {
    columnNumber--
    let rest = columnNumber % 26
    result = letters[rest] + result
    columnNumber = Math.floor(columnNumber / 26)
  }

  return result
}

describe('Convert to excel title test', () => {
  test('Test 1', () => {
    expect(convertToTitle(1)).toStrictEqual('A')
  })

  test('Test 2', () => {
    expect(convertToTitle(28)).toStrictEqual('AB')
  })

  test('Test 3', () => {
    expect(convertToTitle(701)).toStrictEqual('ZY')
  })

  test('Test 4', () => {
    expect(convertToTitle(16824)).toStrictEqual('XWB')
  })

  test('Test 5', () => {
    expect(convertToTitle(52)).toStrictEqual('AZ')
  })
})
