/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length

  const map = new Map()
  let counter = 0,
    maxLength = 1

  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      i = map.get(s.charAt(i)) + 1
      map.clear()
      map.set(s.charAt(i), i)
      if (maxLength < counter) {
        maxLength = counter
      }
      counter = 1
      continue
    }

    map.set(s.charAt(i), i)
    counter++
  }

  return Math.max(maxLength, counter)
}

describe('Longest Substring Without Repeating Characters', () => {
  test('Test 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toStrictEqual(3)
  })

  test('Test 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toStrictEqual(1)
  })

  test('Test 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toStrictEqual(3)
  })


  test('Test 4', () => {
    expect(lengthOfLongestSubstring('aaaaaa')).toStrictEqual(1)
  })

  test('Test 5', () => {
    expect(lengthOfLongestSubstring('aaaabbbbb')).toStrictEqual(2)
  })

  test('Test 6', () => {
    expect(lengthOfLongestSubstring('baaaaa')).toStrictEqual(2)
  })

  test('Test 7', () => {
    expect(lengthOfLongestSubstring('aaaaab')).toStrictEqual(2)
  })

  test('Test 8', () => {
    expect(lengthOfLongestSubstring('ababababababab')).toStrictEqual(2)
  })

  test('Test 8', () => {
    expect(lengthOfLongestSubstring('abcdefgyh123456789a')).toStrictEqual(18)
  })
  test('Test 8', () => {
    expect(lengthOfLongestSubstring('abcabcd')).toStrictEqual(4)
  })
  test('Test 9', () => {
    expect(lengthOfLongestSubstring('aa')).toStrictEqual(1)
  })
})
