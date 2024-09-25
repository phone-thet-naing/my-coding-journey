/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 Example 1:

 Input: nums = [1,1,2]
 Output: 2, nums = [1,2,_]
 Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
 It does not matter what you leave beyond the returned k (hence they are underscores).
 Example 2:

 Input: nums = [0,0,1,1,1,2,2,3,3,4]
 Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicate = function (arr, i) {
  if (typeof arr[i] === "undefined") {
    return arr;
  }

  if (arr[i] === arr[i - 1]) {
    arr.splice(i, 1);
    removeDuplicate(arr, i);
  } else {
    removeDuplicate(arr, i + 1);
  }
};

var removeDuplicates = function (nums) {
  if (nums.length === 1) return nums.length;
  removeDuplicate(nums, 1);

  console.log(nums);
  return nums.length;
};

const nums = [1];
const result = removeDuplicates(nums);

console.log(result);

/**
Result
Runtime: 151 ms
Memory Usage: 57.7 MB
*/
