class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
  isAnagram(s, t) {
    const updatesS = s.split("").toSorted().join("");
    const updatedT = t.split("").toSorted().join("");
    return updatesS === updatedT;
  }
}

console.log(new Solution().isAnagram("racecar", "carrace"));
console.log(new Solution().isAnagram("jar", "jam"));
