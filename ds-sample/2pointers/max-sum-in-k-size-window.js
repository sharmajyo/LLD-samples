// array [1,9,-1,-2,7,3,-1,2], k 4
// 2 pointer problem

let arr = [1, 9, -1, -2, 7, 3, -1, 2];
let k = 4;

let start = 0;
let end = 0;
let windowSum = 0;
let maxSum = 0;
// move end pointer to end of window
while (end < k) {
  windowSum += arr[end++];
}

while (end < arr.length) {
  windowSum = windowSum + arr[end] - arr[start];
  maxSum = Math.max(maxSum, windowSum);
  end++;
  start++;
}

console.log(maxSum);