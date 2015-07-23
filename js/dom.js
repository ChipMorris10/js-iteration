/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/
// find the sum-all id and add the event listener click and creat an empty function
var addAll = document.getElementById("sum-all").addEventListener("click", function(){
  // find element "prices"
  var prices = document.getElementsByName("prices")[0].children;
  // finding the id "answers"
    var sumAnswer = document.getElementById("answers"); sumAnswer.innerHTML = (sumAll(prices));
});



