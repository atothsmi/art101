/*
 * Summary: Practice using arrays and objects
 * Author: Alia Toth-Smith
 * Date: 4/21/2022
 */
var myTransport = ['legs', 'bus', 'car', 'bicycle', 'surfboad'];

var myMainRide = {
    make: 'Toyota',
    model: 'Prius',
    color: 'green',
    year: 2008,
    ownIt: true,
    age: function() {
        return 2022 - myMainRide.year;
      }
};

document.writeln("My prefered methods of transportation: ");
for (var i = 0; i < myTransport.length; i++) {
  if (i == myTransport.length - 1){
    document.writeln(myTransport[i] + ".<br><br>");
  }
  else {
    document.writeln(myTransport[i] + ", ");
  }
}

/* Print out object code from Wes Modes*/
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

document.writeln("My Transport Array: " + myTransport);
