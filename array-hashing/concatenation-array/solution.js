/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const len = nums.length
    const ans = new Array(len * 2)
    for(let i = 0; i < len * 2; i++){
        if(i < nums.length){
            ans[i] = nums[i]
        }
        else {
            ans[i] = nums[i - len]
        }
    }
    return ans;
};