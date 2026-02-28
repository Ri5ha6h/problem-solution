function isAnagram(s: string, t: string): boolean {
  const updatesS = s.split("").toSorted().join("");
  const updatedT = t.split("").toSorted().join("");
  return updatesS === updatedT;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
