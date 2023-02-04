/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  const words = s.split(' '),
        newArray = []

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      newArray.unshift(words[i])
    }
  }

  return newArray.join(' ')
}

describe('Reverse Words in a String', () => {
  test('Test 1', () => {
    expect(reverseWords('the sky is blue')).toStrictEqual('blue is sky the')
  })

  test('Test 2', () => {
    expect(reverseWords('  hello world  ')).toStrictEqual('world hello')
  })

  test('Test 3', () => {
    expect(reverseWords('a good   example')).toStrictEqual('example good a')
  })


  test('Test 4', () => {
    expect(reverseWords('aaa   ')).toStrictEqual('aaa')
  })

  test('Test 5', () => {
    expect(reverseWords('   aaa')).toStrictEqual('aaa')
  })

  test('Test 6', () => {
    expect(reverseWords('  hello   world   ')).toStrictEqual('world hello')
  })
})
