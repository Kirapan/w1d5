function isvalidNumber (number) {
  if (typeof(number)==='number') {
    return number;
  } else {
    return 'Not a valid number!';
  }
}
function sumString(arr){
  var result = 0;
  arr.forEach(function(item) {
    result += Number(item);
  });
  return result;
}
//console.log(sumString(['5','3']));
var check = function (number) {
  isvalidNumber();
  var input = String(number).split("");
  var result = 0;
  for (var i = input.length - 2; i >= 0; i -= 2) {
    input[i] = String(Number(input[i]) * 2);
    if (Number(input[i]) > 9) {
      var mutant = input[i].split("");
      input[i] = String(Number(mutant[0])+ Number(mutant[1]));
    }
  }
  var sumed = sumString(input);

  if (sumed % 10 === 0) {
   return true;}
  else {
   return false;}
};

console.log(check(688234));
console.log(check("sdsf"));

module.exports = check;
