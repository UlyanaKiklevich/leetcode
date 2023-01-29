/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (prices.length === 1) {
    return 0
  }

  let maxProfit = 0,
      minNumber = prices[0] + 1,
      maxNumber = 0,
      maxNumberIndex = -1

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] >= minNumber || prices[i + 1] <= prices[i]) continue

    if (prices[i] < minNumber) {
      minNumber = prices[i]
      if (i < maxNumberIndex) {
        if (maxNumber - minNumber > maxProfit) {
          maxProfit = maxNumber - minNumber
        }
        continue
      }
      maxNumber = 0
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] >= maxNumber) {
          maxNumber = prices[j]
          maxNumberIndex = j
        }
      }

      if (maxNumber - minNumber > maxProfit) {
        maxProfit = maxNumber - minNumber
      }
    }
  }

  return maxProfit > 0 ? maxProfit : 0
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([4,3,5,2,10,0,9]))
console.log(maxProfit([3,2,6,5,0,3]))
console.log(maxProfit([4,11,2,1,7]))

