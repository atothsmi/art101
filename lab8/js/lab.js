/*
 * Practice using anon functions and callbacks
 * Uses map to apply factorial and anon function that divides by 4 to an array
 * Author: Alia Toth-Smith
 * Date: 4/28/2022
*/

//Define an array
var myNums = [12, 2, 4, 54, 90, 56, 21, 43, 233, 7];

//Define a function that applys factorial to positive numbers
function posFactorial(x) {
    if (x == 1){
        return 1;
    }
    else{
         return (x * posFactorial(x-1));
    }
}

//Factorial all nums in myNums using named function
var myNumsFactorial = myNums.map(posFactorial);

//Divide all nums in myNums by 4 using anon function
var myNumsDividedByFour = myNums.map(
                                  function(x){
                                    return (x / 4);
                                });

var myNumsFactorialSpaced = "";

for (var i = 0; i < myNumsFactorial.length; i++) {
    if (i == myNumsFactorial.length - 1){
        myNumsFactorialSpaced += myNumsFactorial[i];
    }
    else {
        myNumsFactorialSpaced += myNumsFactorial[i] + ", <br>";
      }
    }

function main(){
  var outputEl = document.getElementById("output");
  outputEl.innerHTML = '<p>Here is my original array:<br>' + myNums;
  outputEl.innerHTML += "Each number in my array factorialized:<br>";
  outputEl.innerHTML += "<p>" + myNumsFactorialSpaced + "</p><br>";
  outputEl.innerHTML += "Each number in my array divided by 4:<br>";
  outputEl.innerHTML += "<p>" + myNumsFactorialSpaced + "</p>";
  outputEl.innerHTML += "</p>";
}
