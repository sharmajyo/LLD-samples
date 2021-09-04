const toMinute = (t) => {
  const a = t.split(":");
  return (parseInt(a[0])) * 60 + parseInt(a[1]);
}

var findMinDifference = function (timePoints) {
  let diff;
  let times = [];
  for (let i = 0; i < timePoints.length; i++) {
    times.push(toMinute(timePoints[i]));
  }
  for (let i = 0; i < times.length; i++) {
    // Find the minimum element in unsorted array
    for (let j = i + 1; j < times.length; j++) {
      if (times[i] > times[j]) {
        a = times[i];
        temp = a;
        times[i] = times[j];
        times[j] = a;
      }
    }
  }
  console.log(times)
  if (diff != 0) {
    diff = Math.abs(times[0] - times[1]);
    for (let i = 1; i < times.length - 1; i++) {
      diff = Math.min(diff, Math.abs(times[i] - times[i + 1]))
      // console.log('--', diff)
    }
    // console.log('--', diff, times[0] + 24 * 60 - times[times.length - 1])
    diff = Math.min(diff, times[0] + 24 * 60 - times[times.length - 1])

  }

  return diff;
};

console.log(findMinDifference(


  ["00:00", "23:59", "00:00"]))