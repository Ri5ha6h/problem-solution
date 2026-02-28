class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
  hasDuplicate(nums) {
      const updatedSet = new Set(nums);
      return updatedSet.size !== nums.length;
  }
}

console.log(new Solution().hasDuplicate([1, 2, 3, 1]));
console.log(new Solution().hasDuplicate([1, 2, 3, 4]));