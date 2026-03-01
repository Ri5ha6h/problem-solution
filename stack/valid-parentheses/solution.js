class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
    const newStr = s.split("");
    const checkList = [];
    const allInOne = ["[]", "{}", "()"];
    let i = 0;
    let fixLength = newStr.length;
    let flag = "first";
    while (i < fixLength) {
      if (allInOne.includes(`${newStr.at(i)}${newStr.at(-(i + 1))}`) && flag === "first") {
        flag = "first";
        fixLength = newStr.length / 2;
        checkList.push(true);
        i++;
      }
      else if (allInOne.includes(`${newStr.at(i)}${newStr.at(i + 1)}`)) {
        flag = "second";
        checkList.push(true);
        i += 2;
      }
      else {
        flag = "first";
        checkList.push(false);
        i++
      }
    }
    if (checkList.includes(false)) {
      return false;
    }
    return true;
  }
}

console.log(new Solution().isValid("[]"));
console.log(new Solution().isValid("([{}])"));
console.log(new Solution().isValid("[(])"));
console.log(new Solution().isValid("(){}}{"));
console.log(new Solution().isValid("()[]{}"));