/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const newNums = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            newNums.push(nums[i]);
        }
    }

    const subLen = nums.length - newNums.length;
    for(let i = 0; i < nums.length; i++){
        nums[i] = newNums[i];
    }

    for(let i = 0; i < subLen; i++){
        nums.pop();
    }
  
    // below optimized
    // let i = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[j] !== val) {
    //             nums[i] = nums[j];
    //             i++;
    //         }
    //     }
    //     return i;
};