/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  /* IMPLEMENT ME */
  return arr.length;
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  /* IMPLEMENT ME */
  var result = 0;
  arr.forEach(function(item) {
    result += item;
  });
  return result;
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function mean(arr) {
  /* IMPLEMENT ME */
  if (arr.length !== 0) {
    result = sum(arr) / arr.length;
    return round(result);
  } else {
    return null;
  }
}



// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };

/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  /* IMPLEMENT ME */
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  /* IMPLEMENT ME */
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[0];
}

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  /* IMPLEMENT ME */
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] - arr[0];
}

// Don't change below:

module.exports = { min: min, max: max, range: range };

/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function median(arr) {
  /* IMPLEMENT ME */
  arr.sort(function(a, b) {
    return a - b;
  });
  var result = 0;
  if (arr.length % 2 === 0) {
    result = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2;
  } else {
    result = arr[(arr.length - 1) / 2];
  }
  return round(result);
}



// Don't change below:

module.exports = { median: median };

/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  /* IMPLEMENT ME */
  var newObj = {};
  var newArr = arr.map(function (number){
    if (newObj[number] === undefined) {
      newObj[number] = 1;
    } else {
      newObj[number] += 1;
    } return newObj;
  });
  var mode = 0;
  var modeKey = "";
  for (var key in newObj) {
    if (newObj[key] > mode) {
      mode = newObj[key];
      modeKey = key;
    }
  } return modeKey;
}

// Don't change below:

module.exports = { mode: mode };

/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
var sumFunc = require("./00.js");

function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {
  /* IMPLEMENT ME */
  var sumArr = 0;
  var average = sumFunc.mean(arr);
  for(var i = 0; i < arr.length; i++) {
    sumArr += Math.pow((arr[i] - average), 2);
  }
  var stdev = Math.sqrt(sumArr / arr.length);
  return round(stdev);
}



// Don't change below:

module.exports = { stdev: stdev };

