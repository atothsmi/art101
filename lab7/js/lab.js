
/*
 * Practice creating Functions
 * Author: Alia Toth-Smith
 * Date: 4/26/2022


/*
 * Sorts letters of a user's input
 * Parameters: userName - string
 * Returns:
*/
function nameSort(userName){
  //Split userName into an array of characters
  var splitUserName = userName.split('');
  //Poorly sort userName alphabetically and by case
  splitUserName.sort();
  //Rejoin userName to string and return it
  return splitUserName.join('');
}



//Prompt user for their name
var userName = window.prompt("Enter a username!");

//Display user's name on the page
document.writeln( "<div id='lab7-output'>Your Sorted Username:<br>",
    nameSort(userName), "<br></div>")
