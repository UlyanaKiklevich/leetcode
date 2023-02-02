/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {

}

describe('Shuffle String', () => {
  test('Test 1', () => {
    expect(restoreString("abba", "dog cat cat dog")).toStrictEqual(true)
  })

  test('Test 2', () => {
    expect(restoreString("abba", "dog cat cat fish")).toStrictEqual(false)
  })

  test('Test 3', () => {
    expect(restoreString("aaaa", "dog cat cat dog")).toStrictEqual(false)
  })

  test('Test 4', () => {
    expect(restoreString("aaaa", "dog dog dog dog")).toStrictEqual(true)
  })

  test('Test 5', () => {
    expect(restoreString("abcd", "dog cat fish cow")).toStrictEqual(true)
  })

  test('Test 6', () => {
    expect(restoreString("a", "dog")).toStrictEqual(true)
  })

  test('Test 7', () => {
    expect(restoreString("a", "dog cat")).toStrictEqual(false)
  })

  test('Test 8', () => {
    expect(restoreString("abba", "dog cat cat dog dog")).toStrictEqual(false)
  })

  test('Test 9', () => {
    expect(restoreString("abab", "dog cat cat dog")).toStrictEqual(false)
  })

  test('Test 10', () => {
    expect(restoreString("abba", "dog dog dog dog")).toStrictEqual(false)
  })

  test('Test 11', () => {
    expect(restoreString("abba", "dog constructor constructor dog")).toStrictEqual(true)
  })
})
