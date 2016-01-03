
 // initial API call
$(document).ready( function() {
  $(".search").click(function(){
    apiCall();
  })
})


var apiCall = function() {
  console.log('clicked');
  // add code here to make the AJAX request!
  var keyword = $("input[name='keyword']").val();
  var url = "https://www.omdbapi.com/?s="+keyword
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done ( function(response){
    console.log(response.Search);
    // call movie function below to append movie titles
    movie(response);
  }).fail ( function (){
    console.log("fail");
  }).always( function(){
    console.log("Something happens");
  })
}


var movie = function(response) {
  // add code here to append data to the body!
  for (var i=0;i<response.Search.length;i++) {
    // append movie titles to body
    $('body').append("<div class = movie-title></div>")
    $('.movie-title').append("<p>"+response.Search[i].Title+"</p>")
    $('.movie-title').append("<img src = '"+response.Search[i].Poster+"'>")
  }
}
