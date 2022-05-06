/* Experiments with JS Events
 * Sorts a user's name after a button press
 * Author: Alia Toth-Smith
 * Date: 5/6/2022
 */

// Borrow the nameSort() function or my anagram() function from Lab 7.
function nameSort(userName){
  //Split userName into an array of characters
  var splitUserName = userName.split('');
  //Poorly sort userName by case
  splitUserName.sort()

  //Sort by alphabetically only, ignoring case
  splitUserName.sort(function(a,b){
    var adjA = a.charCodeAt(0);
    var adjB = b.charCodeAt(0);

    if (a.charCodeAt(0) > 90){
        adjA = a.charCodeAt(0) - 32;
    }
    if (b.charCodeAt(0) > 90){
        adjB = b.charCodeAt(0) - 32;
    }
    return adjA - adjB;
});
  //Rejoin userName to string and return it
  return splitUserName.join('');
}

//Anagram function
function anagram(userName){
  //Lower case all letters
  var lowerName = userName.toLowerCase();
  console.log(lowerName);

  //Split name into characters
  var splitName = lowerName.split('');

  //Create an empty array
  var anagramName = [];

  //For every element in the array
  while (splitName.length > 0) {

    //Randomly pick letters from array
    var randomIndex = Math.floor(Math.random() * splitName.length);
    console.log(randomIndex);

    //Retrieve randomly picked letter
    var letter = splitName[randomIndex];

    //Remove randomly picked letter from array
    splitName.splice(randomIndex, 1)

    //Append to new array
    anagramName.push(letter);
  }

  //Title case first character if possible
  console.log(anagramName);
  anagramName[0] = anagramName[0].toUpperCase();

  //Look through every element of the anagram
  for (let i = 0; i < anagramName.length; i++){

    //If not the first element of the array
    if (i != 0){

      //test if the character before is a space, dash, or apostrophe
      if(anagramName[i-1] == ' ' || anagramName[i-1] == '-' || anagramName[i-1] == "'") {

        //replace the character with the uppercase version if possible
        anagramName[i] = anagramName[i].toUpperCase();
      }
    }
  }

  //Make the anagram a string
  anagramName = anagramName.join('')

  //return string
  return anagramName;
}

//Create variables that will be used
var sortedName, anagramName, userName;

//Find the button and output div
var sortButtonEl = document.getElementById('my-button');
var outputEl = document.getElementById('output');
console.log(outputEl);

// Attach an event listener to your button:
sortButtonEl.addEventListener('click', function(){

  // Gets the value of your input field
  userName = document.getElementById('user-name').value;

  // Runs that value through your sort() or anagram() function and saves the results.
  sortedName = nameSort(userName);
  anagramName = anagram(userName);

  // Replaces the html in <div id=output> with the results
  outputEl.innerHTML = 'Your sorted name: ' + sortedName + '<br>';
  outputEl.innerHTML += 'Your anagram name: ' + anagramName;

});
