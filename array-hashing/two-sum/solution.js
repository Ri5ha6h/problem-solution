class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++){
      for (let j = i + 1; j <= nums.length - 1; j++){
        const addition = nums[i] + nums[j]
        if (addition === target) {
          return [i, j]
        }
      }
    }
  }
}

console.log(new Solution().twoSum([3, 4, 5, 6], 7))
console.log(new Solution().twoSum([4, 5, 6], 10))
console.log(new Solution().twoSum([5, 5], 10))
console.log(new Solution().twoSum([2, 5, 5, 11], 10))