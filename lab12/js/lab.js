/*
 * Sorts a user into a category based on their name
 * Author: Alia Toth-Smith
 * Date: 5/17/2022
 */
//Later specify that it must be a string

// Create a function sortingHat() that takes a string as an argument
function sortingHat(name){
  //counts the letters in str and assigns it to a variable length
  var length = name.length;
  console.log(length);

  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  var mod = length % 4;

  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
  //  depending on whether the value of mod is 0, 1, 2, or 3
  if (mod == 0) {

    //Returns Gryffindor if mod is 0
    return "Gryffindor";

  } else if (mod == 1) {

    //Returns Ravenclaw if mod is 1
    return "Ravenclaw";

  } else if (mod == 2) {

    //Returns Slytherin if mod is 2
    return "Slytherin";

  } else {

    //Returns Hufflepuff if mode is any other value
    return "Hufflepuff";
  }

};


// Create an click listener attached to #button
$('#button').click(function(){
  console.log("OWOWO");
  //gets the value of #input and assigns it to a variable name
  var name = $('#input').val();
  console.log(name);

  //runs sortingHat(name) and stores the result in a variable house
  var house = sortingHat2(name);

  //appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
  $('#output').html('<p id="house-results">The Sorting Hat has sorted you into: ' + houses[house].name + "<br>Description: " + houses[house].desc);

});

//Create an array of houses info
var houses = [
  {name: 'Gryffindor', desc: 'Brave to a fault'},
  {name: 'Ravenclaw', desc: 'Too smart for your own good'},
  {name: 'Slytherin', desc: 'Will do anything to get what you want'},
  {name: 'Hufflepuff', desc: 'Nice and overlooked'},
  {name: 'Gryfflepuff', desc: 'Nice to a fault'},
  {name: 'Slytherclaw', desc: 'Too smart for your ambitions'},


]

function sortingHat2(name){

  //Get length of name
  var length = name.length;
  console.log(length);

  // uses modulus (% operator) to get the remainder with the length of house info
  return length % houses.length;
}
