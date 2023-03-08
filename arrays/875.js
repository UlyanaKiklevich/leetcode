/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
  let l = 0, r = Number.MAX_VALUE

  while(l <= r) {
    const m = Math.trunc((r - l) / 2) + l
    let time = 0

    for (let i = 0; i < piles.length; i++) {
      time += Math.ceil(piles[i] / m)
      if (time > h) {
        break
      }
    }

    if (time <= h) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return l
}

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))

