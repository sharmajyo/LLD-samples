var optimalDivision = function (nums) {
  let division = nums[0];
  for (let index = 1; index < nums.length; index++) {
    if (nums.length > 2 && index == 1) {
      division += `/(${nums[index]}`;
    } else if (nums.length > 2 && index == nums.length - 1) {
      division += `/${nums[index]})`;
    } else {
      division += `/${nums[index]}`;
    }
  }
  return `${division}`;
};

nums = [1000, 100, 10, 2]
optimalDivision(nums)