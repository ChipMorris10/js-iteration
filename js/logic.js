/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a loop to make this happen.

*/

// this function returns the numbers from console.log
function sumAll(options){
  var total = 0;
  for (var i = 0; i < options.length; i++) {
    total += parseInt(options[i].value);
  }
  return total;
}

function countSelected(options) {
    var count = 0;
    for (var i = 0; i <options.length; i++) {
        if (options[i].selected) {
            count ++;
        }
    }
    return count;
}

console.log(sumAll([3,4,5]));
