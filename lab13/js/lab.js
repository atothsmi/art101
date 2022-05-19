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
 for (var i = 1; i <= maxNum; i++){
   //console.log(i);

   //Create an empty string to hold the message
   var exclaimation = '';

   //Loops through every item of the array multiples
   for (var j = 0; j < multiples.length; j++){

     //Retrieves an object of multiples to variable mult
     var multiple = multiples[j];
     //console.log(multiple);

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
   };


   $('#output').append('<p class="less-space">' + i + ': ' + exclaimation);
   console.log(i + ': ' + exclaimation);


};

}

fizzbuzz(maxNum, multiples);
