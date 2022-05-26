/*
 * Accessing More Complicated JSON and APIs
 * Author: Alia Toth-Smith
 * Date: 5/26/2022
 */

//Define Endpoint
var endpoint = 'https://xkcd.com/2623/info.0.json'

//Number of current comic
var comicNum = 2623;

//Current Max Number of comics
var comicMax = 2624;

//Current number of max comics
//Function to retrieve and place info from API
function getAndPutData(endpoint) {
  $.ajax({
    // The URL for the request (from the api docs)
    url: endpoint,
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // Get information from JSON object
        console.log(data);
        var comicObj = data;
        var secTitleEl = '<h2>' + comicObj.title + '</h2>';
        var dateEl = '<p>' + comicObj.month + '-' + comicObj.day + '-' + comicObj.year + '</p>';
        var numEl = '<p>#' + comicObj.num + '</p>';
        var imgEl = '<img src="' + comicObj.img + '" alt="' + comicObj.alt + '"><br>';
        var altEl = comicObj.alt;

        num = comicObj.num;
        console.log(num);
        $('#output').html(secTitleEl + '<div id="date">' + dateEl + numEl + '</div>'+ imgEl + altEl);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // Error Message
        console.log("Error:", textStatus, errorThrown);
        $('#output').html("Comic Not Found");
    }
})
}

if (comicNum <= 1){
  $('#prev').hide();
}

if (comicNum >= comicMax){
  $('#next').hide();
}

getAndPutData(endpoint);

//Previous Comic Button
$('#prev').click(function(){
  comicNum -= 1;
  var newEndpoint = 'https://xkcd.com/' + comicNum + '/info.0.json';
  getAndPutData(newEndpoint);
  if (comicNum <= 1){
    $('#prev').hide();
  }
  if (comicNum < comicMax){
    $('#next').show();
  }
});

//Next Comic Button
$('#next').click(function(){
  comicNum += 1;
  var newEndpoint = 'https://xkcd.com/' + comicNum + '/info.0.json';
  getAndPutData(newEndpoint);
  if (comicNum > 1) {
    $('#prev').show()
  }
  if (comicNum >= comicMax){
    $('#next').hide();
  }
});
