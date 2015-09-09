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
  var prices = document.getElementById("prices");
  var options = prices.options;

   // find id "answers"
   addAnswerToList(sumAll(options));

});

document.getElementById('count-selected').addEventListener('click', function(){
    var prices = document.getElementById("prices");
    var options = prices.options;

addAnswerToList(countSelected(options));
});

function addAnswerToList(answer) {
    var answerList = document.getElementById("answers");
  var li = document.createElement('li');
  li.innerHTML = (answer);
  answerList.appendChild(li);
}



