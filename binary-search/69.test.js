/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let l = 0,
      r = x

  while (l < r) {
    let m = Math.trunc(l + (r - l) / 2)

    if (m * m > x) {
      r = m - 1
      continue
    }

    if ((m + 1) * (m + 1) > x) {
      return m
    }

    l = m + 1
  }

  return l
}

describe('Sqrt(x)', () => {
  test('Test 1', () => {
    expect(mySqrt(4)).toStrictEqual(2)
  })

  test('Test 2', () => {
    expect(mySqrt(8)).toStrictEqual(2)
  })

  test('Test 3', () => {
    expect(mySqrt(16)).toStrictEqual(4)
  })

  test('Test 4', () => {
    expect(mySqrt(200)).toStrictEqual(14)
  })

  test('Test 5', () => {
    expect(mySqrt(1000)).toStrictEqual(31)
  })
})
