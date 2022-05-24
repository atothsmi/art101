/*
 * AJAX Tests
 * Author: Alia Toth-Smith
 * Date: 5/26/2022
 */

//Create Endpoint
var endpoint = 'https://itsthisforthat.com/api.php?text'

function getAjax(){
	//Retrieve info from API
	$.ajax({
  	url: endpoint,
    type: 'GET',
	}) //Message if data is retrieved succsessfully
  .done(function(data){
  	console.log('Data Retrieved')
    $('#output').append('<p>' + data);
	}) //Failed Message
  .fail(function(request, error){
  	 $('#output').html("Fuck, it isn't working");
  });
}

//Find 'activate' button
var buttonEl = $('#activate');

//Add Click Event to the Button
buttonEl.click(getAjax)

//Endpoint for NASA Astronomy Picture of the Day
var spaceEndpoint = 'https://api.nasa.gov/planetary/apod?api_key=f6BbQoYxvKxhc1Uma5Sw3eaUK0dJQJL1TdebqC6G'

function getSpaceAjax(){
	//Retrieve info from API
	$.ajax({
  	url: spaceEndpoint,
    type: 'GET',
		dataType: 'json'
	})//Message if data is retrieved succsessfully
  .done(function(data){
  	console.log('Data Retrieved')

		//Format and Place Data retireved on page
		$('#spaceOutput').append('<h3>' + data.title + '<br>');
		$('#spaceOutput').append('<img src=' + data.url + '><br>');
		$('#spaceOutput').append(data.explanation);
		$('#spaceOutput').append('<p>Copyright: ' + data.copyright + '<br>Date:' + data.date + '<br>');
	})
  .fail(function(request, error){
  	 $('#spaceOutput').html("Fuck, it isn't working");
  });
}

//Find 'activate' button
var buttonEl = $('#spaceToday');

//Add Click Event to the Button
buttonEl.click(getSpaceAjax)
