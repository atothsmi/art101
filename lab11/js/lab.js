/*
 * Creates buttons using jQuery that affect the page's css
 * Author: Alia Toth-Smith
 * Date: 5/12/2022
 */

//Find

// Find the sections you want to add the button to
var challengeEl = $('#challenge');
console.log(challengeEl)

var problemsEl = $('#problems');

var resultsEl = $('#results');

// Create the buttons and label them and add it to the section
challengeEl.append("<button id='challengebtn'>Click Me!");

problemsEl.append("<button id='problemsbtn'>Click Me!");

resultsEl.append("<button id='resultsbtn'>Click Me!");



//Add a click event to each button that toggles an additional class
$('#challengebtn').click(function(){
  console.log('i work!');
  //Toggle a class for the button's associated div
  challengeEl.toggleClass('special-challenge');
});

$('#problemsbtn').click(function(){
  //Toggle a class for the button's associated div
  problemsEl.toggleClass('special-problems');
});

$('#resultsbtn').click(function(){
  //Toggle a class for the button's associated div
  resultsEl.toggleClass('special-results');
});

//Extra Experimentation
//Find the output div
var outputEl = $('#output');
console.log(outputEl);

//Add a new button with two new buttons with ids
outputEl.append("<button id='output1'>You should be blue! ->");
outputEl.append("<button id='output2'> <- No, you should be blue!");

//Add a click event to each button that toggles it's class
//and the other button's class
$('#output1').click(function(){
  $('#output2').addClass('special-problems');
  $('#output1').removeClass('special-problems');
});

$('#output2').click(function(){
  $('#output1').addClass('special-problems');
  $('#output2').removeClass('special-problems');
});
