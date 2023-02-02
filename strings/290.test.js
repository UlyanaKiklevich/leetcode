/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
  const words = s.split(' ')

  if (words.length !== pattern.length) {
    return false
  }

  const mapLetters = new Map()
  const mapWords = new Map()

  for (let i = 0; i < pattern.length; i++) {
    if (mapLetters.get(pattern[i]) && mapLetters.get(pattern[i]) !== words[i] ||
      mapWords.get(words[i]) && mapWords.get(words[i]) !== pattern[i]
    ) {
      return false
    } else {
      mapLetters.set(pattern[i], words[i])
      mapWords.set(words[i], pattern[i])
    }
  }

  return true
}

describe('Word Pattern', () => {
  test('Test 1', () => {
    expect(wordPattern("abba", "dog cat cat dog")).toStrictEqual(true)
  })

  test('Test 2', () => {
    expect(wordPattern("abba", "dog cat cat fish")).toStrictEqual(false)
  })

  test('Test 3', () => {
    expect(wordPattern("aaaa", "dog cat cat dog")).toStrictEqual(false)
  })

  test('Test 4', () => {
    expect(wordPattern("aaaa", "dog dog dog dog")).toStrictEqual(true)
  })

  test('Test 5', () => {
    expect(wordPattern("abcd", "dog cat fish cow")).toStrictEqual(true)
  })

  test('Test 6', () => {
    expect(wordPattern("a", "dog")).toStrictEqual(true)
  })

  test('Test 7', () => {
    expect(wordPattern("a", "dog cat")).toStrictEqual(false)
  })

  test('Test 8', () => {
    expect(wordPattern("abba", "dog cat cat dog dog")).toStrictEqual(false)
  })

  test('Test 9', () => {
    expect(wordPattern("abab", "dog cat cat dog")).toStrictEqual(false)
  })

  test('Test 10', () => {
    expect(wordPattern("abba", "dog dog dog dog")).toStrictEqual(false)
  })

  test('Test 11', () => {
    expect(wordPattern("abba", "dog constructor constructor dog")).toStrictEqual(true)
  })
})
