/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parenObj = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    const arr = []
  for (const char of s) {
        if(arr.includes(parenObj[char]) && arr[arr.length - 1] === parenObj[char]){
            arr.pop()
        }
        else {
            arr.push(char)
        }
      console.log(arr)
    }

    if(arr.length === 0){
        return true
    }

    return false

};

var isValid2 = function(s) {
    const parenObj = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    const arr = []
    for(let char of s){
        if(parenObj[char]){
            if(arr.pop() !== parenObj[char]){
                return false
            }
        }
        else {
            arr.push(char)
        }
    }

    return arr.length === 0

};

console.log(isValid("()"));
console.log(isValid("(){}[]"));
console.log(isValid("([)]"));
console.log(isValid("({{{{}}}))"));