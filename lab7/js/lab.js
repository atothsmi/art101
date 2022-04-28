
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



//Prompt user for their name
var userName = window.prompt("Enter a username!");

//Display user's name on the page
document.writeln( "<div id='lab7-output'>Your Sorted Username:<br>",
    nameSort(userName), "<br></div>")
