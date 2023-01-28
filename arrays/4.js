/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let p1 = nums1.length - 1, p2 = nums2.length - 1
  let j = nums1.length + nums2.length - 1
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[j] = nums1[p1]
      p1--
    } else {
      nums1[j] = nums2[p2]
      p2--
    }
    j --
  }
   const ind1 = Math.floor((nums1.length - 1) / 2)
   const ind2 = Math.ceil((nums1.length - 1) / 2)

   return (nums1[ind1] + nums1[ind2]) / 2
}

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([2], [1,3]))
console.log(findMedianSortedArrays([1,2,3,4,5], [2]))
console.log(findMedianSortedArrays([2], [1,2,3,4,5]))
console.log(findMedianSortedArrays([0], [1,2,3,4,5]))
console.log(findMedianSortedArrays([1,2,3,4,5], [0]))
console.log(findMedianSortedArrays([7], [1,2,3,4,5]))
console.log(findMedianSortedArrays([1,2,3,4,5], [7]))
console.log(findMedianSortedArrays([1,2,3,4,5], [1,2,3,4,5]))
console.log(findMedianSortedArrays([5,6,7,8,9], [1,2,3,4,5]))
