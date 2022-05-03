/*
 * Experiments with DOM implementation, adding and manipulating HTML with JS
 * Author: Alia Toth-Smith
 * Date: 5/3/2022
*/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById('output');

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement('p');

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "This div was created and placed using JavaScript!";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement('p');

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "This is a different div than the div created before, but it was created with the same method!";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
outputEl.style.borderStyle = 'dotted';
outputEl.style.margin = "10px";
new1El.style.color = 'purple';
new2El.style.color = 'purple';

//Create a new div and add it to the top of an elements
var new3El = document.createElement('p');
new3El.innerHTML = 'This div was inserted on top of the other elements in this div!';
outputEl.insertBefore(new3El, new1El);
