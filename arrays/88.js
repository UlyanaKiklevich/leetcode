/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1
  for (let j = m + n - 1; j >= 0; j--) {
    if (p2 < 0) break
      if (p1 >= 0 && nums1[p1] > nums2[p2]) {
        nums1[j] = nums1[p1]
        p1 --
      } else if (p1 < 0 || (p2 >=0 && nums2[p2] >= nums1[p1])) {
        nums1[j] = nums2[p2]
        p2 --
    }
  }
  return nums1
}


console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([0], 0, [1], 1))
