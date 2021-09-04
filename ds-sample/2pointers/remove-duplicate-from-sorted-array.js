var removeDuplicates = function (nums) {
  let dest_index = 0;
  let dest = nums;
  dest[dest_index++] = nums[0];
  dest[dest_index++] = nums[1];
  let twoprev = nums[0];
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > twoprev) {
      twoprev = nums[i - 1];
      dest[dest_index++] = nums[i];
    } else {
      twoprev = nums[i - 1];
    }
  }
  dest.length = dest_index;
};

arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 5, 6]
removeDuplicates(arr)

console.log(arr)