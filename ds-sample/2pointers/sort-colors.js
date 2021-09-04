// given array with colors (0,1,2)
// arrange same colors together
// 2 pointer problem
// one pointer at 0 other at 2
const swap = (a, b) => {
  let c = a;
  a = b;
  b = c;
};

var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  while (l < r && i <= r) {
    if (nums[i] == 0) {
      let a = nums[l];
      nums[l] = nums[i];
      nums[i] = a;
      i++;
      l++;
      console.log('--l', nums, i, l)
    } else if (nums[i] == 2) {
      let a = nums[r];
      nums[r] = nums[i];
      nums[i] = a;
      r--;
      console.log('--', nums, i, r)
    } else {
      i++;
    }
  }
};

nums = [2, 0, 1]
sortColors(nums)
console.log(nums)