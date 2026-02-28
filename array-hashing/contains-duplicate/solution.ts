function containsDuplicate(nums: number[]): boolean {
  const updatedSet = new Set(nums);
  return updatedSet.size !== nums.length;
};


console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 2, 1]));