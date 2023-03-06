/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const getFactorial = n => {
    if (n > 1) {
      return n * getFactorial(n - 1);
    }

    return 1
  }

  let numbers = []

  for (let i = 1; i <= n; i++) {
    numbers.push(i)
  }

  let s = ''

  for(let i = 1; i <= n; i++){
    const index = Math.trunc(k/getFactorial(n-i))
    s += numbers[index]
    numbers = numbers.filter(el => el !== numbers[index])
    k -= index * getFactorial(n-i)
  }

  return s
}

console.log(getPermutation(4, 15))
