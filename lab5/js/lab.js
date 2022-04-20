/*
 * Summary: Practice declaring variables and making them show up on an HTML page
 * Authors: Alia Toth-Smith
 * Date: 4/19/2022
 */

//Declare variables for car
var make, model, color, year;

make = 'Toyota';
model = 'Prius';
color = 'green';
year = 2008;

var ownIt = true;

//Calculate car's age
var age = 2022 - year;

//Print out car variables into document
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years<br>");
document.writeln("Do I own it? : " + ownIt + "<br>");
