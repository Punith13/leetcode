// 	Median of Two Sorted Arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let numCombine = [...nums1, ...nums2]
  numCombine = numCombine.sort((a, b) => (a > b ? 1 : -1))

  let index1, index2
  if (numCombine.length % 2 == 0) {
    index1 = numCombine.length / 2
    index2 = index1 - 1

    return (numCombine[index1] + numCombine[index2]) / 2
  } else {
    index1 = Math.floor(numCombine.length / 2)
    return numCombine[index1]
  }
}
