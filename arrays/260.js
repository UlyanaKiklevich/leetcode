/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumberMy = function(nums) {
   const map = new Map(),
        answ = []

  for (let i = 0; i < nums.length; i++) {
    let tmp = map.get(nums[i])
    map.set(nums[i], tmp ? tmp + 1 : 1)
  }

  const keys = Array.from(map.keys())

  for (let i = 0; i < keys.length; i++) {
    if (map.get(keys[i]) === 1) {
      answ.push(keys[i])

      if (answ.length === 2) break
    }
  }

  return answ
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

const singleNumber = function (nums) {
  let xy = 0;
  for (let num of nums) {
    xy = xy ^ num;
  }
  dec2bin(xy)
  dec2bin(-xy)
  xy = xy & -xy;
  let res = [0, 0];
  for (let num of nums) {
    if (xy & num) {
      res[0] = res[0] ^ num;
    } else {
      res[1] = res[1] ^ num;
    }
  }
  return res;
};

console.log(singleNumber([1,2,1,3,2,5]))
