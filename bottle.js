
var investment = Number(process.argv[2]);

var bottle = function (investment) {
  var bottleF = (investment - investment % 2 ) / 2;
  var bottleEmp = 0;
  var bottleCap = 0;
  var total = bottleF;
  var totalB = 0;
  var totalC = 0;
  while (bottleF > 0 || bottleCap >= 4 || bottleEmp >= 2) {
    bottleEmp += bottleF;
    bottleCap += bottleF;
    totalB += bottleF;
    totalC += bottleF;
    bottleF = 0;
    bottleF += (bottleEmp - bottleEmp % 2) / 2 + (bottleCap - bottleCap % 4) / 4;
    total += bottleF;
    bottleEmp = bottleEmp % 2;
    bottleCap = bottleCap % 4;
  }
  var final = {};
  var sub ={};
  sub.BOTTLES = parseInt(totalB / 2);
  sub.CAPS = parseInt(totalC / 4);
  final['TOTOAL BOTTLES'] = total;
  final['REMAINING BOTTLES'] = bottleEmp;
  final['REMAINING CAPS'] = bottleCap;
  final['TOTAL EARNED'] = sub;
  return final;
};


console.log(bottle(investment));
