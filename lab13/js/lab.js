/*
 * FizzBuzz function that finds multiples
 * Author: Alia Toth-Smith
 * Date: 5/17/2022
 */

 //Set the max number
var maxNum = 200;

//Create which multiples your looking for and associated message
var multiples = [
  {num: 3, message: 'Fizz'},
  {num: 5, message: 'Buzz'},
  {num: 7, message: 'Boom'}
];

function fizzbuzz(max, factors){
//Loops through every number from 1 to maxNum
 for (var i = 1; i <= max; i++){
   //console.log(i);

   //Create an empty string to hold the message
   var exclaimation = '';

   //Loops through every item of the array multiples
   for (var j = 0; j < factors.length; j++){

     //Retrieves an object of multiples to variable mult
     var multiple = factors[j];
     console.log(multiple);

     //If current number is a multiple of the specified number,
     //add that number's message to the final exclaimation
     if (i % multiple.num == 0){
       exclaimation += multiple.message;
     };

   };

   //Adds exclaimation mark if number is a multiple
   //of any of the inputed multiples
   if (exclaimation !== ''){
     exclaimation += '!';
     $('#output').append('<p class="less-space">' + exclaimation);

   } else {
     $('#output').append('<p class="less-space">' + i);
   };

  // console.log(i + ': ' + exclaimation);


};

}

//Hide a button for later use
var submitNumsEl = $('#submitNums');
submitNumsEl.hide();

//Find outputs
var outputEl = $('#output');
var numForm = $('#numForm');

debugger;

//Submit Factors is clicked
$('#submitNumFactors').click(function(){
    //Get number of factors
  var numFactors = $('#numFactors').val();

  //Clear the output divs
  numForm.empty();
  outputEl.empty();

  //Create a place to sumbit the max number
  numForm.append('Max Number: <input type="number"min="0" id="maxNum"><br><br>');

  //Create boxes for all of the factors and onomanapieas
  for (var i = 0; i < numFactors; i++){
    numForm.append('Number: <input type="number" min="0" id="factor'+ i + '"> ');
    numForm.append('Exclaimation: <input type="text" id="exclaimation'+ i + '"><br>');
  }

  //Show button for submitting numbers
  submitNumsEl.show();

});

submitNumsEl.click(function(){
  var numFactors = $('#numFactors').val();
  var maxNum = $('#maxNum').val();

  var factors = [];

  for (var i = 0; i < numFactors; i++){
    var factorId = '#factor' + i;
    var exclaimationId = '#exclaimation' + i;

    console.log(exclaimationId);

    factors.push({num: $(factorId).val(), message: $(exclaimationId).val()})

  }

  fizzbuzz(maxNum, factors);

});
