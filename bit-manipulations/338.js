/**
 * @param {number} n
 * @return {number[]}
 */
const countBitsMy = function(n) {
  const answ = []
  for (let i = 0; i <= n; i++) {
    let counter = 0,
        number = i

    while(number) {
      number &= number - 1
      counter ++
    }

    answ.push(counter)
  }

  return answ
}

var countBits = function(n) {
  let dp = new Array(n + 1);
  dp.fill(0);
  let offset = 1;
  for(let i = 1; i <= n; ++i){
    if(offset * 2 == i){
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};

console.log(countBits(5))
console.log(countBits(2))
