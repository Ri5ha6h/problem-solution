// leetcode
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // const uniqueNums = [];
    // for(const num of nums){
    //     if(!uniqueNums.includes(num)){
    //         uniqueNums.push(num)
    //     }
    // }
    // for(let i = 0; i < uniqueNums.length; i++){
    //     nums[i] = uniqueNums[i]
    // }
    // const len = nums.length - uniqueNums.length;
    // for(let i = 0; i < len; i++){
    //     nums.pop();
    // }
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};