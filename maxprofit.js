var brute = function (arr) {
  var maxPro = -Infinity;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      var profit = arr[j] - arr[i];
      if (profit > maxPro) {
        maxPro = profit;
      }
    }
  } return maxPro > 0? maxPro : -1;
};

console.log(brute([45, 24, 35, 31, 40, 38, 11]));
console.log(brute([10, 9, 8, 7, 6, 5, 3]));
