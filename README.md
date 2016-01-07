# APIs

## Learning Objectives

- Review what is an API
- Consider the use of external APIs
- Build a basic app that makes use of an external API
- Understand how to manipulate the returned data and create different requests

## Define an API

**Can someone remind me what API is and what it does?**

An API can both collect and provide data for public use.  API stands for "Application Program Interface".  It allows developers to access certain raw data behind a given web app.

As developers, we can create our own APIs, connect to external APIs, or both!

**Can anyone think of some sites that would have useful APIs?**

* https://developers.google.com/maps/?hl=en
* http://www.brewerydb.com/developers
* http://espn.go.com/apis/devcenter/
- Oh wait, forget that last one :(
  Some companies choose to keep their data private!

## Using an External API with jQuery

Let's get started actually building an app that utilizes an external API where the data are called through AJAX requests in Javascript. For this, we're going to use the OMDB API to build a simple movie search tool.  Fork and clone down this repo and open it up in Atom.

## Intro

Right now we have the basic HTML setup and some empty Javascript functions.  If you open the index.html file in your browser, you will see you have an input field and button, but nothing happens when you try to search! We'll get into that right now.
* note, there is a solution branch here if you need to check your work later!

We are going to use jQuery here, as it provides a library to make an "AJAX" (Asynchronous Javascript and XML) call.  The "$.ajax" allows us to make the usual HTTP requests: 'GET' 'POST' 'PUT' 'PATCH' 'DELETE', depending on the access we have for a given API.  In this case, we're going to work with 'GET'.

## We Do
**Let's get this set up**

```javascript
// initial API call on click
$(document).ready( function() {
 $(".search").click(function(){
   apiCall();
 })
})

var apiCall = function() {
 console.log('clicked');
 // add code here to make the AJAX request!
}

var movie = function(response) {
 // add code here to append data to the body!
}
```

As you can see, we have a couple empty functions right now. ```apiCall``` will be the function through which we create the AJAX request, while ```movie``` will be used to append the returned data to the browser. So, how do we go about setting up the AJAX request? Let's add the code below to ```apiCall```.

```javascript
// get value from search input field
var keyword = $("input[name='keyword']").val();
var url = "'**Add url here!**'"
$.ajax({
  url: url,
  type: "GET",
  dataType: "json"
}).done ( function(response){
  console.log(response);
  // call movie function below to append movie titles
  movie(response);
}).fail ( function (){
  console.log("fail");
}).always( function(){
  console.log("Something happens");
})
```
The syntax here is pretty straight forward! Though, nothing actually works in the browser still. All we need to do is pass in a url that leads to an API source, the type of request ('GET'), and the type of data to be returned ('json' - JavaScript Object Notation).  The request takes three promises, ```.done```, ```.fail```,```.always```.  These each return functions based on the outcome of the request.  ```.done``` will run if the request is successful.  ```.fail``` will run if it fails. ```.always``` runs in both circumstances, as it allows you to trigger a following action regardless of the outcome. You will notice though, that we haven't included an actual url. Many API urls are fairly similar, with a few subtle differences.  Let's go to the OMDB api page, http://www.omdbapi.com/, and add in the url.

```javascript
"https://www.omdbapi.com/?s="+keyword
```

Let's now try searching for "Star Wars" and see what shows up in the console.  It's an array of Star Wars movies! But where is that coming from exactly?
The JSON file returned by OMDB returns an array titled "Search".  So, our ```response``` from ```.done``` can be parsed by including the ".Search" after.

All we need to do now is append the data to the browser.  The below for-loop added to ```movie``` will process the response and append each object within to the body of the browser.

```javascript
for (var i=0;i<response.Search.length;i++) {
  // append movie titles to body
  $('body').append("<div class = movie-title></div>")
  $('.movie-title').append("<p>"+response.Search[i].Title+"</p>")
  $('.movie-title').append("<img src = '"+response.Search[i].Poster+"'>")
}
```

We have a movie search!

## You Do (2-3 mins)
Right now our search only returns movie titles,, a picture, and the year it was released.  
Take a few minutes to play around with the url.  Go back to the OMDB site and see what else you can do.  Specifically, is there a better way to search by an actual title (try "Star Wars: The Force Awakens") and return more information? Note, you will have to change the code in the ```movie``` function to return the information to the browser as well.

**hint, instead of "searching" in the url, try finding the movie "title"**

## Bonus

Try re-doing this exercise, but with the Giphy api source!
* https://github.com/Giphy/GiphyAPI

**Note, this API takes an API key**

## Wrap-up Questions/Discussion

* What have we learned today?
  - Review what is an API
  - Consider the use of external APIs
  - Build a basic app that makes use of an external API
  - Understand how to manipulate the returned data and create different requests
* What is a good use of external APIs?
* What are a couple different types of url requests one can make (using OMDB as an example)?
* What other ways are there to make API requests?


## Resources

* https://www.getpostman.com/
* http://www.programmableweb.com/apis
