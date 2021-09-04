// array [-3,2,3,3,6,8,15], target 6
// 2 pointer problem
let arr = [-3, 2, 3, 3, 6, 8, 15];
let target = 6;
let start = 0;
let end = arr.length - 1;
while (end > start) {
  if (arr[start] + arr[end] == target) {
    console.log(`${arr[start]}, ${arr[end]}`)
    break;
  }
  if (arr[start] + arr[end] < target) {
    start++;
  } else {
    end--;
  }

};