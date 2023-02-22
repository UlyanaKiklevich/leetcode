/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if(n === 0) {
    return 1
  }

  if(n < 0){
    n = -n
    x = 1/x
  }

  if (!(n % 2)) {
    return myPow(x * x, n / 2)
  } else {
    return  x * myPow(x * x, n / 2)
  }
}

describe('Sqrt(x)', () => {
  test('Test 1', () => {
    expect(myPow(2, 10)).toStrictEqual((4).toFixed(5))
  })

  test('Test 2', () => {
    expect(myPow(2.1, 3)).toStrictEqual((9.261).toFixed(5))
  })

  test('Test 3', () => {
    expect(myPow(2, -2)).toStrictEqual((.25).toFixed(5))
  })

  test('Test 4', () => {
    expect(myPow(0.00001, 2147483647)).toStrictEqual(0)
  })
})
