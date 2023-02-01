/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(string1, string2) {

  const gcd = (str1, str2) => {
    let shortString = str1.length > str2.length ? str2 : str1
    let longStrong = str1.length > str2.length ? str1 : str2

    if (longStrong === shortString) {
      return shortString
    }

    if (longStrong.substring(0, shortString.length) !== shortString) {
      return ''
    }

    if (longStrong.substring(0, shortString.length) === shortString) {
      return gcd(longStrong.substring(shortString.length, longStrong.length), shortString)
    }
  }

  return gcd(string1, string2)
}

describe('Greatest Common Divisor of Strings', () => {
  test('Test 1', () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toStrictEqual("ABC")
  })

  test('Test 2', () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toStrictEqual("AB")
  })

  test('Test 3', () => {
    expect(gcdOfStrings("LEET", "CODE")).toStrictEqual("")
  })

  test('Test 4', () => {
    expect(gcdOfStrings("ABCD", "ABCD")).toStrictEqual("ABCD")
  })

  test('Test 5', () => {
    expect(gcdOfStrings("AAA", "A")).toStrictEqual("A")
  })

  test('Test 5', () => {
    expect(gcdOfStrings("AAA", "AA")).toStrictEqual("A")
  })
})
