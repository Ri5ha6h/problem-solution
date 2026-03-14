/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const newn = []
    newn[0] = nums[0];
    for(let i = 1; i < nums.length / 2; i++){
        const j = nums[i]
        newn.push(nums[n])
        newn.push(j)
        n++
    }
    newn.push(nums[n]);
    return newn
    
    // below optimized
    // const ans = new Array(2 * n);
    // for (let i = 0; i < 2 * n; i++) {
    //     console.log(i/2)
    //     if (i % 2 === 0) {
    //         ans[i] = nums[i / 2];
    //     } else {
    //         ans[i] = nums[n + Math.floor(i / 2)];
    //     }
    //     console.log(ans)
    // }
    // return ans;
};