
var customSortString = function (order, s) {
  let orderByIds = {};
  var i = order.length;
  while (i--) {
    orderByIds[order[i]] = i;
  };
  strings = s.split('');
  strings.sort((a, b) => {
    let r = 0;
    if (!orderByIds[a] === undefined) {
      r = 1;
    } else if (!orderByIds[b]) {
      r = -1;
    } else if (orderByIds[a] != orderByIds[b]) {
      r = orderByIds[a] > orderByIds[b] ? 1 : -1;
    }
    return r;
  })

  return strings.join('');
};


console.log(customSortString("exv",
  "xwvee"))

//swap('qwertyu', 2, 4))