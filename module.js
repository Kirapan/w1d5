
var list =[1,2,3,4];




function sortFunc (datalist) {
  datalist.sort(function (a,b) {
    return a - b;
  });
  return datalist;

}

module.exports = {
  'addToList': function(number) {return list.push(number);},
  'sortFunc': sortFunc
};
